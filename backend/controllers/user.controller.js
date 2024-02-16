import User from "../models/user.model.js"

export const getUsersForSidebar = async(req,res) =>{
  try{
 console.log('this is the getuser function')
    const loggedUserId = req.user_id

    const allUsers = await User.find({_id: {$ne: loggedUserId}}) 
   console.log('this the users',allUsers)
    res.status(200).json({allUsers})

  }catch(error){
    console.log('Error in getUsersForSidebar controller', error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}