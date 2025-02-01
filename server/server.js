const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
    }
    next();
});

// Use default router
server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});

// Logic to save the new item
server.post("/api/todos", (req, res) => {
    const { label } = req.body;
    const newTodo = { id: Date.now(), label, isDone: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});