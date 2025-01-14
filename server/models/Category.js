const mongoose=require("mongoose");

const categorySchema=new mongoose.Schema({
    course:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
        required:true,
    }],
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model("Category",categorySchema);
