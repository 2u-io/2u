let express= require('express')
//alamacenar ejecuacion en una variable
let app=express()
let cors=require(5000)
let puerto=5000

app.use(cors)

app.get('/',(req,res)=>{
    res.send("ALL_OK")
})

app.listen(()=>{
    console.log('server online on port',puerto)
})