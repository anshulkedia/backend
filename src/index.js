// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()




/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("cant connect to database:", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Listening on port: ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR:", error)
        throw err
    }
})()
*/