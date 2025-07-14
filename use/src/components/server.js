// const http = require ('http')
// const server = http.createServer(function(req, res){
//   res.writeHead(200,{"content-type" : 'text/plain'})   
//   res.end('hello world')
// })

// server.listen(3045, ()=>{
//     console.log('server listen on 3045')
// })

// const express = require ('express')
// const app = express()
//app.get('/',(req,res)=>res.send('hello'))


// get to read and fetch data

// app.get('/',(req,res)=>{
//     res.send('This is a get request from /')
// })
// app.get('/users',(req,res)=>{
//     res.json([{id:1, name:'Asad'},
//         {id:2, name : 'janjua'}
//     ])
// })

//post to send data to server mean form submit krna, user authentication

// app.use(express.json())
// app.get('/',(req,res)=>{
//     res.send('hello add user')
// })
// app.post('/users',(req,res)=>{
//     const user=req.body
//     console.log('received user :', user)
//     res.json({message : 'user received successfully', userData: user})
// })

// put update user by id

// const express = require ('express')
// const app = express()
// app.use(express.json())

// let users=[{id:1, name:'Asad'}, 
//     {id:2, name:'All'},
//     {
//         id:3, name: 'sab'
//     }
// ]
// app.get('/users',(req,res)=>{
//     res.json(users)
// })
// app.put('/users/:id',(req,res)=>{
//     const id = parseInt(req.params.id)
//     const updatedUser = req.body

//     const index = users.findIndex(user=>user.id===id)

//     if(index!==-1)
//     {
//         users[index]={id, ...updatedUser}
//         res.json({
//             message : `user ${id} updated successfuly`,
//             user : users[index]
//         })
//     }else {
//         res.status(404).json({message : 'user not found'})
//     }
// })


// const express = require('express')
// const app=express()
// app.use(express.json())

// let users=[
//     {id:1, name:'Asad'}, 
//     {id:2, name:'All'},
//     {id:3, name: 'sab'}
// ]

// app.get('/users',(req,res)=>{
//     res.json(users)
// })

// app.delete('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = users.findIndex(user => user.id === id)

//   if (index !== -1) {
//     const deletedUser = users[index];
//     users.splice(index, 1)
//     res.json({
//       message: `User ${id} deleted successfully`,
//       deleted: deletedUser
//     });
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// });

// app.listen(8080,()=>{
//     console.log('server listen on 8080')
// })

const express = require('express');
const app = express();

app.use(express.json());
let users = [
  { id: 1, name: 'Asad', age: 25 },
  { id: 2, name: 'Ali', age: 30 },
];
app.get('/users',(req,res)=>{
    res.json(users)
})

// PATCH — partial update
app.patch('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updates = req.body;

  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    users[index] = { ...users[index], ...updates };
    res.json({
      message: `User ${id} partially updated`,
      user: users[index],
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(8080, () => {
  console.log('Server listening on 8080');
});
