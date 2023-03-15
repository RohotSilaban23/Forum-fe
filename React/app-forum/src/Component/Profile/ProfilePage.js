import React from 'react';
import { faker } from '@faker-js/faker';
import PostData from './PostComponent';
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
    imageCover : faker.image.image(),
    dateBirth: "15 Febuary 2001",
    email : "upchh@example.com",
    phone : "08123456789",
    Hoby : "menbaca Buku",
    address : faker.address.streetAddress()
    
 }]
const ProfilePage = () => {
    return (
        <div className=" mx-2 my-2"> 
            <Card>
                <div>
                    <img
                    className="mb-3 h-24 w-24 rounded-full shadow-lg"
                    src={dataPost[0].imageCover}
                    alt={dataPost[0].name}
                    />
                </div>
            </Card>
            <Box>
              <Grid container>
                <Grid item xs={3} md={3} lg={3}>
                  <div>
                    <Card>
                      Tentang Diri
                    </Card>
                  </div>
                </Grid>
                <Grid item sm={6} md={6} lg={6} className='pag-1 mr-1' align="center">
                    <Card className='card-post'>
                          <h1>Forum Yang Tersedia</h1>
                          <div className='post-view'>
                          <PostData data={dataPost}/>
                          </div>
                    </Card>
                </Grid>
                <Grid item sm={3} md={3} lg={3} style={{height:'100vh',position:"fixed",right:0}}>
                  <div>
                  <Card>  
                     Count Post and Comment/like
                  </Card>
                  </div>
                  <div>
                      <div >
                        <Card>
                            <h1>List Forum Anda</h1>
                            
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