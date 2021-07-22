import mongoose from 'mongoose'

export {
  Course,
}

const Schema = mongoose.Schema

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
  reviews: [reviewSchema]
}, {
  timestamps: true,
})

const Course = mongoose.model('Course', courseSchema)