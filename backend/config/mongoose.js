//Function to connect with MongoDB using Mongoose.js

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://munnamukeshcr7:ReyMysterio@merncluster.gytcbya.mongodb.net/"
  );
  console.log("MongoDb connected successfully");
}
