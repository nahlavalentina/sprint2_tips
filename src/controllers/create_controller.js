import { app } from '../index.js';
import {CreateTip} from "../models/create_model.js";
import {bd} from "../infra/bd.js";

export const create = (app) => {

    app.get("/create", (req, res) => {
    res.send({"New Tip":req.body})
})


    app.post("/create", (req, res) => {
        const create = new CreateTip(req.body.title, req.body.content)
        bd.push(create)
        res.send({"Tip added" : req.body})
    })
}