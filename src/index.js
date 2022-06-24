import express from 'express';
const app = express();

import {create} from './controllers/create_controller.js'
create(app);



app.listen(3333, (req, res) =>{
    console.log("Rodando index");
})

export {app}