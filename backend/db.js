// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(
//       "mongodb+srv://admin:admin123@cluster0.aytrepb.mongodb.net/foodel?retryWrites=true&w=majority"
//     );

//     if (conn) {
//       console.log(`MongoDB Connected`);
      
//       // Fetch data here
//       const fetched_data = mongoose.connection.db.collection("foodel");
//       const data = await fetched_data.find({}).toArray();
//       const foodCategory = mongoose.connection.db.collection("foodCategory");

//       // global.food_items = data;
//       // console.log();
//     } else {
//       console.error("Failed to connect");
//       process.exit(1);
//     }
//   } catch (error) {
//     console.error(error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;




const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://admin:admin123@cluster0.aytrepb.mongodb.net/foodel?retryWrites=true&w=majority';

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    const foodCollection = mongoose.connection.db.collection('foodel');
    const data = await foodCollection.find({}).toArray();

    const categoryCollection = mongoose.connection.db.collection('foodCategory');
    const Catdata = await categoryCollection.find({}).toArray();

    return { data, Catdata };
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = connectToDatabase;
