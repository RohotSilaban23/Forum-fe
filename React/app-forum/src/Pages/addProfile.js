import "../App.css"
import CreateProfilePage from '../Component/Profile/addProfile'

// import Logo from "../components/Login/logo";
//module import end

export default function CreateProfile() {
  const title = "CretaeForum";
  document.title = "ForumPage | " + title;
  return (
       <>
       <CreateProfilePage/>
       </>
  );
}