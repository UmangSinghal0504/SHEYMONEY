import express from "express";
import transactionModel from "../models/Transaction.js";
import moment from "moment"; // Import moment for date manipulation

const router = express.Router();

router.post("/add-transaction", async (req, res) => {
  try {
    console.log("📦 Incoming transaction payload:", req.body);
    const newTransaction = new transactionModel(req.body);
    await newTransaction.save();
    res.status(201).send("Transaction added successfully");
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).send("Error adding transaction");
  }
});

router.post("/edit-transaction", async (req, res) => {
  try {
    console.log("📦 Incoming transaction payload:", req.body);
    
    await transactionModel.findByIdAndUpdate(req.body.transactionId, req.body.payload);

    res.status(201).send("Transaction Updated successfully");
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).send("Error adding transaction");
  }
});

router.post("/delete-transaction", async (req, res) => {
  try {
    console.log("📦 Incoming transaction payload:", req.body);
    
    await transactionModel.findByIdAndDelete(req.body.transactionId);


    res.status(201).send("Transaction Deleted successfully");
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).send("Error adding transaction");
  }
});

router.post("/get-all-transactions", async (req, res) => {
  const { frequency, selectedRange, type } = req.body;
  try {
    const transactions = await transactionModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(req.body.frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedRange[0],
              $lte: selectedRange[1],
            },
          }),
      userid: req.body.userid,
      ...(type !== 'all' && {type})
    });
    res.send(transactions);
  } catch (error) {
    res.status(500).send("Error fetching transactions");
  }
});

export default router;
