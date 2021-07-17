import { Router } from 'express'
const router = Router()
import * as coursesCtrl from '../controllers/courses.js'

export {
  router
}

router.get('/', coursesCtrl.index)
router.get('/new', coursesCtrl.new)

