import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import homeRoute from "./routes/home.route.js";


const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE"],
    })
);

app.use("/api/", homeRoute);

app.use(function (req, res) {
    res.status(404).json({
        error: "Endpoint not found.",
    });
});

app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(500).json({
        error: "Something wrong!",
    });
});

const PORT = process.env.PORT || 4499;
app.listen(PORT, function () {
    console.log(`SM-Game API is listening at http://localhost:${PORT}`);
});
