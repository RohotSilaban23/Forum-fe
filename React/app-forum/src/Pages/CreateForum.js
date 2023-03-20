import "../App.css"
import CreatePage from "../Component/Forum/AddForum";

// import Logo from "../components/Login/logo";
//module import end

export default function CreateForum() {
  const title = "CretaeForum";
  document.title = "ForumPage | " + title;
  return (
       <>
       <CreatePage/>
       </>
  );
}