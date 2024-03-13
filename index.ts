import express, { RequestHandler } from "express";

const app = express();
app.use(express.json());

const posts: any[] = [];

const requestHandlerMiddleware: RequestHandler = (req, res, next) => {
    console.log(req.path, req.body);
    next();
};

app.use(requestHandlerMiddleware);

app.use((req, res, next) => {
    console.log(Date.now());
    next();
});

app.get("/posts", (req, res) => {
    res.send({ posts });
});

app.post("/posts", (req, res) => {
    const post = req.body;
    posts.push(post);
    res.status(200).json({
        status: "success",
    });
});

app.delete("/posts/:id", (req, res) => {});

app.listen(3000, () => {
    console.log(`server is listen on port 3000`);
});
