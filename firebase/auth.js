import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import app from './client'


export const logout = () => {
  const auth = getAuth()
  signOut(auth)
    .then(() => console.log('Exiting...'))
    .catch(error => console.error(error))
}

export const getActiveSession = (onChange) => {
  const auth = getAuth()
  onAuthStateChanged(auth, user => {
    if (user) {
      const { displayName, email, photoURL, uid } = user;
      return onChange({
        username: displayName,
        email,
        avatar: photoURL,
        userId: uid
      })
    }

    return onChange(null)
  })
}


const githubProvider = new GithubAuthProvider()

export const loginWithGithub = () => {
  const auth = getAuth()
  signInWithPopup(auth, githubProvider)
    .then(result => {
      return result.user;
    })
    .catch(error => {
      console.error(error.message, 'code:', error.code)
    })
}

const googleProvider = new GoogleAuthProvider()
export const loginWithGoogle = () => {
  const auth = getAuth()
  signInWithPopup(auth, googleProvider)
    .then(result => {
      console.log(result.user);
      return result.user
    })
    .catch(error => {
      console.error(error.message, 'code:', error.code);
    })
}

export const loginWithPassword = (email, password) => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      return user
    })
    .catch(error => {
      console.error(error.message, 'code:', error.code);
    })
}