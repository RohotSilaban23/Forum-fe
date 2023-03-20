import React from 'react';
import moment from 'moment';
import { Card, Avatar, Button } from 'flowbite-react';


const ForumContainers =(props)=> {
    const {avatar, name, desc} = props;
          return (
            <div className="max-w-[100%] my-1.5 container mx-auto my-0.5 ">
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
                            <div className='grow-0'>
                                <Button >Join</Button>
                            </div>
                        </div> 
                    </div>
                    
                    <p>{desc}</p>
                </Card>
                </div>
           )
       }

 
  const ForumData = (props) => {
       return( 
       <div className='body-post'>
        {props.data.map((data, index)=> (
          <div key={index} className="body-post-2">
                <div className="body-post-3">
                    <ForumContainers
                    avatar={data.image}
                    name={data.nameForum}
                    desc = {data.Desc} 
                    />
                </div>
            </div>
             
       ))
       }
    </div> 
    )

    }
 

export default ForumData;