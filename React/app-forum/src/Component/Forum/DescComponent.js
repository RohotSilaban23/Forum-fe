import React from 'react';
import moment from 'moment';
import { Card, Avatar, Button } from 'flowbite-react';


class DataForumComponent extends React.Component {
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
                </Card>
            </div>
        )
    }
}

class DataForum extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            count: 0,
        }
    }

    render () {
        return this.props.data.map((data, index) => (
            <div key={index}>
                <DataForumComponent
                tglPembuatan={data.dateBirth}
                name={data.name}
                Desc={data.jk}
                 />
            </div>
        ))
    }
}

export default DataForum;