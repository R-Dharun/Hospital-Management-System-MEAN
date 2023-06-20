import { Router } from 'express';
import { sampleAppointment, sampleTags } from '../data';
import asyncHandler from 'express-async-handler';
import { BookingModel as BookingModel } from '../models/Booking.model';
const router = Router();

router.get("/seed", asyncHandler(
  async (req, res) => {
    const eyewearCount = await BookingModel.countDocuments();
    if (eyewearCount > 0) {
      res.send("Seed is already done!");
      return;
    }
    await BookingModel.create(sampleAppointment);
    res.send("Seed is done!");
  }
))

router.get("/", asyncHandler(
  async (req, res) => {
    const eyewear = await BookingModel.find();
    res.send(eyewear);
  }
))

router.get("/search/:searchTerm", asyncHandler(
  async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const eyewear = await BookingModel.find({ name: { $regex: searchRegex } })
    res.send(eyewear);
  }
))

router.get("/tags", asyncHandler(
  async (req, res) => {
    const tags = await BookingModel.aggregate([
      {
        $unwind: '$tag'
      },
      {
        $group: {
          _id: '$tag',
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: '$count'
        }
      }
    ]).sort({ count: -1 });

    const all = {
      name: 'All',
      count: await BookingModel.countDocuments()
    }

    tags.unshift(all);
    res.send(tags);
  }
))

router.get("/tag/:tagName", asyncHandler(
  async (req, res) => {
    const eyewear = await BookingModel.find({ tag: req.params.tagName })
    res.send(eyewear);
  }
))

router.get("/:eyewearId", asyncHandler(
  async (req, res) => {
    const eyewear = await BookingModel.findById(req.params.eyewearId);
    res.send(eyewear);
  }
))

export default router;