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

// Logic to save the new item
server.post("/api/todos", (req, res) => {
    const { label } = req.body;
    const items = router.db.get("items").value();
    const lastItem = items[items.length - 1];
    const newId = lastItem ? lastItem.id + 1 : 1;
    const newTodo = { label, isDone: false, createdAt: Date.now(), id: newId };
    router.db.get("items").push(newTodo).write();
    res.status(201).json(newTodo);
});

// Logic to edit the item
server.put("/api/todos/:id", (req, res) => {
    const { id } = req.params;
    const { label, isDone } = req.body;
    const todo = router.db.get("items").find({ id: parseInt(id) }).value();
    if (!todo) {
        return res.status(404).json({ message: "Item not found" });
    }

    if (label !== undefined) {
        todo.label = label;
    } else if (isDone !== undefined) {
        todo.isDone = isDone;
    } else {
        return res.status(400).json({ message: "No valid fields to update" });
    }

    router.db.get("items").find({ id: parseInt(id) }).assign(todo).write();
    res.json(todo);
});

// Use default router
server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});