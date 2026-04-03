import Record from "../models/record.model.js";

// create record
export const createRecord = async (req, res) => {
  try {
    const { amount, type, category, date, note } = req.body;

    if (!amount || !type || !category) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const record = await Record.create({
      user: req.user.id,
      amount,
      type,
      category,
      date,
      note,
    });

    res.status(201).json({
      message: "Record created",
      record,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get records with filters
export const getRecords = async (req, res) => {
  try {
    const { type, category, startDate, endDate } = req.query;

    let filter = { user: req.user.id };

    if (type) filter.type = type;
    if (category) filter.category = category;

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const records = await Record.find(filter).sort({ date: -1 });

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};