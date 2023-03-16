import React from 'react';
import { faker } from '@faker-js/faker';
import PostData from './PostComponent';
import ListData from './ListAnggotaComponent';
import DataForum from './DescComponent';
import CountData from './CountComponent';
import { Button, Card, Avatar} from 'flowbite-react';
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

 const ListAnggota = [{
    name : "Rohot Silaban",
    image : faker.image.avatar(),
    imageCover : faker.image.avatar(),
    jk: "laki-laki",
    dateBirth: "15 Febuary 2001",
    email : "upchh@example.com",
    phone : "08123456789",
    hobby : "menbaca Buku",
    address : faker.address.streetAddress()
 },
 {
    name : "Rona Silaban",
    image : faker.image.avatar(),
    imageCover : faker.image.avatar(),
    jk: "laki-laki",
    dateBirth: "15 Febuary 2001",
    email : "upchh@example.com",
    phone : "08123456789",
    hobby : "menbaca Buku",
    address : faker.address.streetAddress()
    
 },
 {
    name : "Reynaldy",
    image : faker.image.avatar(),
    imageCover : faker.image.avatar(),
    jk: "laki-laki",
    dateBirth: "15 Febuary 2001",
    email : "upchh@example.com",
    phone : "08123456789",
    hobby : "menbaca Buku",
    address : faker.address.streetAddress()
    
 }]

 const Forum = [
  {
    nameForum: "One Piece Lover",
    image : faker.image.avatar(),
    desc: "Pecinta One Piece",
    date: faker.date.recent()
  }
 ]
const ForumPage = () => {
    return (
        <div className=" my-2" > 
           <div>
            
           </div>
            <Card >
                <div className="flex gap-3 justify-center ">
                      <Avatar
                        img={Forum[0].image}
                        rounded={true}
                        size="lg"
                        />
                    <p className='text-3xl mt-3'>{Forum[0].nameForum}</p>
                </div>
            </Card>
            <Box>
              <Grid container>
                <Grid tem xs={3} md={3} lg={3}>
                  <Grid item xs={3} md={3} lg={3} style={{height:'100vh',position:"fixed",width:'100%'}} >
                    <div>
                      <Card>
                        Desc
                       <DataForum data={Forum}/>
                      </Card>
                    </div>
                  </Grid>
                </Grid>
                <Grid item sm={6} md={6} lg={6} className='pag-1 mr-1' align="center">
                    <Card>
                        Post
                       
                    </Card>
                    <Card className='card-post'>
                          <h1>Postingan Forum</h1>
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
                        <Card>
                            <h1>List Forum Anda</h1>
                            <div className='overflow-y-scroll h-[270px] max-h-full'>
                              <ListData data={ListAnggota} />
                            </div>
                        </Card>
                  </div>
                </Grid>
              </Grid>
            </Box>
        </div>
    )
}

export default ForumPage;