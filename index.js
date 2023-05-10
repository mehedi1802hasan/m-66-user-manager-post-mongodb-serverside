const express=require('express');
const cors=require('cors')
const app=express();

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json())
const users=[
    
    {id:1, name:'sabana',email:'sabana@gmai.com'},
    {id:2, name:'rehana',email:'rehana@gmai.com'},
    {id:3, name:'mahana',email:'mahana@gmai.com'},
    {id:4, name:'labibo',email:'labibo@gmai.com'}
]

app.get('/',(req,res)=>{
    res.send('user mangagement server is running')
});
 app.get('/users',(req,res)=>{

    res.send(users);
 });
app.post('/users',(req,res)=>{
    console.log('post api hitting')
    console.log(req.body);
 const newUser=req.body;
 newUser.id=users.length + 1;
 users.push(newUser);
 res.send(newUser);
})
app.listen(port,()=>{
    console.log(`server is running on PORt:${port}`)
}) 