import express from 'express';
// const express = require('express');
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

app.use(express.json());
// app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

// app.get("/test", (req, res) => {
//     res.json("It seems to be working!");
// });

app.listen(8000, () => {
    console.log("Connected to the backend!!");
});