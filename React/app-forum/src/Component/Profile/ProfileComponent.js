import React from 'react';
import moment from 'moment';
import { Card, Avatar, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';


const DataDiriComponent =(props) => {
    const {image, name,datebirth, email, jk, hobby, phone, addres} = props
        return (
            <div>
                 <Card  style={{backgroundColor: ''}} className="mt-2" >
                    <div className="flex gap-2 justify-center">
                        <img
                        className="mb-3 h-24 w-24 rounded-full shadow-lg"
                        src={image}
                        alt={name}
                        />
                    </div>
                </Card>
                <Card>
                    
                    <p>{name}</p>
                    <p>{datebirth}</p>
                    <p>{jk}</p>
                    <p>{email}</p>
                    <p>{hobby}</p>
                    <p>{phone}</p>
                    <p>{addres}</p>
                    <div className='flex justify-end'>
                        <Button><Link to={"/Profile/edit"}>Edit Data</Link></Button>
                    </div>
                </Card>
            </div>
        )
    }


const DataProfile = (props) => {
        return props.data.map((data, index) => (
            <div key={index}>
                <DataDiriComponent 
                datebirth={data.dateBirth}
                name={data.name}
                jk={data.jk}
                email={data.email}
                phone={data.phone}
                hobby={data.hobby}
                addres={data.address}
                image={data.image}

                 />
            </div>
        ))
    }


export default DataProfile;