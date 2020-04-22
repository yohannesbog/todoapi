const Joi = require('joi')
const express = require('express')
const app = express()
app.use(express.json())




const todolists =[
    {id: 1, name:'test1'},
    {id: 2, name:'test2'},
    {id: 3, name:'test3'},

];

app.get('/ping', function (req, res, next){
   
})

app.use(express.static(__dirname + '/public'))

app.get('/api/todolist', (req, res) => {
    res.send(todolists)
})

app.get('/api/todolist/:id', (req, res) => {
   const todolist = todolists.find(lists => lists.id === parseInt(req.params.id));
   if(!todolist) res.status(404).send('the to do list with the given id not found')
   res.send(todolist)
})

app.post('/api/todolists', (req, res) => {
//input validation
    // if(!req.body.name || req.body.name.length < 3) {
    //     res.status(400).send('Name is required and should be minimum 3 charachters')
    //   return;
    // }

    //use better input validation handler joi
    const {error} = validatetodo(req.body);
    if(error){
        res.status(400).send(error.details[0].message)
          return;
    }

const todo ={
id: todolists.length +1,
name: req.body.name
    };

    todolists.push(todo);
    res.send(todo);

})


app.put('/api/todolists/:id', (req, res) => {
    // look up the todo
    // if not exiting, return 400
    const todolist = todolists.find(lists => lists.id === parseInt(req.params.id));
    if(!todolist) res.status(404).send('the to do list with the given id not found')
    //validate
    // If invalid, return 400(bad requesy)
 const {error} = validatetodo(req.body);
if(error){
    res.status(400).send(error.details[0].message)
      return;
}
    //update the to do
    //retun the update todo

    todolist.name = req.body.name
    res.send(todolist)
})

app.listen('3003', function(){
console.log('hello from server');
})


function validatetodo(todo){
    const schema ={
        name: Joi.string().min(3).required()
    };
 return Joi.validate(todo, schema)
}