const polygonuser=require('../schema/polygonschema');

exports.polygonadd = async (req, res) => {
    try{
   
    console.log(req.body);
    // const polygonData = new polygonuser(req.body);
    // await polygonData.save();
    const polygonData = await polygonuser.create(req.body)
    res.json({message: "polygonuser added successfully", data:polygonData});
        }catch(err){
            res.status(500).json(err.message)
        }
};
exports.polygonget = async (req, res) => {
    try {
     
        let polygonData = await polygonuser.find()

        res.json(polygonData);
    } catch (error) {
        console.log(error);
        if (!error.status) {
            error.status = 500;
        }

        res.status(error.status).json({ message: error.message });
    }
};
exports.polygonupdate = async (req, res) => {
    try{
        console.log("datta7",req.params.id);
            const polygonData = await polygonuser.findByIdAndUpdate(req.params.id, { $set: req.body },
            { new: true });
            
       res.json({data:polygonData});
        }catch(err){
            res.status(500).json(err)
        }
};
exports.polygondelete = async (req, res) => {
    const polygonData = await polygonuser.findByIdAndDelete(req.params.id);
    try{
        if(!polygonData){
            res.status(400).json({message:"polygonuser not found."});
        }
        res.status(200).json({ message: 'polygonuser deleted successfully' });  
    } catch(err){
        res.status(500).json(err)
    }
};
exports.polygongetbyid = async (req, res) => {
    try {
     
        let polygonData = await polygonuser.findById(req.params.id)

        res.json(polygonData);
    } catch (error) {
        console.log(error);
        if (!error.status) {
            error.status = 500;
        }

        res.status(error.status).json({ message: error.message });
    }
};
// exports.getUserById = async (req, res) => {
//     try {
//         let userData = await polygonuser.find({userId:req.params.id});

//         if (!userData) {
//             // Handle the case when the user is not found
//             return res.status(404).json({ message: "polygon not found" });
//         }

//         res.json(userData);
//     } catch (error) {
//         console.log(error);
//         if (!error.status) {
//             error.status = 500;
//         }

//         res.status(error.status).json({ message: error.message });
//     }
// };
exports.getbyuserID = async(req, res) =>{
    try{
    let polygonData = await polygonuser.find({userId: req.params.id});
    res.json(polygonData);
    // console.log(polygonData[1]);
    }catch(err){
        console.log(err);
    }
}