const asyncHandler = require("express-async-handler");
const Contact = require("../model/entities");

//@discription delet contact
//@routes GET /api/contacts/delet
//@access public
const saveContact = asyncHandler(async (req, resp) => {
  console.log("contact save successfully", req.body);

  const { name, email, salary } = req.body; //destructured

  if (!name || !email || !salary) {
    resp.status(400);
    throw new Error("All field are mandatary");
  }
   // create
  const contact = Contact.create({
    name,
    email,
    salary,
  });

  resp.status(201).json(contact);
});

const getAllContacts = asyncHandler(async (req, resp) => {
  //findall
  const contacts = await Contact.find();
  console.log("Here is all your contacts present in DB..");
  resp.status(200).json(contacts);
});

const deletContact = asyncHandler(async (req, resp) => {
  const contacts = Contact.findById(req.params.id)
  resp.status(200).json({ message: "Contact Deleted Successfully" });
});

const updateContact = asyncHandler(async (req, resp) => {
  resp.status(200).json({ message: "Contact Updated Successfully" });
});

module.exports = { getAllContacts, deletContact, saveContact, updateContact };
