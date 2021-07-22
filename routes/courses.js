import { Router } from 'express'
import * as coursesCtrl from '../controllers/courses.js'
import { isLoggedIn } from '../middleware/middleware.js'

export {
  router
}

const router = Router()

router.get('/', coursesCtrl.index)
router.get('/:courseId', coursesCtrl.show)
router.post('/', isLoggedIn, coursesCtrl.create)
router.post('/:id/reviews', isLoggedIn, coursesCtrl.createReview)
router.get('/:id/edit', isLoggedIn, coursesCtrl.edit)
router.put('/:id', isLoggedIn, coursesCtrl.update)

