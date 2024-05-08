import EventModel from "@/model/event-models";
import { UserModel } from "@/model/user-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";
import mongoose from "mongoose";

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
async function findUserByCredential(user) {
  const existUser = await UserModel.findOne(user).lean();
  if (existUser) {
    return replaceMongoIdInObject(existUser);
  }
  return null;
}
async function updateInterest(eventId, authId) {
  const event = await EventModel.findById(eventId);
  if (event) {
    const foundUsers = event.interested_ids.find(
      (id) => id.toString() === authId
    );
    if (foundUsers) {
      event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
    } else {
      event.interested_ids.push(new mongoose.Types.ObjectId(authId));
    }
  }
  event.save();
}
export {
  createUser,
  findUserByCredential,
  getAllEvents,
  getEventById,
  updateInterest,
};
