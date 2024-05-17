import express from 'express'
import authController from '../controllers/auth.controller.js'
import { accountExistsSignUp } from '../middlewares/auth/accountExistsSignUp.js';
import { accountExistsSignIn } from '../middlewares/auth/accountExistsSignIn.js';
import { accountHasBeenVerified } from '../middlewares/auth/accountHasBeenVerified.js';
import { passwordIsOk } from '../middlewares/auth/passwordIsOk.js';
import passport from 'passport'


const {signUp, signIn, signOut} = authController;


const router = express.Router();

router.post('/signup', accountExistsSignUp, signUp)
router.post('/signin',accountExistsSignIn,accountHasBeenVerified, passwordIsOk, signIn)
router.post('/signout',passport.authenticate('jwt', {session:false}), signOut)

export default router;