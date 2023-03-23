import { Box } from '@mui/system';
import { Button, Card } from 'flowbite-react';
import React ,{useState} from 'react';
import { useMutation } from "react-query";

import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../config/API';

const CreateAccont = () => {
  let navigate = useNavigate();
  const [form, setForm] = useState({
    username : "",
    password : "",
    email : "",
  });

  const {username, email, password} = form

  //handle changes values & set data to state
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form);

  //handle submit action
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      const body = {
        "username":username,
        "email":email,
        "password":password,
      }


      console.log('cek',body);

      const response = await API.post("/register",body);

      console.log("data", response.data.status);

      // navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

    return(
        <>
        <div className='flex justify-center my-3'>
           <Box className='w-[40hv border-grey]'>
              <h2 className='text-4xl text-center'>Resgister Your Account</h2>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-1">
                      <label for="username" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Username</label>
                      <input onChange={handleChange}
                      type="text" 
                             id="username" 
                             className="bg-green-50 border border-green-500 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
                             placeholder="Name User" 
                             name='username'
                             value={username}
                             />
                    </div>
                    <div className="mb-1">
                      <label for="email" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Email</label>
                      <input onChange={handleChange} type="email"  
                             id="email" 
                             className="bg-green-50 border border-green-500 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
                             placeholder="Email user" 
                             name='email'
                             value={email}
                              />
                    </div>
                    <div className="mb-1">
                      <label for="password" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Password</label>
                      <input type="password" 
                             id="password" 
                             className="bg-green-50 border border-green-500 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
                             placeholder="Password User" 
                             onChange={handleChange}
                             name='password'
                             value={password}
                             />
                    </div>
                    
                    <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Register</button>
                    <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><Link to={"/Dashbord"}>Cancel</Link></button>
                  </form>
           </Box>
              
          
        </div>
        </>
    )

}

export default CreateAccont;