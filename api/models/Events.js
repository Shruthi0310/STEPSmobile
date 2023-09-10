import Promise from "bluebird";
import mongoose, { Schema } from "mongoose";
import _ from "lodash";

import AppConstants from "../../common/constants/AppConstants.js"
import EColl2Constants from "../../common/constants/EColl2Constants.js"
import UIConstants from "../../common/constants/UIConstants.js"
import Speaker from './submodels/Speaker.js'
import Submission from './submodels/Submission.js'
import FormExtraField from './submodels/FormExtraField.js'
import EventMeeting from './submodels/EventMeeting.js'
import Certificate from './submodels/Certificate.js'
// import { Speaker, Submission, FormExtraField, EventMeeting, Certificate } from "./submodels";

const ObjectId = Schema.Types.ObjectId;

// Schema Definition
const Event = new Schema({
  isDefault: { type: Boolean, index: true, default: false },
  code: {
    type: String,
    required: true,
    unique: true,
    index: true,
    lowercase: true,
    trim: true,
  },
  creator: { type: ObjectId, ref: "_User", required: true, index: true },
  name: { type: String, required: true, index: true, trim: true },
  createdDate: { type: Date, default: '' },
  approvedDate: { type: Date, default: '' },
  type: {
    type: String,
    required: true,
    index: true,
    trim: true,
    lowercase: true,
  },
  eventType: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
    index: true,
    enum: [
      AppConstants.CATEGORY_LIFELONGLEARNING,
      AppConstants.CATEGORY_OTHERS
    ],
    default: AppConstants.CATEGORY_LIFELONGLEARNING
  },
  organisation: {
    type: String,
    default: "None",
    required: true,
    trim: true,
    lowercase: false,
  },
  brandText: { type: String, default: "", trim: true },
  description: { type: String, default: "", trim: true },
  location: { type: String, default: "", trim: true },
  startTime: { type: Date, default: Date.now() },
  endTime: { type: Date, default: Date.now() },
  viewViaGoogleMap: { type: Boolean, default: false },
  multiDay: { type: Boolean, default: false },
  multiDayDetails: [
    {
      date: { type: String },
      sessions: [
        { sessionDate: { type: String }, sessionTime: { type: String } },
      ],
    },
  ],
  sponsors: [
    {
      type: { type: String },
      rank: { type: Number },
      members: [
        {
          name: { type: String },
          description: { type: String },
          imageUrl: { type: String },
          pageUrl: { type: String },
          useUploadedImage: { type: Boolean, default: false },
          identifier: { type: String }
        },
      ],
    },
  ],
  speakers: [{ type: Speaker }],
  sponsorType: { type: String, default: "Sponsors", trim: true },
  projectType: { type: String, default: "Project", trim: true },
  allowVrMode: { type: Boolean, default: false },
  displayVrImage: {type: String, default: "School Of Computing (level 1)", trim: true},
  schedules: [
    {
      time: { type: Date, required: true },
      description: { type: String, trim: true },
    },
  ],
  awards: {
    description: { type: String },
    prizes: [
      {
        title: { type: String },
        description: { type: String },
      },
    ],
  },
  promote: {
    description: { type: String },
    links: [
      {
        title: { type: String },
        url: { type: String },
      },
    ],
    promoteEmailText: {
      emailOpening: {
        type: String
      },
      emailSubject: {
        type: String
      },
      emailBody: {
        type: String
      },
      emailFootnote: {
        type: String
      },
      targetedRecipients: { type: String, default: '' },
      targetGroup: {
        type: Number,
        required: true,
        enum: [
          UIConstants.OPTION_PROMO_ALL,
          UIConstants.OPTION_PROMO_TARGETED_ONLY,
          UIConstants.OPTION_PROMO_SIMILAR_INTEREST_ONLY
        ],
        default: UIConstants.OPTION_PROMO_ALL
      }
    },
  },
  references: [
    {
      title: { type: String },
      url: { type: String },
    },
  ],
  faqs: [
    {
      type: { type: String },
      content: { type: String },
    },
  ],
  instructors: { type: [{ type: ObjectId, ref: "_User", index: true }] },
  subEventChairs: { type: [{ type: ObjectId, ref: "_User", index: true }] },
  managers: { type: [{ type: ObjectId, ref: "_User", index: true }] },
  staffs: { type: [{ type: ObjectId, ref: "_User", index: true }] },
  registration: {
    startTime: { type: Date },
    endTime: { type: Date },
    multiDay: { type: Boolean, default: false },
    multiDayDetails: [
      {
        date: { type: Date },
        sessions: [{ sessionTime: { type: Date } }],
      },
    ],
    allowDuplicateEmailRegistration: { type: Boolean, default: false },
    tickets: [
      {
        key: { type: String, required: true },
        type: { type: String, required: true },
        description: { type: String, required: true },
        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },
        isForExhibitor: { type: Boolean, default: false },
        limit: { type: Number, required: true },
        weightage: { type: Number, required: true },
        quantity: { type: Number, default: 0 },
        maxAcquire: { type: Number, required: true, default: 1 },
        currency: { type: String, default: "SGD" },
        originalPrice: { type: Number, default: 0 },
        discounts: [
          {
            discountKey: { type: String, required: true },
            value: { type: Number },
            discountStartTime: { type: Date },
            discountEndTime: { type: Date },
          },
        ],
      },
    ],
    reminders: [{ time: { type: Date, required: true } }],
    reminderEmailText: {
      emailOpening: { type: String },
      emailSubject: { type: String },
      emailBodyExhibitor: { type: String },
      emailBodyGeneral: { type: String },
      emailTicket: { type: String },
      emailFootnote: { type: String },
    },
    reminderSMSText: {
      smsBodyExhibitor: { type: String },
      smsBodyGeneral: { type: String },
    },
    regConfirmEmailText: {
      emailOpening: {
        type: String,
        default: AppConstants.EMAIL_REG_CONFIRM_OPENING_TEXT,
      },
      emailSubject: {
        type: String,
        default: AppConstants.EMAIL_REG_CONFIRM_SUBJECT_TEXT,
      },
      emailBody: {
        type: String,
        default: AppConstants.EMAIL_REG_CONFIRM_BODY_TEXT,
      },
      emailTicket: {
        type: String,
        default: AppConstants.EMAIL_REG_CONFIRM_TICKET_TEXT,
      },
      emailFootnote: {
        type: String,
        default: AppConstants.EMAIL_REG_CONFIRM_FOOTNOTE_TEXT,
      },
    },
    regConfirmSMSText: {
      smsBody: { type: String, default: AppConstants.PHONE_REG_CONFIRM_TEXT },
    },
    additionalFormFields: [{ type: FormExtraField }],
    paymentTransaction: [
      {
        tranType: { type: String },
        tranRefNo: { type: String },
        paymentRequest: { type: String },
        paymentResponse: { type: String },
        unitAmountIncTax: { type: String },
        hashSecret: { type: String },
        tender: { type: String },
        totAmt: { type: String },
        receiptNo: { type: String },
        payRefNo: { type: String },
        status: { type: String },
        gwCode: { type: String },
        gwMsg: { type: String },
        source: { type: String },
        errorMessage: { type: String },
        createdTime: { type: Date, default: Date.now() },
        updatedTime: { type: Date, default: Date.now() },
        receiptType: { type: String },
        customerId: { type: String },
        externalRefNo: { type: String },
        name: { type: String },
        processStatus: {
          type: String,
          trim: true,
          enum: [
            EColl2Constants.PAYMENT_FAILURE,
            EColl2Constants.PAYMENT_PROCESS_SUCCESS,
            EColl2Constants.PAYMENT_PROCESS_FAILED,
          ],
        },
        account: [
          {
            nusGL: { type: String },
            taxCode: { type: String },
            transactionAmount: { type: String },
          },
        ],
      },
    ],
    redeemedInviteCodes: [{ type: String }],
    redeemedPromoCodes: [{ type: String }],
  },
  vote: {
    startTime: { type: Date },
    endTime: { type: Date },
    isResultPublished: { type: Boolean, default: false },
  },
  survey: {
    startTime: { type: Date },
    endTime: { type: Date },
    additionalFormFields: [{ type: FormExtraField }],
  },
  media: {
    albums: [
      {
        albumLink: { type: String },
        photoLink: { type: String },
      },
    ],
    videoLinks: [{ type: String }],
  },
  subEvent: {
    submissionDeadline: { type: Date },
    instructions: { type: String },
    requireSubEventList: { type: Boolean, default: false },
    allowCheckinForSubEvents: { type: Boolean, default: false },
    allowSubEventEdit: { type: Boolean },
    maximumChairs: { type: Number, default: 0 },
    durationOptions: {
      type: [String],
      default: ["Full Day", "Half Day AM", "Half Day PM"],
    },
    subEventTypes: {
      type: [
        {
          name: { type: String },
          chairTitle: { type: String },
          isEnabled: { type: Boolean },
          cost: { type: Number, default: 0 },
          hasPaperSubmission: { type: Boolean },
          isDateManagerOnly: { type: Boolean, default: false },
          isLocationManagerOnly: { type: Boolean, default: false },
          instructions: { type: String },
          objectiveWordLimit: { type: Number, default: 0 },
          descriptionWordLimit: { type: Number, default: 0 },
          additionalFormFields: [{ type: FormExtraField }],
          additionalChairFields: [{ type: FormExtraField }],
          subEventCount: { type: Number, default: 1 },
          defaultFields: {
            objective: { type: Boolean, default: true },
            description: { type: Boolean, default: true },
            duration: { type: Boolean, default: true },
            location: { type: Boolean, default: true },
          },
          reportDocTemplates: {
            subEvent: [
              {
                type: {
                  type: String,
                  enum: [
                    AppConstants.SUBSECTION_TYPE_PARAGRAPH,
                    AppConstants.SUBSECTION_TYPE_BULLET,
                    AppConstants.SUBSECTION_TYPE_IMAGE,
                  ],
                },
                children: [
                  {
                    text: { type: String },
                    font: { type: String },
                    size: { type: Number },
                    color: { type: String },
                    bold: { type: Boolean },
                    italics: { type: Boolean },
                    underline: { type: Boolean },
                  },
                ],
                bullet: { level: { type: Number } },
                alignment: { type: String },
                heading: { type: String },
                imageLocation: { type: String },
                height: { type: String },
                width: { type: String },
              },
            ],
            individualChairs: [
              {
                type: {
                  type: String,
                  enum: [
                    AppConstants.SUBSECTION_TYPE_PARAGRAPH,
                    AppConstants.SUBSECTION_TYPE_BULLET,
                    AppConstants.SUBSECTION_TYPE_IMAGE,
                  ],
                },
                children: [
                  {
                    text: { type: String },
                    font: { type: String },
                    size: { type: Number },
                    color: { type: String },
                    bold: { type: Boolean },
                    italics: { type: Boolean },
                    underline: { type: Boolean },
                  },
                ],
                bullet: { level: { type: Number } },
                alignment: { type: String },
                heading: { type: String },
                imageLocation: { type: String },
                height: { type: String },
                width: { type: String },
              },
            ],
          },
        },
      ],
      default: [
        {
          name: "Workshop",
          chairTitle: "Facilitator",
          instructions: "",
          hasPaperSubmission: false,
          isEnabled: true,
          isDateManagerOnly: false,
          isLocationManagerOnly: false,
          objectiveWordLimit: 0,
          descriptionWordLimit: 0,
        },
        {
          name: "Panel Discussion",
          chairTitle: "Panelist",
          instructions: "",
          hasPaperSubmission: false,
          isEnabled: true,
          isDateManagerOnly: false,
          isLocationManagerOnly: false,
          objectiveWordLimit: 0,
          descriptionWordLimit: 0,
        },
        {
          name: "Symposium",
          chairTitle: "Speaker",
          instructions: "",
          hasPaperSubmission: false,
          isEnabled: true,
          isDateManagerOnly: false,
          isLocationManagerOnly: false,
          objectiveWordLimit: 0,
          descriptionWordLimit: 0,
        },
      ],
    },
    subEventDecisionEmailText: {
      logoLink: { type: String, default: "" },
      ccRecipients: { type: String, default: "" },
      emailOpening: { type: String, default: "" },
      emailSubject: { type: String, default: "" },
      emailBodyAcceptance: { type: String, default: "" },
      emailBodyRejection: { type: String, default: "" },
      emailFootnote: { type: String, default: "" },
    },
    subEventSubmissionEmailText: {
      logoLink: { type: String, default: "" },
      ccRecipients: { type: String, default: "" },
      emailOpening: { type: String, default: "" },
      emailSubject: { type: String, default: "" },
      emailBody: { type: String, default: "" },
      emailFootnote: { type: String, default: "" },
    },
  },
  submission: {
    blindType: {
      type: String,
      enum: [AppConstants.SINGLE_BLINDED, AppConstants.DOUBLE_BLINDED],
      trim: true,
      default: AppConstants.SINGLE_BLINDED,
    },
    instructions: { type: String, default: "" },
    abstractHeadings: { type: [String] },
    abstractWordLimit: { type: Number, default: 0 },
    instructionsToReviewers: { type: String },
    submissionStartDatetime: { type: Date },
    submissionEndDatetime: { type: Date },
    reviewerDeadline: { type: Date },
    requirePresentingAuthor: { type: Boolean, default: false },
    allowSubmissionEdit: { type: Boolean, default: false },
    editStartDatetime: { type: Date },
    editEndDatetime: { type: Date },
    submissionCount: { type: Number, default: 1 },
    submissionLimit: { type: Number, default: 1 },
    decisionOptions: {
      type: [String],
      default: ["Oral Presentation", "Paper", "Poster/Demo"],
    },
    reviewers: [
      {
        user: { type: ObjectId, ref: "_User", index: true },
        alternateEmail: { type: String },
        affiliation: { type: String },
        country: { type: String },
      },
    ],
    hasFileUpload: { type: Boolean, default: false },
    extraFormData: [{ type: FormExtraField }],
    authorFormData: [{ type: FormExtraField }],
    submissionList: { type: [Submission] },
    paperDecisionEmailText: {
      logoLink: { type: String, default: "" },
      ccRecipients: { type: String, default: "" },
      emailOpening: { type: String, default: "" },
      emailSubject: { type: String, default: "" },
      emailBodyAcceptance: { type: String, default: "" },
      emailBodyRejection: { type: String, default: "" },
      emailFootnote: { type: String, default: "" },
    },
    submissionEmailText: {
      logoLink: { type: String, default: "" },
      ccRecipients: { type: String, default: "" },
      emailOpening: { type: String, default: "" },
      emailSubject: { type: String, default: "" },
      emailBody: { type: String, default: "" },
      emailFootnote: { type: String, default: "" },
    },
    reviewerEmailText: {
      logoLink: { type: String, default: "" },
      ccRecipients: { type: String, default: "" },
      emailOpening: { type: String, default: "" },
      emailSubject: { type: String, default: "" },
      emailBody: { type: String, default: "" },
      emailFootnote: { type: String, default: "" },
    },
    reportDocTemplates: {
      submission: [
        {
          type: {
            type: String,
            enum: [
              AppConstants.SUBSECTION_TYPE_PARAGRAPH,
              AppConstants.SUBSECTION_TYPE_BULLET,
              AppConstants.SUBSECTION_TYPE_IMAGE,
            ],
          },
          children: [
            {
              text: { type: String },
              font: { type: String },
              size: { type: Number },
              color: { type: String },
              bold: { type: Boolean },
              italics: { type: Boolean },
              allCaps: { type: Boolean },
              underline: { type: Boolean },
            },
          ],
          bullet: { level: { type: Number } },
          alignment: { type: String },
          heading: { type: String },
          imageLocation: { type: String },
          height: { type: String },
          width: { type: String },
        },
      ],
      author: [
        {
          type: {
            type: String,
            enum: [
              AppConstants.SUBSECTION_TYPE_PARAGRAPH,
              AppConstants.SUBSECTION_TYPE_BULLET,
              AppConstants.SUBSECTION_TYPE_IMAGE,
            ],
          },
          children: [
            {
              text: { type: String },
              font: { type: String },
              size: { type: Number },
              color: { type: String },
              bold: { type: Boolean },
              italics: { type: Boolean },
              allCaps: { type: Boolean },
              underline: { type: Boolean },
            },
          ],
          bullet: { level: { type: Number } },
          alignment: { type: String },
          heading: { type: String },
          imageLocation: { type: String },
          height: { type: String },
          width: { type: String },
        },
      ],
    },
  },
  menuVisibility: {
    tracks: { type: Boolean, default: true },
    registration: { type: Boolean },
    vote: { type: Boolean },
    speakers: { type: Boolean },
    sponsors: { type: Boolean },
    media: { type: Boolean },
    faq: { type: Boolean },
    survey: { type: Boolean },
    subevent: { type: Boolean },
    paperreview: { type: Boolean },
    zoom: {type: Boolean},
    awards: {type: Boolean},
    certificates: {type: Boolean},
  },
  isValid: { type: Boolean, default: false },
  isInternal: { type: Boolean, default: false },
  isInviteOnly: { type: Boolean, default: false },
  isFree: { type: Boolean, default: true },
  isRequireCheckInToVote: { type: Boolean, default: false },
  hasPromoCode: { type: Boolean, default: false },
  allowAlternativePayment: { type: Boolean, default: false },
  internalDomains: [{ type: String }],
  imageLink: { type: String, default: "" },
  useUploadedImage: { type: Boolean, default: false },
  isBannerCarousel: { type: Boolean, default: false },
  tags: [{ type: String }],
  requireTrackList: { type: Boolean, default: false },
  allowCheckinForTracks: { type: Boolean, default: false },
  showContactEmails: { type: Boolean, default: false },
  contactEmail: { type: String, default: null },
  isEnabled: { type: Boolean, default: true },
  isRejected: { type: Boolean, default: false },
  allowGuestEditByManager: { type: Boolean, default: false },
  paymentConfiguration: {
    departmentCode: { type: String, default: "" },
    applicationCode: { type: String, default: "" },
    activityCode: { type: String, default: "" },
    account: {
      type: [
        {
          nusGL: { type: String },
          taxCode: { type: String },
          percentage: { type: Number },
        },
      ],
    },
    hashSecret: { type: String, default: "" },
    counter: { type: Number, default: EColl2Constants.EVENT_PAYMENT_COUNTER },
    configurationStatus: {
      type: String,
      trim: true,
      enum: [
        EColl2Constants.PAYMENT_CONFIGURATION_NOT_VERIFIED,
        EColl2Constants.PAYMENT_CONFIGURATION_VERIFIED,
      ],
      default: EColl2Constants.PAYMENT_CONFIGURATION_NOT_VERIFIED,
    },
    verifier: { type: ObjectId, ref: "_User", index: true },
    approvedTime: { type: Date, default: "" },
    lastUpdatedBy: { type: ObjectId, ref: "_User", index: true },
    description: { type: String, default: "" },
    descriptionAdditionalField: { type: String, default: "" },
    infoLine3: { type: String, default: "" },
    infoLine3AdditionalField: { type: String, default: "" },
    infoLine4: { type: String, default: "" },
    infoLine4AdditionalField: { type: String, default: "" },
    infoLine5: { type: String, default: "" },
    infoLine5AdditionalField: { type: String, default: "" },
    receiptType: {
      type: String,
      trim: true,
      enum: [
        EColl2Constants.PAYMENT_RECEIPT_ECOLL2_TAX_INV_RECEIPT,
        EColl2Constants.PAYMENT_RECEIPT_ECOLL2_RECEIPT,
        EColl2Constants.PAYMENT_RECEIPT_DEPARTMENT_RECEIPT,
      ],
    },
  },
  meetings: { type: [EventMeeting] },
  certificates: {type: [Certificate]},
  audiences: {type: Array},
  subsidizedBy: {type: String},
  comments: {type: String},
  similarityThreshold: { type: Number, default: AppConstants.SIMILARITY_THRESHOLD }, // for cross event promotion
});

export default mongoose.model("Event", Event, "Event");