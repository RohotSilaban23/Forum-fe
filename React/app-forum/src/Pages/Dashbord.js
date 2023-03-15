import "../App.css"
import DashbordPage from "../Component/Dashbord/DashbordPage";

// import Logo from "../components/Login/logo";
//module import end

export default function Home() {
  const title = "Dashbord";
  document.title = "DashbordPage | " + title;
  return (
        <DashbordPage />
  );
}