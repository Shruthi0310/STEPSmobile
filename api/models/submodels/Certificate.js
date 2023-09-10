import { Schema } from 'mongoose';

const Certificate = new Schema({
    id: { type: Number, required: true, unique: true, },
    email: {type: String, required: true,},
    name: {type: String, required: true,},
    custom_attributes: {type: Object, required: true,},
    issued_on: {type: String, required: true,},
    group_name: {type: String, required: true,},
});

export default Certificate;