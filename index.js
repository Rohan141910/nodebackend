const express=require("express")
const app=express()
const cors=require ("cors")
app.use(cors())
app.use(express.json())
const studentmodel=require("../studentSchema")
require("../mongoose")

app.post("/",async(req,resp)=>{
    const data =await new studentmodel(req.body)
    const result=await data.save()
    resp.send(result)
})
app.get("/",async(req,resp)=>{
    // const data =await new studentmodel(req.body)
    const result=await studentmodel.find()
    resp.send(result)
})
app.delete("/",async(req,resp)=>{
    // const data =await new studentmodel(req.body)
    const result=await studentmodel.deleteOne({rollno:req.body.rollno})
    resp.send(result)
}
)
app.put("/",async(req,resp)=>{
    // const data =await new studentmodel(req.body)
    const result=await studentmodel.updateOne({rollno:req.body.rollno},{$set:req.body})
    resp.send(result)
}
)

app.listen(5000)