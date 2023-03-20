import React from 'react';
import moment from 'moment';
import { Card, Avatar, Button } from 'flowbite-react';


const ForumContainers = (props) =>{
    const {avatar, name, date} = props;
          return (
            <div className="max-w-[100%] my-1.5 container mx-auto ">
                <div>
                <Card>
                    <div>
                        <div  className='flex justify-between'>
                            <div className='flex'>
                                <Avatar
                                img={avatar}
                                rounded={true}
                                size="sm"
                                />
                                <a className='text-center mt-3' href='/Forum'>{name}</a> 
                            </div>
                            <div className='flex justify-end'>
                                <Button>keluar</Button>
                            </div>
                            
                        </div> 
                         
                    </div>
                    <span>Tanggal Bergabung {date}</span>
                </Card>
                </div>
                
            </div>
           )
       }
  
 
  const ForumData = (props) => {
       return( 
       <div className='body-post'>
        {props.data.map((data, index)=> (
          <div key={index} className="body-post-2 border-b border-gray-200">
                <div className="body-post-3">
                    <ForumContainers
                    avatar={data.image}
                    name={data.nameForum}
                    desc = {data.Desc} 
                    date= {moment(data.date).format('LL')}
                    />
                </div>
            </div>
             
       ))
       }
    </div> 
    )

    }

export default ForumData;