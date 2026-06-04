const ContactModel = require("../models/ContactModel");

const sendMessage = (req, res) => {
  console.log("Received Contact Data:", req.body);

  ContactModel.saveContact(req.body, (err, result) => {
    if (err) {
      console.error("Database Error:", err);

      return res.status(500).json({
        success: false,
        message: "Failed to save message",
        error: err,
      });
    }

    res.status(201).json({
      success: true,
      message: "Message Saved Successfully",
      data: result,
    });
  });
};

module.exports = {
  sendMessage,
};