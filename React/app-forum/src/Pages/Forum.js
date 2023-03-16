import "../App.css"
import ForumPage from "../Component/Forum/ForumPage";

// import Logo from "../components/Login/logo";
//module import end

export default function Forum() {
  const title = "Forum";
  document.title = "ForumPage | " + title;
  return (
       <>
       <ForumPage/>
       </>
  );
}