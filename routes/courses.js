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
// router.get('/:courseId/edit', isLoggedIn, coursesCtrl.edit)

