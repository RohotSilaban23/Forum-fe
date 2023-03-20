import React from 'react';
import moment from 'moment';
import { Card, Avatar, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';


const DataForumComponent = (props) => {
    const {image, name, desc, jk} = props;
        return (
            <div className='mt-2'>
                <Card>
                    <Avatar
                            img={image}
                            rounded={true}
                            size="lg"
                            />
                </Card>
                <Card>
                    <p>{name}</p>
                    <p>{desc}</p>
                    <p>{jk}</p>
                    <div className='flex justify-end'>
                        <Button><Link to={"/Forum/Edit"}>Edit Forum Profile</Link></Button>
                    </div>
                </Card>
               
            </div>
        )
    }


const DataForum = (props) => {
        return props.data.map((data, index) => (
            <div key={index}>
                <DataForumComponent
                date={data.date}
                name={data.nameForum}
                desc={data.desc}
                image={data.image}
                 />
            </div>
        ))
    }


export default DataForum;