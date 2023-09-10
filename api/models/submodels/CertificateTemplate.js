import { Schema } from 'mongoose';

const CertificateTemplate = new Schema({
    group_name: {type: String, required: true,},
    name: {type: String, required: true,},
    img: {type: String, required: true,},
    template: {type: String, required: true,},
    values: {type: String, required: true,},
});

export default CertificateTemplate;