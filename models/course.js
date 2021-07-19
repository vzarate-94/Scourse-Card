import mongoose from 'mongoose'

export {
  Course,
}

const golfRoundsSchema = new mongoose.Schema({
  score: Number,
  Price: Number,
  owner: {type: mongoose.Schema.Types.ObjectId, ref:'Course'} 
})

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  datePlayed: {
    type: Date
  },
  golfRounds: [golfRoundsSchema],
}, {
  timestamps: true,
})

const Course = mongoose.model('Course', courseSchema)