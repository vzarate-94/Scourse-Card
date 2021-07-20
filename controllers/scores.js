import { Scores } from '../models/score.js'

export {
  index
}

function index(req, res) {
  Scores.find({})
  .then(score => {
    res.render("scores/index", {
      Scores,
      title: "Golf Rounds"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/scores")
  })
}