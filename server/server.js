const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 8000;
const { MongoClient, ServerApiVersion } = require('mongodb');
// ahmadmaimunwdd
// OW97v1ujorc1Np50

app.use(cors());
app.use(express.json());

console.log(process.env.SECRET_USER);

const uri = `mongodb+srv://${process.env.SECRET_USER}:${process.env.SECRET_KEY}@cluster0.mshgq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// 'mongodb+srv://ahmadmaimunwdd:OW97v1ujorc1Np50@cluster0.mshgq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const database = client.db('coffeeDB');
    const coffeeCollection = database.collection('coffees');

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    // Create Coffee
    app.post('/coffees', async (req, res) => {
      const coffee = req.body;
      const result = await coffeeCollection.insertOne(coffee);
      res.send(result);
    });
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Coffee Server Is Runnig');
});

app.listen(port, () => {
  console.log(`Coffee Server is runnig on port ${port}`);
});
