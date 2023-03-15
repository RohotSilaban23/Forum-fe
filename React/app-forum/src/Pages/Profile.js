import "../App.css"
import ProfilePage from "../Component/Profile/ProfilePage";

// import Logo from "../components/Login/logo";
//module import end

export default function Profile() {
  const title = "Profile";
  document.title = "ProfilePage | " + title;
  return (
       <>
       <ProfilePage/>
       </>
  );
}