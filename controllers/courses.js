import { Course } from '../models/course.js'

export {
  index,
  create,
  show,
  createGolfRounds,
}

function createGolfRounds(req, res) {
  Course.findById(req.params._id)
  .then(course => {
    course.golfRounds.push(req.body)
    course.golfRounds.save()
    .then (() => {
      res.redirect(`/courses/${req.params._id}`)
    })
    console.log(golfRounds)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/courses')
  })
}

function show(req, res) {
  Course.findById(req.params.courseId)
  .then(course => {
    res.render('courses/show', {
      course,
      title: "Golf Course Show title"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/courses')
  })
}



function create(req, res) {
  Course.create(req.body)
  .then(course => {
    res.redirect('/courses')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/courses')
  })
}

function index(req, res) {
  Course.find({})
  .then(courses => {
    res.render("courses/index", {
      courses,
      title: "Golf Courses"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/courses")
  })
}

