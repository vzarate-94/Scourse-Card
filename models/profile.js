import mongoose from 'mongoose'

export {
  Profile
}

const golfRoundsSchema = new mongoose.Schema({
  roundCourse: String,
  score: Number,
  courseRating: Number,
  slopeRating: Number,
})


const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  golfRounds: [golfRoundsSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)