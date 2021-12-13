import mongoose from 'mongoose'
import {string} from 'nodemon/lib/utils';
const {Schema, model} = mongoose;

const todoSchema = Schema({
    title:{
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date_time:{
        type: Boolean,
        required: true,
        default: false
    }
})
    const todoModel = mongoose.model('todos', todoSchema),
    export default todoModel;