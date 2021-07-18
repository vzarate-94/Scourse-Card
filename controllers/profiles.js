import { Profile } from '../models/profile.js'

export {
  index
}

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
    profiles: profiles,
    title: 'Fellow Golfers'
  })
})
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile}`)
  })
}