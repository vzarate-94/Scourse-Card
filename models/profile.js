import mongoose from 'mongoose'

export {
  Profile
}

const golfRoundsSchema = new mongoose.Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true}, 
  score: Number,
  price: Number,
})


const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  golfRounds: [golfRoundsSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)