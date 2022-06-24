import express from 'express';
const app = express();
app.use(express.json())

import {create} from './controllers/create_controller.js'
create(app);

import {random} from './controllers/tips_controller.js';
random(app)


app.listen(3333, (req, res) =>{
    console.log("Rodando index");
})

export {app}