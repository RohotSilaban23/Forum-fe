import React from 'react';
import { faker } from '@faker-js/faker';
import PostData from './PostComponent';
import ListData from './ListAnggotaComponent';
import DataForum from './DescComponent';
import IsiProfile from './PostForum';
import CountData from './CountComponent';
import { Button, Card, Avatar} from 'flowbite-react';
import { Box, Grid } from '@mui/material';
import CommentISi from './Comment';



const dataPost =[{
    image : faker.image.avatar(),
    date : faker.date.recent(),
    name : "Rohot Silaban",
    Post : faker.lorem.lines(),
    like: faker.random.numeric(),
    unlike: faker.random.numeric()
 },
 {
    image : faker.image.avatar(),
    date : faker.date.recent(),
    name : "Rona Silaban",
    Post : faker.lorem.lines(),
    like: faker.random.numeric(),
    unlike: faker.random.numeric()
 },
 {
    image : faker.image.avatar(),
    date : faker.date.recent(),
    name : "Reynaldi",
    Post : faker.lorem.lines(),
    like: faker.random.numeric(),
    unlike: faker.random.numeric()
 },
 {
    image : faker.image.avatar(),
    date : faker.date.recent(),
    name : "Rohot Silaban",
    Post : faker.lorem.lines(),
    like: faker.random.numeric(),
    unlike: faker.random.numeric()
 },
 {
    image : faker.image.avatar(),
    date : faker.date.recent(),
    name : "Rona Silaban",
    Post : faker.lorem.lines(),
    like: faker.random.numeric(),
    unlike: faker.random.numeric()
 },
 {
    image : faker.image.avatar(),
    date : faker.date.recent(),
    name : "Reynaldi",
    Post : faker.lorem.lines(),
    like: faker.random.numeric(),
    unlike: faker.random.numeric()
 }
 ]

 const user = [{
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
            <Box>
              <Grid container>
                <Grid item xs={3} md={3} lg={3}>
                  <Grid item xs={3} md={3} lg={3} style={{height:'100vh',position:"fixed",width:'100%'}} >
                       <DataForum data={Forum}/>
                  </Grid>
                </Grid>
                <Grid item sm={5} md={5} lg={5} className='pag-1 mr-1' align="center"> 
                        <IsiProfile data={user}/>
                        <PostData data={dataPost}/>
                  
                </Grid>
                <Grid item sm={4} md={4} lg={4} style={{height:'100vh',position:"fixed",right:0 ,width:'100%'}}>
                        <CountData data={dataPost}/>
                  <div>
                        <Card>
                            <h1>List Anggota Forum</h1>
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