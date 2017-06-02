import mongoose from 'mongoose'
import config from './config'
export default callback => {
    console.log(config.mongoUrl);
    //Return a db object connection
    let db = mongoose.connect(config.mongoUrl);
    callback(db);
}
