require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 8080;

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
let db;

async function startServer() {
  try {
    await client.connect();
    db = client.db('test'); // DB name
    console.log('✅ Connected to MongoDB');

    // Serve static files from "public" folder
    app.use(express.static('public'));

    // Define API route AFTER db is connected
    app.get('/professional', async (req, res) => {
      try {
        const collection = db.collection('professionals'); // collection name
        const data = await collection.findOne(); // Return the first document
        res.json(data);
      } catch (err) {
        res.status(500).json({ message: 'Failed to get data', error: err });
      }
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

startServer();