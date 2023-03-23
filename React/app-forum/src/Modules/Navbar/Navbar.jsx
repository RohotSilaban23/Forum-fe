import React, {useContext} from 'react'
import { Navbar, Dropdown, Avatar, Button } from 'flowbite-react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { API } from '../../config/API'
import { UserContext } from '../../Context/context'

const NavbarComponent = () => {
  let navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext);
  const userid = localStorage.userId;
  const token = localStorage.token;
  let { data: user} = useQuery("userCache", async () => {
    const response = await API.get(`/User/${userid}`);
    return response.data.data;
  });

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/Login");
  };

  return (
  <div>
    <div style={{height:"100px"}} className='h-14 bg-gradient-to-r from-sky-500 to-indigo-500'>
        <Navbar
        className='shadow-xl h-[100px]' 
        style={{position:'fixed',width:'100%',top:0, zIndex :20}}
        fluid={true}
        rounded={true}
        >
        <Navbar.Brand to={"/Dashord"} >
          <div className="flex justify-center">
            <h1 className='text-center text-4xl' >FORUMNIME</h1>
          </div>
        </Navbar.Brand>
        {token?(
           <div className="flex md:order-2">
           <Dropdown
             arrowIcon={false}
             inline={true}
             label={user ? ( <Avatar size="lg"  alt="User settings" img={user?.image} /> ) : (
               <Avatar size="lg"  alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>
             )}
             
           >
             <Dropdown.Header>
               <span className="block text-sm">
               {user?.name}
               </span>
               <span className="block truncate text-sm font-medium">
                 {user?.email}
               </span>
             </Dropdown.Header>
             <Dropdown.Item>
               <Link to={"/Dashbord"}> Dashboard</Link>
             </Dropdown.Item>
             <Dropdown.Item>
               Settings
             </Dropdown.Item>
             <Dropdown.Item>
               <Link to={"/Profile"}>Profile</Link>
             </Dropdown.Item>
             <Dropdown.Divider />
             <Dropdown.Item onClick={() => handleLogout()}>
               Sign out
             </Dropdown.Item>
           </Dropdown>
           <Navbar.Toggle />
         </div>
        ):(
          <Button href='/Login'>LOGIN</Button>
        ) }
        
        
      </Navbar>
     
    </div>
    <div><Outlet /></div>
    </div>
  )
}

export default NavbarComponent;
