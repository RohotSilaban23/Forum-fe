
import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import PostData from './PostComponent';
import ForumData from './ForumComponent';
import CountData from './CountComponent'
import { Button, Card, Carousel } from 'flowbite-react';
import { Grid,Box } from '@mui/material';
import "./dashboard.css"
import { Link } from 'react-router-dom';




// data Fake
const dataPost =[{
    image : faker.image.avatar(),
    date : faker.date.recent(),
    name : "Rohot Silaban",
    Comment : faker.lorem.lines(),
    like: faker.random.numeric(),
    unlike: faker.random.numeric()
 },
 {
    image : faker.image.avatar(),
    date : faker.date.recent(),
    name : "Rona Silaban",
    Comment : faker.lorem.lines(),
    like: faker.random.numeric(),
    unlike: faker.random.numeric()
 },
 {
    image : faker.image.avatar(),
    date : faker.date.recent(),
    name : "Reynaldi",
    Comment : faker.lorem.lines(),
    like: faker.random.numeric(),
    unlike: faker.random.numeric()
 }
 ]

 const dataForum =[{
   image : faker.image.avatar(),
   date : faker.date.recent(),
   nameForum : "One Piece LOVE",
   Desc : faker.lorem.lines(),
},
{
   image : faker.image.avatar(),
   date : faker.date.recent(),
   nameForum : "Naruto Lovers",
   Desc : faker.lorem.lines(),
},
{
   image : faker.image.avatar(),
   date : faker.date.recent(),
   nameForum : "Bleach",
   Desc : faker.lorem.lines(),
},
{
   image : faker.image.avatar(),
   date : faker.date.recent(),
   nameForum : "One Piece LOVE",
   Desc : faker.lorem.lines(),
},
{
   image : faker.image.avatar(),
   date : faker.date.recent(),
   nameForum : "Naruto Lovers",
   Desc : faker.lorem.lines(),
},
{
   image : faker.image.avatar(),
   date : faker.date.recent(),
   nameForum : "Bleach",
   Desc : faker.lorem.lines(),
},
{
   image : faker.image.avatar(),
   date : faker.date.recent(),
   nameForum : "One Piece LOVE",
   Desc : faker.lorem.lines(),
},
{
   image : faker.image.avatar(),
   date : faker.date.recent(),
   nameForum : "Naruto Lovers",
   Desc : faker.lorem.lines(),
},
{
   image : faker.image.avatar(),
   date : faker.date.recent(),
   nameForum : "Bleach",
   Desc : faker.lorem.lines(),
},
{
   image : faker.image.avatar(),
   date : faker.date.recent(),
   nameForum : "One Piece LOVE",
   Desc : faker.lorem.lines(),
},
{
   image : faker.image.avatar(),
   date : faker.date.recent(),
   nameForum : "Naruto Lovers",
   Desc : faker.lorem.lines(),
},
{
   image : faker.image.avatar(),
   date : faker.date.recent(),
   nameForum : "Bleach",
   Desc : faker.lorem.lines(),
},
]




const DashbordPage = () => {
  
    return (
      <Box >
         <Grid container>
            <Grid item sm={3} md={3} lg={3} >
               <Grid item sm={3} md={3} lg={3} style={{height:'100vh',position:"fixed",width:'100%'}}>
                  <div  className="mt-2">
                     <Card>
                        <Button className='text-xl'><Link to={"/Dasbord/NewForum"}>Create New Forum</Link></Button>
                     </Card>
                     <div className='gap-y-0.5'>
         
                           <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-2 ">
                              <Carousel  arrowIcon={false} slideInterval={2000}>
                                    {dataForum.map((data) =>{
                                       return(
                                             <img 
                                             src={data.image}
                                             />
                                       )
                                    })}
                                 </Carousel>
                           </div> 
                   
                     </div>
                  </div>
               </Grid>
            </Grid>
            <Grid item sm={5} md={5} lg={5} className='pag-1 mr-1' align="center">
                      <ForumData data={dataForum}/>
            </Grid>
            <Grid item sm={4} md={4} lg={4} style={{height:'100vh',position:"fixed",right:"0"}}>
                <CountData data={dataForum}/>
               <Card className="mt-2">
                  <h1>Post Trending</h1>
                  <div className='overflow-y-scroll h-[270px] max-h-full'>
                     <PostData data={dataPost}/>
                  </div>
               </Card>
            </Grid>
         </Grid>
      </Box>
      // <div className='grid grid-cols-3 gap-2 mt-6 mx-1.5'>
      // </div>


        
    )
}

export default DashbordPage;