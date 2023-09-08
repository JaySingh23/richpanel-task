import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/richpanel-task")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

const newSchema = new mongoose.Schema({
    name: {
        type : String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const collection =  mongoose.model("collection", newSchema);

export default collection;