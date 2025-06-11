// src/components/Favourites/FavouritesPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const FavouritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get wishlist items
  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/api/users/favorites");
        setFavorites(response.data);
        toast.success("Wishlist loaded successfully");
      } catch (error) {
        toast.error("Failed to load wishlist");
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  // Delete an item
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/favorites/${id}`);
      setFavorites((prev) => prev.filter((item) => item.id !== id));
      toast.success("Item removed from wishlist");
    } catch (error) {
      toast.error("Failed to delete item");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
      {loading ? (
        <p>Loading...</p>
      ) : favorites.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        favorites.map((fav) => (
          <div key={fav.id} className="border p-4 mb-2 shadow rounded">
            <p>{fav.description}</p>
            <button
              onClick={() => handleDelete(fav.id)}
              className="text-red-500 mt-2"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavouritesPage;
