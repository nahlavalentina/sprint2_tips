import app from '../index.js';
import {CreateTip} from "../models/create_model.js";
import {SavedTips} from "../models/tips_model.js"

export const create = (app) => {

    app.get("/create", (req, res) => {
    res.send({"New Tip":req.body})
})


    app.post("/create", (req, res) => {
        const create = new CreateTip(req.body.title, req.body.content)
        const savedTips = new SavedTips(title, content)
        savedTips.push(create)
        res.send({"Tip added" : req.body})
    })
}