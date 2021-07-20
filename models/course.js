import mongoose from 'mongoose'

export {
  Course,
}


const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  datePlayed: {
    type: Date
  },
  
}, {
  timestamps: true,
})

const Course = mongoose.model('Course', courseSchema)