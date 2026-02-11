import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function MessagesList() {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("this"); // default search term
  const [loading, setLoading] = useState(false);

  const fetchMessages = async (content = searchTerm, page = 2, limit = 6) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found!");

      const res = await axios.get("/api/v1/message/get-messages", {
        headers: { Authorization: `USER ${token}` },
        params: {
          content,
          page,
          limit,
        },
      });

      setMessages(res.data.data.messages || []);
    } catch (err) {
      console.error("Error fetching messages:", err.response || err);
      toast.error(err.response?.data?.message || "Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  // Fetch messages عند تحميل الصفحة
  useEffect(() => {
    fetchMessages();
  }, []);

  // Fetch messages أثناء الكتابة
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchMessages(searchTerm, 1, 6); // live search
    }, 300); // تأخير 300ms لتخفيف الضغط على السيرفر

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const handleSearch = () => {
    fetchMessages(searchTerm, 1, 6); // البحث اليدوي عند الضغط على الزر
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md mb-5">
      <Toaster position="top-right" />
      <h2 className="text-xl font-bold mb-4">Messages</h2>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search messages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading messages...</p>
      ) : messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul className="space-y-3">
          {messages.map((msg) => (
            <li key={msg._id} className="border-b pb-2">
              <p>{msg.content}</p>
              <small className="text-gray-500">
                Sent in: {new Date(msg.createdAt).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
