import mongoose from 'mongoose'

export {
  Course,
}

const Schema = mongoose.Schema

let url = "https://www.hotelroanoke.com/i/SITE_160212_10485664_PSYN1/content/CMS_02122016_105756563_RS0G0/78380B0E-983D-0F11-C5E92761DED6C56D.JPG"

const reviewSchema = new mongoose.Schema({
  reviewer: String,
  content: String,
  recommend: Boolean,
})

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
    unique: true,
  },
  city: String,
  state: String,
  img: {type: String, default: url},
  reviews: [reviewSchema],
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true,
})

const Course = mongoose.model('Course', courseSchema)