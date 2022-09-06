import mongoose from "mongoose";
//sudo service mongod start
export  async function connect(){
 try {
    await  mongoose.connect('mongodb+srv://root:kinect123@cluster0.r5zne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('==> DB is connected');
 } catch(e)  {
    console.log('==> DB is down');
    console.log(e);
 }
}


//npm i -g  @babel/node 