import { Toaster } from 'react-hot-toast';
import UpdatePassword from '../UpdatePassword/UpdatePassword';
import FreezeAccount from '../FreezeAccount/FreezeAccount';
import DeleteAccount from '../DeleteAccount/DeleteAccount';
import EditProfile from '../EditProfile/EditProfile';
import ProfileImage from '../ProfileImage/ProfileImage';

export default function Profile() {

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">

      <ProfileImage/>
      {/* Edit profile */}
          <EditProfile/>

      {/* Update password */}
          <UpdatePassword/>

      {/* Delete account */}
            <DeleteAccount/>

      {/* Freeze account */}
             <FreezeAccount/>

      <Toaster />
    </div>
  );
}
