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
  players: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  
}, {
  timestamps: true,
})

const Course = mongoose.model('Course', courseSchema)