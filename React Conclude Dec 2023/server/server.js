// Server API
const PORT = 8080;
const app = require('express')();   // npm i express
const cors = require('cors');       // npm i cors
const uniqid = require('uniqid');   // npm i uniqid
const morgan = require('morgan');   // npm i morgan

app.use(morgan('dev'));
app.use(cors());


let data = [
    {id: uniqid(), task: 'buy milk', done: false},
    {id: uniqid(), task: 'wash dishes', done: false},
    {id: uniqid(), task: 'clean up', done: true },
];

app.get("/todos", (req, res) => {
    res.json(data);
})

app.post("/todos/:id/checkoff", (req, res) => {
    const id = req.params.id
    const newArr = data.map((todo) => {
        if(todo.id === id) {
            return {
            ...todo,
            done: !todo.done
            }
        }
        return todo
    })
    data = [...newArr]
    res.json(data)
});

app.post("/todos/:id/delete", (req, res) => {
    const id = req.params.id;
    const newArr = data.filter((todo) => {
        return todo.id !== id
    })
    data = [...newArr]
    res.json(data)
});

app.post('/todos/add/:task', (req, res) => {
   const task = req.params.task;
   data.push({id: uniqid(), task, done: false})
   res.json(data)
});


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));