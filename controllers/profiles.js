import { Profile } from '../models/profile.js'
import { Course } from '../models/course.js'

export {
  index,
  show,
  createGolfRounds,
  deleteGolfRounds,
  edit,
}

function edit(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profiles/edit', {
      profile,
      title: "Edit Round"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function deleteGolfRounds(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.golfRounds.remove({_id: req.params.id})
    profile.save()
    .then(()=> {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function createGolfRounds(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.golfRounds.push(req.body)
    profile.save()
    .then (() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile}`)
  })
}


function show(req,res) {
  Profile.findById(req.params.id)
  .then((profile) => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      res.render('profiles/show', {
        title: `${profile.name}'s profile`,
        profile: profile,
        self: self,
        isSelf: isSelf,
      })
    })
  })
  .catch((err) => {
    console.log(err)
    res.redirect('/')
  })
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