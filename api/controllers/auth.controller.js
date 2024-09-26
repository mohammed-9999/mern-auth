import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
 const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username:username, email:email, password: hashedPassword });
  try{
await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
   
  }catch(error){
     res.status(500).json(error.message);

  }
    
   

};
export default signup 
