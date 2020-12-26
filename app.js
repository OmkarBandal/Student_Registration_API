const express = require('express');
const app= express();
const port = process.env.PORT || 3000;
require("../src/database/conn");

const Collection = require("../src/database/schema")

app.use(express.json())
app.get("", async (req,res)=>{
    res.send("Welcome to home page")

});

app.post("/student",async (req,res)=>{
    try {
        const addData = new Collection(req.body);
        res.send(req.body);
        const inserted = await addData.save()
        console.log(inserted);
    } catch (error) {
        console.log(error);
    }
})

app.get("/student",async (req,res)=>{
    try {
        
        const getDatas = await Collection.find().sort({"Roll_No":1})
        res.send(getDatas)
        console.log(getDatas);
    } catch (error) {
        console.log(error);
    }
})

app.get("/student/:id",async (req,res)=>{
    try {
        const _id = req.params.id;
        const getData = await Collection.findById({_id:_id})
        res.send(getData)
        console.log(getData);
    } catch (error) {
        console.log(error);
    }
})

app.patch("/student/:id",async (req,res)=>{
    try {
        const _id = req.params.id;
        const patchData = await Collection.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.send(patchData)
        console.log(patchData);
    } catch (error) {
        console.log(error);
    }
})

app.delete("/student/:id",async (req,res)=>{
    try {
        const _id = req.params.id;
        const delData = await Collection.findByIdAndDelete(_id)
        res.send(delData)
        console.log(delData);
    } catch (error) {
        console.log(error);
    }
})




app.listen(port,()=>{
    console.log(`server renning on port no ${port}`);
});
