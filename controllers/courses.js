import { Course } from '../models/course.js'

export {
  index,
  create,
  show,
}



function show(req, res) {
  Course.findById(req.params.courseId)
  .then(course => {
    res.render('courses/show', {
      course,
      title: "Golf Course Show title",
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

