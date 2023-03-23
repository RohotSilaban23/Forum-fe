import { Box } from '@mui/system';
import { Button, Card } from 'flowbite-react';
import React, {useState} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import {API}  from '../../config/API'

const CreatePage = () => {
  const navigate = useNavigate()
    const UserId = localStorage.userId;
    console.log(UserId);
    const [form, setForm] = useState({
      nameForum : "",
      image: "",
      describsi: "",
    })

    const {nameForum, image, describsi} = form;

    const hendleChange = (e) => {
      console.log(e.target.name);
      setForm({
        ...form,
        [e.target.name]:e.target.value
      })
    }

    console.log(form);

    const handleSubmit = async(e) => { 
      try {
        e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const body = {
        "nameForum" : nameForum,
        "image": image,
        "descibsi": describsi,
        "Userid": UserId
      }

      console.log('cek', body)

      const response = await API.post("/NewForum",body);

      console.log("data", response.data.status);

      navigate("/Dashbord")
        
      } catch (error) {
        
      }
    }

    return(
        <>
        <div className='flex justify-center my-3'>
           <Box className='w-[40hv border-grey]'>
              <h2 className='text-4xl text-center'>Create New Forum</h2>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div class="mb-1">
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Image Forum</label>
                      <input onChange={hendleChange}
                             name="image"
                             value={image}
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                    </div>
                    <div class="mb-1">
                      <label for="nameForum" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Forum Name</label>
                      <input onChange={hendleChange}
                             name="nameForum"
                             value={nameForum}
                             type="text" 
                             id="username-success" 
                             class="bg-green-50 border border-green-500 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Name Forum" />
                    </div>
                    <div class="mb-1">
                      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describsi Your Forum</label>
                      <textarea onChange={hendleChange}
                                name="describsi"
                                value={describsi}
                                id="message"
                                rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describsi You Forum..."></textarea>
                    </div>
                    <button type="submit" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save New Data</button>
                    <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><Link to={"/Dashbord"}>Cancel</Link></button>
                  </form>
           </Box>
              
          
        </div>
        </>
    )

}

export default CreatePage;