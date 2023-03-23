import React from 'react';
import { Avatar, Card } from "flowbite-react";
import SendIcon from '@mui/icons-material/Send';
import moment from 'moment';


const Comments =(props) => {
    const {avatar, name, day, time, comment} = props;
    return (
        <>
            <div>
                <Card>
                    <div  className='flex border-b border-gray-200'>
                        <Avatar
                            img={avatar}
                            rounded={true} />
                            <p>{name}</p>
                            <span>{day} at {time}</span>
                    </div>
                    <p className='text-left'>{comment}</p>
                </Card>
                    
            </div>
        </>
    )
}



const CommentISi = (props) => {
    const {data, avatar, name} = props;
    console.log(data);
    return (
        <>
        <div>
            <div className='flex'>
                <Avatar
                    img={avatar}
                    rounded={true} />
                    <p>{name}</p>
            </div>
            <div class="mb-1">
                <label for="postingan" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <textarea id="postingan" rows="2" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buat Comment..."></textarea>
            </div>
            <div className='flex justify-end mr-2'>
             <button type="button">Send <SendIcon /></button>
            </div>
            {data.map((data) => (
                <Comments
                avatar={data.image}
                name={data.name}
                day ={moment(data.date).format('ddd')}
                time ={moment(data.date).format('LT')} 
                comment={data.Comment}/>
            ))}
        </div>
       
        
        </>
    )
}

export default CommentISi;
