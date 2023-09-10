import { Schema } from 'mongoose';

const EventMeeting = new Schema({
    id: { type: Number },
    uuid: { type: String },
    host_id: { type: String },
    topic: { type: String },
    type: { type: Number },
    start_time: { type: String },
    duration: { type: Number },
    timezone: { type: String },
    password: { type: String },
    waiting_room: { type: Boolean, default: false },
    mute_upon_entry: { type: Boolean, default: false },
    meeting_authentication: { type: Boolean, default: false },
    auto_recording: { type: String },
    join_url: { type: String },
    status: { type: String },
    isEnabled: { type: Boolean, default: false },
    created_at: { type: String },
    owner_id: {type: String},
    is_public: {type: Boolean},
});

export default EventMeeting;