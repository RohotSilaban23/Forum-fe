import { Card, Avatar, Button } from 'flowbite-react';
import React,{useState} from 'react';
import SendIcon from '@mui/icons-material/Send';

const PostinganComponent = (props) => {
   const {avatar, name} = props;
   const [form, setForm] = useState({
    
   })

        return (
          <>
            <div className="max-w-[100%] my-1.5 container mx-auto ">
                <Card>
                    <div className='border-b border-gray-200 '>
                        <div className="flex flex-row align-center py-2">
                            <div className='grow-0'>
                                <Avatar
                                img={avatar}
                                rounded={true}
                                size="md"
                                />
                            </div>
                            <div className='grow h-10'>
                              <h2 className='text-2xl'>{name}</h2> 
                            </div>
                        </div> 
                    </div>
                    <div class="mb-1">
                      <label for="postingan" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                      <textarea id="postingan" rows="2" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buat Postingan..."></textarea>
                    </div>
                    <div className='flex justify-end'>
                      <button>send<SendIcon/></button>
                    </div>
                </Card>
            </div>
          </>
        )
    }


const IsiProfile = (props) => {
      return  (
        <PostinganComponent 
          avatar = {props.data[0].image}
          name = {props.data[0].name}
        
        />
      )
    }

export default IsiProfile;