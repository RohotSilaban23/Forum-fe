import React from 'react';
import moment from 'moment';
import { Card, Avatar, Button } from 'flowbite-react';


class DataDiriComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        } 
    }

    render () {
        return (
            <div>
                <Card>
                    <p>{this.props.name}</p>
                    <p>{this.props.datebirth}</p>
                    <p>{this.props.jk}</p>
                    <p>{this.props.email}</p>
                    <p>{this.props.hobby}</p>
                    <p>{this.props.phone}</p>
                    <p>{this.props.adddres}</p>
                    <div className='flex justify-end'>
                        <Button>Edit Data</Button>
                    </div>
                </Card>
            </div>
        )
    }
}

class DataProfile extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            count: 0,
        }
    }

    render () {
        return this.props.data.map((data, index) => (
            <div key={index}>
                <DataDiriComponent 
                datebirth={data.dateBirth}
                name={data.name}
                jk={data.jk}
                email={data.email}
                phone={data.phone}
                hobby={data.hobby}
                adddres={data.address}

                 />
            </div>
        ))
    }
}

export default DataProfile;