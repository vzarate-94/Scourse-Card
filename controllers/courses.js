import { Course } from '../models/course.js'

export {
  newCourse as new,
  create,
  index,
}

function index(req, res) {
  Course.find({}, function(err, courses){
    res.render('courses/index', {
      err: err,
      courses: courses,
      title: "All Courses"
    })
  })
}

function newCourse(req, res) {
  res.render('courses/new', {
    title: 'Courses'
  })
}

function create(req, res) {
const course = new Course(req.body)
course.save(function (err){
    if (err) return res.redirect("/courses/new")
    res.redirect(`/courses/${course._id}`)
})
}