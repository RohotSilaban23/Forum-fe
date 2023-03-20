import "../App.css"
import EditPage from "../Component/Forum/EditForumPage";

// import Logo from "../components/Login/logo";
//module import end

export default function EditForum() {
  const title = "Edit Forum";
  document.title = "ForumPage | " + title;
  return (
       <>
       <EditPage/>
       </>
  );
}