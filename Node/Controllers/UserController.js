const asyncHandler = require('express-async-handler')


const registerUser = asyncHandler(async (req, resp) => {
  resp.json({ message: "Register user" });
});

const loginUser = asyncHandler(async (req, resp) => {
    resp.json({ message: "login user" });
  });

  
const currentUser = asyncHandler(async (req, resp) => {
    resp.json({ message: "current user" });
  });
  


module.exports = { registerUser , loginUser, currentUser }