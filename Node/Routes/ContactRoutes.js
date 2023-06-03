const express = require("express");
const router = express.Router();

// router.route("/").get((req, resp) => {
//   resp.status(200).json({ name: "Himanshu", pass: "Pavilion@12" });
// });

// router.route("/delete").get((req, resp) => {
//   resp.status(200).json("Deleted successfully..");
// });


// lets use of controller js

const { getAllContacts , deletContact , saveContact , updateContact} = require("../Controllers/ContactController")

router.route("/save").post(saveContact);

router.route("/all").get(getAllContacts);

router.route("/delet/:id").delete(deletContact);

router.route("/update/:id").put(updateContact);



module.exports = router;
