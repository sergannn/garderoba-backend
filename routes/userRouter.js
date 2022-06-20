import express from "express";
import createError from "http-errors";
import User from "../models/User.js";
import { hash } from "bcrypt";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

userRouter
    .get("/", async (req,res, next) => {
        try {
           const users = await User.find({})
           res.send({ users })
        } catch (error){
            next(createError(400, error.message))
        }
    })

    // registration
    .post("/signup" , async (req,res, next) => {
    try {
            
        req.body.password = await hash(req.body.password, 10)
        const createUser = await User.create(req.body)

        res.send({ createUser })
    } catch (error) {
        next(createError(400, error.message))
    }
    })


    .delete("/:id", async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id)
            await user.remove()
            res.send({ok: true, deleted: user})
        } catch (error){
            next(createError(400, error.message))
        }
    })

export default userRouter