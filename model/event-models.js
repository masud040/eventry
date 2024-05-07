import mongoose, { Schema } from "mongoose";
const eventSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  details: {
    required: true,
    type: String,
  },
  location: {
    required: true,
    type: String,
  },
  imageUrl: {
    required: true,
    type: String,
  },
  interested_ids: {
    required: false,
    type: Array,
  },
  going_ids: {
    required: false,
    type: Array,
  },
  swgs: {
    required: false,
    type: Array,
  },
});
let EventModel;
if (mongoose.models && mongoose.models.events) {
  EventModel = mongoose.model("events");
} else {
  EventModel = mongoose.model("events", eventSchema);
}

export default EventModel;
