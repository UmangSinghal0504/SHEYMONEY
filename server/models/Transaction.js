import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    
  },
});

// Explicitly set the collection name
const transactionModel = mongoose.model("Transactions", transactionSchema); // Third param is collection name

export default transactionModel;
