import express, {Request, Response} from "express";

// const app = express()
// const port = process.env.PORT || 3000

// app.get('/api', (req:Request, res:Response) => {
//     console.log("helloooooo");
//     return res.send("I'm here");
// })

// app.listen(port, ()=>{
//     return console.log("successfully running on port");
// })

export default async (req:Request, res:Response)=>{
    res.json({message:"hello i am here"});
};