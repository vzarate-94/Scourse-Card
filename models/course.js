import mongoose, { Schema } from 'mongoose'

export {
  Course,
}

const courseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
})

const Course = mongoose.model('Course', courseSchema)