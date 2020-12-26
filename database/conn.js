const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:27017/StudentRegistrationAPI",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected");
}).catch(()=>{
    console.log("Not Connected");
})