const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post(
    "/createuser",
    [
      body('email').isEmail(),
      body('name').isLength({ min: 10 }),
      body('password', 'Minimum Length Should be 5').isLength({ min: 5 }),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.error(errors.array());
  
        // Include errors in the JSON response
        return res.status(400).json({ success: false, errors: errors.array() });
      }
  
      try {
        await User.create({
          name: req.body.name,
          password: req.body.password,
          email: req.body.email,
          location: req.body.location,
        });
        console.log("User Created Successfully");
        res.json({ success: true });
      } catch (error) {
        console.error(error);
        res.json({ success: false });
      }
    }
  );


 router.post("/loginuser",[
    body('email').isEmail(),
    body('password', 'Minimum Length Should be 5').isLength({ min: 5 })],
    async(req,res) => {
        const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.error(errors.array());
  
        // Include errors in the JSON response
        return res.status(400).json({ success: false, errors: errors.array() });
      }
    let email = req.body.email;
    try{
        let userData = await User.findOne({email});
        if(!userData){
            return res.status(400).json({errors:"No account with this Email found!"});
        }
        if(req.body.password!==userData.password){
            return res.status(400).json({error:"Password is incorrect"})
        }
        return res.json({success:true})
    }
catch (error) {
    console.log(error)
    res.json({success:false});
}
 })




module.exports = router;  