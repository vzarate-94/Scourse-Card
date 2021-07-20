import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'


export {
  router
}

const router = Router()

router.get('/', profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.post('/:id/golfRounds', isLoggedIn, profilesCtrl.createGolfRounds)
router.delete('/golfRounds/:id', isLoggedIn, profilesCtrl.deleteGolfRounds)