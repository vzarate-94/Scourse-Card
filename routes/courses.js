import { Router } from 'express'
import * as coursesCtrl from '../controllers/courses.js'

export {
  router
}

const router = Router()

router.get('/', coursesCtrl.index)
router.get('/:courseId', coursesCtrl.show)
router.post('/', coursesCtrl.create)

