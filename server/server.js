const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskManager = require('./taskManager');

const app = express()
const port = 8000;

app.listen(port, () => {
  console.log(`Todo Server is now listening to port ${8000}`);
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`Route called ${req.method} ${req.originalUrl}`);
  next();
});

app.get('/', (req, res) =>{
  res.send('Todo Server up, Lakad Matatag!!!')
});

app.get('/todos', (req, res) => {
  res.json(taskManager.getTodos());
});

app.put('/todos/:id', (req, res) => {
  res.json(taskManager.completeTodo(req.params.id));
});

app.post('/todos', (req,res) => {
  res.json(taskManager.addTodos(req.body));
});

app.delete('/todos/:id', async (req, res) => {
  res.json(taskManager.removeTodo(req.params.id));
});

app.post('/clear/todos', (req, res) => {
  res.json(taskManager.clearTodos());
})


app.use((req, res, next) =>{
  console.log(`Unknown Route called ${req.originalUrl}`);
  res.status('404').send('Na mali ka po ng ruta');
  next();
})