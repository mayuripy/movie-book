export const getAIIUser = async (req,res,next) => {
    let users;
    try {
       user = User.find()
    }catch(err){
        return next(err);
    }

    if (!users) {
      return res.status(500).json({message:"unexpected Error Occured"})
    }

    return res.status(200),json({users})
};