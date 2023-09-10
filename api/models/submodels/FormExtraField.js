import { Schema } from 'mongoose';
import _ from "lodash";

const FormExtraField = new Schema(
  {
    key: { type: String, required: true },
    title: { type: String, required: true, trim: 'true' },
    type: { type: String, required: true, default: 'text' },
    placeholder: { type: String, trim: 'true' },
    numOptions: { type: Number, default: 0 },
    options: [{ type: String }],
    hasOthersOption: { type: Boolean, default: false },
    isOptional: { type: Boolean, default: true },
    isPublic: { type: Boolean, default: true },
    checkedMaxLimit: { type: Number, default: 0 },
    wordLimit: { type: Number, default: 0 },
    dependentFields: [
      { skipped : [{ type: Number }] }
    ]
  }
);

export default FormExtraField;