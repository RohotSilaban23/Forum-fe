import React from 'react';
import { faker } from '@faker-js/faker';
import PostData from './PostComponent';
import ForumData from './ForumComponent';
import DataProfile from './ProfileComponent';
import CountData from './CountComponent';
import { Button, Card } from 'flowbite-react';
import { Box, Grid } from '@mui/material';

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
    name : "Rohot Silaban",
    Comment : faker.lorem.lines(),
    like: faker.random.numeric(),
    unlike: faker.random.numeric()
 },
 {
    image : faker.image.avatar(),
    date : faker.date.recent(),
    name : "Rohot Silaban",
    Comment : faker.lorem.lines(),
    like: faker.random.numeric(),
    unlike: faker.random.numeric()
 }
 ]

 const ProfileData = [{
    name : "Rohot Silaban",
    image : faker.image.avatar(),
    imageCover : faker.image.avatar(),
    jk: "laki-laki",
    dateBirth: "15 Febuary 2001",
    email : "upchh@example.com",
    phone : "08123456789",
    hobby : "menbaca Buku",
    address : faker.address.streetAddress()
    
 }]

 const listForum = [
  {
    nameForum: "One Piece Lover",
    image : faker.image.avatar(),
    desc: "Pecinta One Piece",
  },
  {
    nameForum: "Naruto Lover",
    image : faker.image.avatar(),
    desc: "Pecinta Naruto",
    date: faker.date.recent(),
  }
 ]
const ProfilePage = () => {
    return (
        <div className=" my-2" > 
           <div>
            
           </div>
            <Card  style={{backgroundImage: `${ProfileData[0].imageCover}`}} >
                <div className="flex gap-2 justify-center">
                    <img
                    className="mb-3 h-24 w-24 rounded-full shadow-lg"
                    src={ProfileData[0].image}
                    alt={ProfileData[0].name}
                    />
                    <p className='text-6xl mt-4'>{ProfileData[0].name}</p>
                </div>
            </Card>
            <Box>
              <Grid container>
                <Grid tem xs={3} md={3} lg={3}>
                  <Grid item xs={3} md={3} lg={3} style={{height:'100vh',position:"fixed",width:'100%'}} >
                    <div>
                      <Card>
                        Tentang Diri
                        <DataProfile data={ProfileData}/>
                      </Card>
                    </div>
                  </Grid>
                </Grid>
                <Grid item sm={6} md={6} lg={6} className='pag-1 mr-1' align="center">
                    <Card className='card-post'>
                          <h1>Your Postingan</h1>
                          <div className='post-view'>
                          <PostData data={dataPost}/>
                          </div>
                    </Card>
                </Grid>
                <Grid item sm={3} md={3} lg={3} style={{height:'100vh',position:"fixed",right:0}}>
                  <div>
                  <Card>  
                     <CountData data={dataPost}/>
                  </Card>
                  </div>
                  <div>
                      <div >
                        <Card>
                            <h1>List Forum Anda</h1>
                            <div className='overflow-y-scroll h-[270px] max-h-full'>
                              <ForumData data={listForum} />
                            </div>
                        </Card>
                      </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
        </div>
    )
}

export default ProfilePage;