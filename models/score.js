import mongoose from 'mongoose'

export {
  Scores,
}


const scoreSchema = new mongoose.Schema({
  golfCourse: {
    type: String,
    required: true,
    unique: true,
  },
  roundScore: Number,
  roundPrice: Number,
  
}, {
  timestamps: true,
})

const Scores = mongoose.model('Scores', scoreSchema)