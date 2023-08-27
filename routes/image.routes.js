const express = require('express');
const multer = require('multer');
const { MongoClient } = require('mongodb');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('photo'), (req, res) => {
    const photo = req.file;

    const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });
    client.connect((err) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        const db = client.db('mydatabase');
        const collection = db.collection('photos');

        collection.insertOne({ filename: photo.filename, path: photo.path }, (error, result) => {
            if (error) {
                console.error('Error saving photo to MongoDB:', error);
                return res.status(500).json({ error: 'Internal server error' });
            }

            client.close();

            res.json({ message: 'Photo uploaded successfully' });
        });
    });
});
