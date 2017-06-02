import http from 'http';
import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';

import config from './config'
import routes from './routes'

let app = express();
app.server = http.createServer(app);

//Middleware - Intercepts requests before give to handlers and perform operation with them

//Passport config

//API routes v1
app.use("/v1", routes);
app.server.listen(config.port);
//console.log(`Started on port ${app.server.address().port}`);
console.log("Started on port " +  app.server.address().port);

export default app;
