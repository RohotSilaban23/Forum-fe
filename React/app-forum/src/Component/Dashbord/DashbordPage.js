
import React from 'react';
import { faker } from '@faker-js/faker';
import PostData from './PostComponent';
import ForumData from './ForumComponent';
import CountData from './CountComponent'
import { Button, Card, Carousel } from 'flowbite-react';
import { Grid,Box } from '@mui/material';
import "./dashboard.css"




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
               <div>
                  <Card>
                     <Button className='text-xl'>Create New Forum</Button>
                  </Card>
                  <div className='gap-y-0.5'>
            <Card className='mt-2'>
               <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
                  <Carousel slideInterval={2000}>
                        {dataForum.map((data) =>{
                           return(
                                 <img 
                                 src={data.image}
                                 />
                           )
                        })}
                     </Carousel>
               </div> 
            </Card>
            
         </div>
               </div>
            </Grid>
            </Grid>
         <Grid item sm={6} md={6} lg={6} className='pag-1 mr-1' align="center">
         <Card className='card-post'>
               <h1>Forum Yang Tersedia</h1>
               <div className='post-view'>
               <ForumData data={dataForum}/>
               </div>
         </Card>
            <div>

         
      </div>
            </Grid>
            <Grid item sm={3} md={3} lg={3} style={{height:'100vh',position:"fixed",right:"0"}}>
            <div>
            <Card>  
               
               <CountData data={dataForum}/>
            </Card>
            
         </div>

         <div>
            <div >
               <Card>
                  <h1>Post Trending</h1>
                  <div className='overflow-y-scroll h-[270px] max-h-full'>
                     <PostData data={dataPost}/>
                  </div>
                  
               </Card></div>
            </div>
            
  
            </Grid>
         </Grid>
      </Box>
      // <div className='grid grid-cols-3 gap-2 mt-6 mx-1.5'>
      // </div>


        
    )
}

export default DashbordPage;