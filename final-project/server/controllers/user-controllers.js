// const User = require('../models/User');

// // Get user by username
// const getUserByUsername = async (req, res) => {
//   const { username } = req.params;
//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.json(user);
//   } catch (error) {
//     console.error('Error retrieving user:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Create a new user
// const createUser = async (req, res) => {
//   const { username, email } = req.body;
//   try {
//     const user = await User.create({ username, email });
//     res.status(201).json(user);
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Update user by username
// const updateUserByUsername = async (req, res) => {
//   const { username } = req.params;
//   const { email } = req.body;
//   try {
//     const user = await User.findOneAndUpdate(
//       { username },
//       { email },
//       { new: true }
//     );
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.json(user);
//   } catch (error) {
//     console.error('Error updating user:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Delete user by username
// const deleteUserByUsername = async (req, res) => {
//   const { username } = req.params;
//   try {
//     const user = await User.findOneAndDelete({ username });
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.json({ message: 'User deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// module.exports = {
//   getUserByUsername,
//   createUser,
//   updateUserByUsername,
//   deleteUserByUsername,
// };
