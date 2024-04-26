const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for all routes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'cntt3',
  connectionLimit: 10 // Adjust as needed
});

app.get('/items', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM items');
    connection.release();
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Error fetching items' });
  }
});

// app.get('/items/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const connection = await pool.getConnection();
//     const [rows] = await connection.query('SELECT * FROM items WHERE id = ?', [id]);
//     connection.release();
//     if (rows.length > 0) {
//       res.status(200).json(rows[0]);
//     } else {
//       res.status(404).json({ error: 'Item not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching item:', error);
//     res.status(500).json({ error: 'Error fetching item' });
//   }
// });

app.post('/items', async (req, res) => {
  const { name, img, description, price } = req.body;
  try {
    const connection = await pool.getConnection();
    await connection.query('INSERT INTO items (name, img, description, price, ) VALUES (?, ?, ?, ?)', [name, img, description, price]);
    connection.release();
    res.status(201).end();
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).json({ error: 'Error adding item' });
  }
});

app.put('/items/:id', async (req, res) => {
  const { id } = req.params;
  const { name, img, description, price } = req.body;
  try {
    const connection = await pool.getConnection();
    await connection.query('UPDATE items SET name = ?, img = ?, description = ?, price = ? WHERE id = ?', [name, img, description, price, id]);
    connection.release();
    res.status(200).end();
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ error: 'Error updating item' });
  }
});

app.delete('/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await pool.getConnection();
    await connection.query('DELETE FROM items WHERE id = ?', [id]);
    connection.release();
    res.status(200).end();
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ error: 'Error deleting item' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
