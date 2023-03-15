import React from 'react'
import { Navbar, Dropdown, Avatar } from 'flowbite-react'
import { Outlet, Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
  <div>
    <div style={{height:"100px",background:"#fff"}}>
        <Navbar
        className='shadow-xl h-[100px]' 
        style={{position:'fixed',width:'100%',top:0, zIndex :20}}
        fluid={true}
        rounded={true}
        >
        <Navbar.Brand to={"/Dashord"} >
          <div className="flex justify-center">
            <h1 className='text-center text-6xl' >FORUMNIME</h1>
          </div>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<Avatar size="lg"  alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
            
          >
            <Dropdown.Header>
              <span className="block text-sm">
                Bonnie Green
              </span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
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
            <Dropdown.Item>
              Sign out
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        
      </Navbar>
     
    </div>
    <div><Outlet /></div>
    </div>
  )
}

export default NavbarComponent;
