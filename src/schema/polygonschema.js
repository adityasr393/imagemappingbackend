const mongoose=require('mongoose');




const polygonSchema = new mongoose.Schema({
    image:
    {
        type:String,
        require:true
    },
    coordinates:{
        type:Array,
        default:[]
    },
    polygonText:
    {
        type:[]
    }   
    },
    {
        timestamps:true
    });
const polygonuser=mongoose.model('polygonuser',polygonSchema);
module.exports=polygonuser;
