'use client';

// Home.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Item {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
}

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState({ name: '', img: '', description: '', price: 0 });
  const [updateItem, setUpdateItem] = useState<Item | null>(null);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showUpdatePopups, setShowUpdatePopups] = useState<{ [key: number]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleAddItem = async () => {
    try {
      await axios.post('http://localhost:5000/items', newItem);
      fetchItems();
      setNewItem({ name: '', img: '', description: '', price: 0,  });
      setShowAddPopup(false);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleUpdateItem = async () => {
    if (updateItem && updateItem.id) { // Add a check for updateItem and its id
      try {
        await axios.put(`http://localhost:5000/items/${updateItem.id}`, updateItem);
        fetchItems();
        setUpdateItem(null);
      } catch (error) {
        console.error('Error updating item:', error);
      }
    }
  };

  const handleDeleteItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleGetItem = async (name: string) => {
    try {
      const response = await axios.get('http://localhost:5000/items');
      const filteredItems = response.data.filter((item: Item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
      setItems(filteredItems);
    } catch (error) {
      console.error('Error searching items:', error);
    }
  };
  

  return (
    <div className="container">
      <h1>Clothing Store</h1>
      <div className="search-bar">
        {/* <input
          type="text"
          placeholder="Search items by name..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleGetItem(e.target.value);
          }}
        /> */}

      </div>
      {/* <div className="form-container">
        <button onClick={() => setShowAddPopup(true)} className="button">Add Item</button>
        {showAddPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Add Item</h2>
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="input-field"
                placeholder="Name"
              />
              <input
                type="text"
                value={newItem.img}
                onChange={(e) => setNewItem({ ...newItem, img: e.target.value })}
                className="input-field"
                placeholder="Image URL"
              />
              <input
                type="text"
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                className="input-field"
                placeholder="Description"
              />
              <input
                type="text"
                value={`${newItem.price}`}
                onChange={(e) => {
                  const formattedPrice = parseFloat(e.target.value.replace('$', '')) || 0;
                  setNewItem({ ...newItem, price: formattedPrice });
                }}
                className="input-field"
                placeholder="Enter item price"
              />
              <div className="button-group">
                <button onClick={handleAddItem} className="button">Add</button>
                <button onClick={() => setShowAddPopup(false)} className="button">Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div> */}

      <div className="item-container">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-image-wrapper">
              <img src={item.img} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">{item.description}</p>
                <p className="item-price">{item.price}</p>
                <div className="button-group">
                  <button onClick={() => { setUpdateItem(item); setShowUpdatePopups(prevState => ({ ...prevState, [item.id]: true })) }} className="button update-button">Update</button>
                  <button onClick={() => handleDeleteItem(item.id)} className="button delete-button">Delete</button>
                </div>
              </div>
            </div>
            {showUpdatePopups[item.id] && (
              <div className="popup">
                <div className="popup-content">
                  <h2>Update Item</h2>
                  <input
                    type="text"
                    value={updateItem?.name || ''}
                    onChange={(e) => setUpdateItem({ ...updateItem, name: e.target.value })}
                    className="input-field"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    value={updateItem?.img || ''}
                    onChange={(e) => setUpdateItem({ ...updateItem, img: e.target.value })}
                    className="input-field"
                    placeholder="Image URL"
                  />
                  <input
                    type="text"
                    value={updateItem?.description || ''}
                    onChange={(e) => setUpdateItem({ ...updateItem, description: e.target.value })}
                    className="input-field"
                    placeholder="Description"
                  />
                  <input
                    type="text"
                    value={`${updateItem?.price || ''}`}
                    onChange={(e) => {
                      const formattedPrice = parseFloat(e.target.value.replace('$', '')) || 0;
                      setUpdateItem({ ...updateItem, price: formattedPrice });
                    }}
                    className="input-field"
                    placeholder="Price"
                  />
                  <div className="button-group">
                    <button onClick={handleUpdateItem} className="button">Update</button>
                    <button onClick={() => setShowUpdatePopups(prevState => ({ ...prevState, [item.id]: false }))} className="button">Cancel</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
