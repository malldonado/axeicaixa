const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const {
      name,
      email,
      codProduct,
      password
    } = req.body;

    const user = await new User({
      name,
      email,
      codProduct,
      password
    }).save();
    res.json({
      success: true,
      user: user
    });
  }
  catch(err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}
