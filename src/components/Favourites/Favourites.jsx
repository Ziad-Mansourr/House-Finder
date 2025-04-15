import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// تأكدي إنك عملتي toast container مرة وحدة في الأب الرئيسي

const FavouritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get favorites on component mount
  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      try {
        const response = await axios.get("users/favorites");
        setFavorites(response.data);
        toast.success("Favorites loaded successfully");
      } catch (error) {
        toast.error("Failed to load favorites");
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  // Delete a favorite
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`users/favorites/${id}`);
      setFavorites((prev) => prev.filter((fav) => fav.id !== id));
      toast.success("Favorite removed");
    } catch (error) {
      toast.error("Failed to delete favorite");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="p-4 border-b">
          <p className="text-gray-500 text-sm">Profile</p>
          <h1 className="text-2xl font-bold">Favourites</h1>
        </div>

        {loading && <p className="text-center p-4 text-gray-500">Loading...</p>}

        {!loading && favorites.length === 0 && (
          <p className="text-center p-4 text-gray-500">No favorites found.</p>
        )}

        {!loading &&
          favorites.map((fav) => (
            <div key={fav.id} className="bg-white rounded-lg overflow-hidden m-4 shadow">
              <img
                src={fav.imageUrl || "src/components/Favourites/apartment.png"}
                alt="Property"
                className="w-full h-48 object-cover"
              />

              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold">EGP {fav.price.toLocaleString()}</span>
                  <span className="text-gray-600 text-sm">{fav.negotiable ? "Negotiable" : "Fixed"}</span>
                  <button onClick={() => handleDelete(fav.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500 hover:text-red-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                        2 6.02 4.02 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 
                        4.81 13.76 4 15.5 4 17.98 4 20 6.02 20 8.5c0 3.78-3.4 
                        6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-700">{fav.description}</p>

                <div className="flex items-center text-gray-600 text-sm space-x-4">
                  <span>🛏️ {fav.bedrooms}</span>
                  <span>🚿 {fav.bathrooms}</span>
                  <span>📏 {fav.area} sqm</span>
                </div>

                <p className="text-gray-500 text-sm">{fav.location}</p>
                <p className="text-gray-400 text-xs">{fav.postedAt}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
