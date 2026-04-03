// Handles dashboard analytics like totals, categories and recent records.
import mongoose from "mongoose";
import Record from "../models/record.model.js";

// get dashboard summary
export const getSummary = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.user.id);

    // total income
    const totalIncome = await Record.aggregate([
      { $match: { user: userId, type: "income" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    // total expense
    const totalExpense = await Record.aggregate([
      { $match: { user: userId, type: "expense" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const income = totalIncome[0]?.total || 0;
    const expense = totalExpense[0]?.total || 0;

    const balance = income - expense;

    res.json({
      income,
      expense,
      balance,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// category breakdown
export const getCategorySummary = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.user.id);

    const data = await Record.aggregate([
      { $match: { user: userId } },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// recent records
export const getRecent = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.user.id);

    const records = await Record.find({ user: userId })
      .sort({ createdAt: -1 })
      .limit(5);

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};