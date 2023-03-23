import React,{useState} from 'react';
import moment from 'moment';
import { Card, Avatar, Button } from 'flowbite-react';
import { Forum } from '@mui/icons-material';
import { API } from '../../config/API';
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom';

const ForumContainers =(props)=> {
    const {avatar, name, desc, id} = props;
    let navigate = useNavigate();
    const userid = localStorage.userId;
    const role = localStorage.role;
    const [form, setForm] = useState({
        idForum: ""
    })

    let { data: Anggota} = useQuery("AnggotaCache", async () => {
        const response = await API.get(`Forum/ListForum/${userid}`);
        return response.data.data;
      });
      console.log(Anggota)


    
    //handle changes values & set data to state
    const HandleEntry = async() => {
        try {
            const config = {
              headers: {
                "Content-type": "multipart/form-data",
              },
            };
            const body = {
                "idForum": id,
                "userId": userid,
                "rolle": role
            }
      
      
            console.log('cek',body);
      
            const response = await API.post("/Forum/gabung",body);
      
            console.log("data", response.data.status);
      
            navigate(`/Forum/${id}`);
          } catch (error) {
            console.log(error);
          }
    }


  
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
                                <Button onClick={() => HandleEntry()} >Join</Button>
                            </div>
                        </div> 
                    </div>
                    
                    <p>{desc}</p>
                </Card>
                </div>
           )
       }

 
  const ForumData = (props) => {
    const { data } = props;
       return( 
       <div className='body-post'>
        {data.Forum !== undefined && data?.Forum?.map((data, index)=> (
          <div key={index} className="body-post-2">
                <div className="body-post-3">
                    <ForumContainers
                    avatar={data?.image}
                    name={data?.nameForum}
                    desc = {data?.descibsi} 
                    id={data?.id}
                    Userid={data?.Userid} />
                </div>
            </div>
             
       ))
       }
    </div> 
    )

    }
 
    ForumContainers.defaultProps = {
        avatar: "",
        name: "",
        desc : "",
        id: "",
        Userid: ""
    }

export default ForumData;