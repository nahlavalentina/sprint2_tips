import app from '../index.js';
import {CreateTip} from "../models/create_model.js";
import {bd} from "../infra/bd.js";

export const random = (app) => {

    app.get("/tips", (req, res) => {
        const num = [];

        for (let i=0; i<=bd.content.length; i++) {
            num.push(i);
        }
        const  sendTip = Math.floor(Math.random() * num.length);

        res.send(bd.content[sendTip]);
})
}