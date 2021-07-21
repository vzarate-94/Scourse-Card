import mongoose from 'mongoose'

export {
  Course,
}

const Schema = mongoose.Schema

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
    unique: true,
  },
  profile: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  city: String,
  state: String,
  
}, {
  timestamps: true,
})

const Course = mongoose.model('Course', courseSchema)