import { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

// Schema Definition
const Project = new Schema({
  refId: { type: Number, index: true, required: true },
  name: { type: String, index: true, required: true, trim: true, default: '' },
  introduction: { type: String, default: '' },
  description: { type: String, default: '' },
  urlLink: { type: String, default: '' },
  videoLink: { type: String, default: '' },
  posterLink: { type: String, default: '' },
  imageLinks: [{ type: String, default: '' }],
  useUploadedImage: { type: Boolean, default: false },
  members: { type: [{ type: ObjectId, ref: '_User', index: true }] },
  isFav: { type: Boolean, default: false },
  isHidden: { type: Boolean, default: false },
  hiddenList: { type: [{ type: ObjectId, ref: '_User', index: true }] }
});

export default Project;
