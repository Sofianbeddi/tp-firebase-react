import './profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'


function Profile() {
  const {currentUser} = useAuthValue()

  return (
      <div className='center'>
        <div className='profile'>
          <h1>Profil</h1>
          <p><strong>Courriel : </strong>{currentUser?.email}</p>
          <p>
            <strong>Courriel vérifié : </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <span onClick={() => signOut(auth)}>Déconnexion</span>
        </div>
      </div>
  )
}

export default Profile
