const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


async function run() {
    try {
        await client.connect();
        const toolCollection = client.db("assignmentTwelfth").collection("tool");
        const reviewCollection = client.db("assignmentTwelfth").collection("review");

    }

    finally { }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running My Twelfth Assignment Server');
});
app.listen(port, () => {
    console.log('Twelfth Assignment Server is running on port :', port)
})