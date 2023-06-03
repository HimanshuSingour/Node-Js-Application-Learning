const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please add the contact name"],
  },

  email: {
    type: String,
    require: [true, "Please add the contact email"],
  },

  salary: {
    type: String,
    require: [true, "Please add the contact salary"],
  },
});

module.exports = mongoose.model("Contact", contactSchema);
