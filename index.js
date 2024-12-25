
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req,res)=>{
    try{
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    const randomSecret = result.data.secret;
    const randomUsername = result.data.username;
    res.render("index.ejs" , {secret: randomSecret , user: randomUsername});
    }
    catch (error){
        res.render("index.ejs" , {secret: error.result.data , user: error.result.data});
    }
})

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
})
