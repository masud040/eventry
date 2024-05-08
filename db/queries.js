import EventModel from "@/model/event-models";
import { UserModel } from "@/model/user-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

async function getAllEvents() {
  const allEvents = await EventModel?.find().lean();

  return replaceMongoIdInArray(allEvents);
}

async function getEventById(eventId) {
  const event = await EventModel.findById(eventId).lean();
  return replaceMongoIdInObject(event);
}

async function createUser(user) {
  return await UserModel.create(user);
}

export { createUser, getAllEvents, getEventById };
