import { Course } from '../models/course.js'
import { Profile } from '../models/profile.js'

export {
  index,
  create,
  show,
  edit,
  update,
  createReview,
}

function createReview(req, res) {
  req.body.recommend = !!req.body.recommend
  Course.findById(req.params.id, function(err, course) {
    course.reviews.push(req.body)
    course.save(function(err) {
      res.redirect(`/courses/${course._id}`)
    })
  })
}

function update(req, res) {
  Course.findById(req.params.id) 
  .then(course => {
    if (course.owner.equals(req.user.profile._id)) {
      course.update(req.body, { new: true })
      .then(course => {
        res.redirect(`/courses/${course._id}`)
      })
    } else {
      throw new Error("Not Authorized")
    }
  })
    .catch((err) => {
    console.log(err)
    res.redirect(`/courses`)
  })
}

function edit(req, res) {
  Course.findById(req.params.id)
  .then(course => {
    res.render('courses/edit', {
      course,
      title: "Edit Course",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/courses')
  })
}


function show(req, res) {
  Course.findById(req.params.courseId)
  .populate("owner")
  .then(course => {
    res.render("courses/show", {
      course,
      title: "Course show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/courses")
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

