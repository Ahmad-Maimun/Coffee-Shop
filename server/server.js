const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.SECRET_USER}:${process.env.SECRET_KEY}@cluster0.mshgq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db('Coffe-ShopDB');
    const coffeeCollection = database.collection('coffees');

    // Get All Coffee
    app.get('/coffees', async (req, res) => {
      const coffees = coffeeCollection.find();
      const result = await coffees.toArray();
      res.send(result);
    });

    // get single coffee from database
    app.get('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.findOne(query);
      res.send(result);
    });

    // Post Coffee
    app.post('/coffees', async (req, res) => {
      const coffee = req.body;
      const result = await coffeeCollection.insertOne(coffee);
      res.send(result);
    });

    // Upadte Coffee
    app.put('/coffee/:id', async (req, res) => {
      const coffee = req.body;
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateObject = {
        $set: {
          name: coffee.name,
          chef: coffee.chef,
          supplier: coffee.supplier,
          price: coffee.price,
          category: coffee.category,
          details: coffee.details,
          photoUrl: coffee.photoUrl,
        },
      };

      const result = await coffeeCollection.updateOne(
        filter,
        updateObject,
        options
      );
      res.send(result);
    });

    // delete coffee
    app.delete('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
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
  res.send('Coffee Server is Runnig');
});

app.listen(port, () => {
  console.log(`coffee server is runnig port ${port}`);
});
