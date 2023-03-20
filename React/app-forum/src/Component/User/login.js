import { faker } from '@faker-js/faker';
import { Grid } from '@mui/material';
import { Box, Card,Typography, CardContent } from '@mui/system';
import React from 'react';

const fake = [{
    image : faker.image.avatar()
}]

const Login = () => {

    return ( 
       <div className="rounded-lg flex justify-center my-5 shadow">
        <Box sx={{height: 430, width: '40%', backgroundColor: 'white',}} >
          <Grid container>
            <Grid item xs={5} md={5} lg={5}>
              <img src={fake[0].image} alt='ImageLogin' style={{minHeight:"430px",width:'100%'}} />
            </Grid>
            {/* <Grid item xs={8} md={8} lg={8}> */}
              <Grid item xs={7} md={7} lg={7} style={{width:'100%',minHeight:'430px',display:'flex',justifyContent:'center',padding:'20px'}}>
                <form className="space-y-6" action="#">
                  <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                          </div>
                          <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                      </div>
                      <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                      Not registered? 
                      <a href="/Login/Register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                  </div>
                </form>
               </Grid>
            {/* </Grid> */}

          </Grid>
        </Box>
          
       </div>
     )
 
}

export default Login;


