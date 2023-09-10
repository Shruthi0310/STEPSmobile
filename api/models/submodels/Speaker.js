import { Schema } from 'mongoose';
import _ from "lodash";

const Speaker = new Schema(
  {
    name: { type: String, required: true, index: true },
    organisation: { type: String, trim: true, index: true },
    email: { type: String, required: true, index: true },
    countryCode: { type: String },
    phone: { type: String, index: true },
    title: { type: String },
    profileImgSrc: { type: String, default: '' },
    useUploadedImage: { type: Boolean, default: false },
    identifier: { type: String },
    abstract: { type: String, default: '' },
    bio: { type: String, default: '' },
    slides: [{ type: String, default: '' }]
  },
  {
    // Dynamic fields for extra fields
    strict: false,
    autoIndex: true
  }
);

export default Speaker;

