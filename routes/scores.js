import { Router } from 'express'
import * as scoresCtrl from '../controllers/scores.js'
import { isLoggedIn } from '../middleware/middleware.js'

export {
  router
}

const router = Router()

router.get('/', isLoggedIn, scoresCtrl.index)
