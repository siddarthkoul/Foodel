const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://admin:admin123@cluster0.aytrepb.mongodb.net/foodel?retryWrites=true&w=majority"
    );

    if (conn) {
      console.log(`MongoDB Connected`);
      
      // Fetch data here
      const fetched_data = mongoose.connection.db.collection("foodel");
      const data = await fetched_data.find({}).toArray();
      console.log();
    } else {
      console.error("Failed to connect");
      process.exit(1);
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
