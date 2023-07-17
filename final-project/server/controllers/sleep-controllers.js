const Sleep = require('../models/sleep');

// Get all sleep entries
async function getAllSleep(req, res) {
  try {
    const sleepEntries = await Sleep.find();
    res.status(200).json(sleepEntries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sleep entries' });
  }
}

// Create a new sleep entry
async function createSleep(req, res) {
  const { sleepText, sleepAuthor, questions } = req.body;

  try {
    const newSleep = await Sleep.create({ sleepText, sleepAuthor, questions });
    res.status(201).json(newSleep);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create a new sleep entry' });
  }
}

// Get a single sleep entry by ID
async function getSleepById(req, res) {
  const { id } = req.params;

  try {
    const sleepEntry = await Sleep.findById(id);
    if (sleepEntry) {
      res.status(200).json(sleepEntry);
    } else {
      res.status(404).json({ error: 'Sleep entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sleep entry' });
  }
}

// Update a sleep entry by ID
async function updateSleepById(req, res) {
  const { id } = req.params;
  const { sleepText, sleepAuthor, questions } = req.body;

  try {
    const updatedSleep = await Sleep.findByIdAndUpdate(
      id,
      { sleepText, sleepAuthor, questions },
      { new: true }
    );
    if (updatedSleep) {
      res.status(200).json(updatedSleep);
    } else {
      res.status(404).json({ error: 'Sleep entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update sleep entry' });
  }
}

// Delete a sleep entry by ID
async function deleteSleepById(req, res) {
  const { id } = req.params;

  try {
    const deletedSleep = await Sleep.findByIdAndDelete(id);
    if (deletedSleep) {
      res.status(200).json({ message: 'Sleep entry deleted successfully' });
    } else {
      res.status(404).json({ error: 'Sleep entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete sleep entry' });
  }
}

module.exports = {
  getAllSleep,
  createSleep,
  getSleepById,
  updateSleepById,
  deleteSleepById,
};

