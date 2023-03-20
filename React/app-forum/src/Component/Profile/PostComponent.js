import React from 'react';
import moment from 'moment';
import { Card, Avatar, Button } from 'flowbite-react';
import { useState } from 'react';
import CommentISi from './Comment';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import { faker } from '@faker-js/faker';

const comments = [
   {
    image : faker.image.avatar(),
     date : faker.date.recent(),
     name : faker.name.firstName(),
     Comment : faker.lorem.lines(),
   }, {
    image : faker.image.avatar(),
     date : faker.date.recent(),
     name : faker.name.firstName(),
     Comment : faker.lorem.lines(),
   }, {
    image : faker.image.avatar(),
     date : faker.date.recent(),
     name : faker.name.firstName(),
     Comment : faker.lorem.lines(),
   }, {
    image : faker.image.avatar(),
     date : faker.date.recent(),
     name : faker.name.firstName(),
     Comment : faker.lorem.lines(),
   }
 ]

// Menbuat Component Post
const PostContainers = (props) => {
   const [commentOpen, setCommentOpen] = useState(false);
   const [likes, setlikes] = useState(0);
   const [unlikes, setUnlikes] = useState(0);
   const {avatar, name, day, time, post , like} = props
   console.log("isi",commentOpen);

     return (
       // menampilkan disain ui
       <div className="max-w-[100%] my-1.5">
             <Card>
                 <div className="flex justify-between border-b border-gray-200">
                     <div className='flex mx-1 my-0.5'>
                        <Avatar
                           img={avatar}
                           rounded={true}
                           />
                           <a href='/' className='text-center mt-2 mx-1'>{name}</a>
                     </div>
                     <div>
                        <span>
                           {day} at {time}
                        </span>
                     </div>     
                 </div>
                 <p className='text-left'>{post}</p>
                 <div   className='flex justify-between'>
                     <div>
                        <button onClick={() => setlikes(likes +1) }> <ThumbUpOffAltIcon />{like + likes}</button>
                        <button className='mx-1.5' onClick={() => setUnlikes(unlikes +1) }><ThumbDownOffAltIcon />{like + unlikes}</button>
                     </div>
                     <div className='flex justify-end ' onClick={() => setCommentOpen(!commentOpen)}>
                        <button> <CommentIcon /> see Comments...</button>
                     </div>
                    
                 </div>
                 <div className='border border-solid justify-left'>
                  {commentOpen && <CommentISi
                        avatar={avatar}
                        name={name}
                        data={comments} />}
                 </div>
                 
                 
             </Card>
       </div>
     )
  }

//class PostData untuk mengisi data ke kelas PostContainer
const PostData = (props) => {
    return props?.data?.map((data, index)=> (
       <div className="commentContainer" key={index}>
       
          <PostContainers
          avatar={data.image}
          name={data.name}
          day ={moment(data.date).format('ddd')}
          time ={moment(data.date).format('LT')}
          post = {data.Post} 
          like ={data.like}
          />
       </div>
    ));
 }


export default PostData;