import { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

// Schema Definition
const Submission = new Schema({
  refId: { type: Number, index: true, required: true },
  title: { type: String, required: true, index: true, lowercase: false, trim: true },
  simpleId: { type: String, required: true },
  abstract: [
    {
      title: { type: String },
      text: { type: String }
    }
  ],
  submittedBy: { type: ObjectId, ref: '_User', required: true, index: true },
  submissionTime: { type: Date },
  code: {
    type: String,
    required: true,
    index: true,
    trim: true,
    lowercase: true
  },
  isRegistered: {
    type: Boolean,
    default: false
  },
  extraSubmissionFields: [
    {
      key: { type: String, required: true },
      title: { type: String, required: true, trim: 'true' },
      type: { type: String, required: true, default: 'text' },
      placeholder: { type: String, trim: 'true' },
      value: { type: String },
      skipped: { type: Boolean },
      numOptions: { type: Number, default: 0 },
      options: [{ type: String }],
      isOptional: { type: Boolean, default: true },
      wordLimit: { type: Number, default: 0 },
      optionValues: [{
        value: { type: String },
        checked: { type: Boolean, default: false }
      }],
      othersOption: { type: String, default: "" },
      dependentFields: [
        { skipped: [{ type: Number }] }
      ],
      checkedMaxLimit: { type: Number, default: 0 }
    }
  ],
  presentingAuthor: { type: Number, default: 0 },
  authorList: [
    {
      user: { type: ObjectId, ref: '_User', index: true },
      alternateEmail: { type: String },
      affiliation: { type: String },
      country: { type: String },
      extraAuthorFields: [
        {
          key: { type: String, required: true },
          title: { type: String, required: true, trim: 'true' },
          type: { type: String, required: true, default: 'text' },
          placeholder: { type: String, trim: 'true' },
          value: { type: String },
          skipped: { type: Boolean },
          numOptions: { type: Number, default: 0 },
          options: [{ type: String }],
          isOptional: { type: Boolean, default: true },
          wordLimit: { type: Number, default: 0 },
          optionValues: [{
            value: { type: String },
            checked: { type: Boolean, default: false }
          }],
          othersOption: { type: String, default: "" },
          dependentFields: [
            { skipped: [{ type: Number }] }
          ],
          checkedMaxLimit: { type: Number, default: 0 }
        }
      ]
    }
  ],
  fileUpload: { type: String },
  reviews: [
    {
      reviewer: {
        user: { type: ObjectId, ref: '_User', index: true },
        alternateEmail: { type: String },
        affiliation: { type: String },
        country: { type: String }
      },
      isReviewed: { type: Boolean, default: false },
      merit: { type: Number },
      confidence: { type: Number },
      review: { type: String, default: '', trim: true },
      commentsToChair: { type: String, default: '', trim: true },
      suggestedCategory: { type: String }
    }
  ],
  commentsByChair: { type: String, default: '', trim: true },
  showReviews: { type: Boolean, default: false },
  decision: [{ 
    verdict: { type: String }, 
    authorReply: { type: String, default: "Pending" } 
  }],
  isNewDecision: { type: Boolean, default: true },
  status: { 
    verdict: { type: String, default: 'pending-review' }, 
    authorReply: { type: String, default: "Pending" }
   }
});

export default Submission;