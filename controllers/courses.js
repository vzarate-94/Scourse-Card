import { Course } from '../models/course.js'
import { Profile } from '../models/profile.js'

export {
  index,
  create,
  show,
}

function show(req, res) {
  Course.findById(req.params.courseId)
  .populate('profile')
  .exec(function(err, course) {
    Profile.find({_id: {$nin:
    course.profile}}, function(err, playerNotOnCourse) {
      res.render('courses/show', {
        title: 'Course Details',
        course: course,
        playerNotOnCourse: playerNotOnCourse,
        err: err,
      })
    })
  })
}



function create(req, res) {
  req.body.owner = req.user.profile
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

