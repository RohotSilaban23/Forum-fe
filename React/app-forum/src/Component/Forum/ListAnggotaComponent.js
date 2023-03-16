import React from 'react';
import moment from 'moment';
import { Card, Avatar, Button } from 'flowbite-react';


class ForumContainers extends React.Component {
    constructor(props) {
       super(props);
       }
 
       render() {
          return (
            <div className="max-w-[100%] my-1.5 container mx-auto ">
                <div>
                <Card>
                    <div >
                        <div className="flex flex-wrap gap-2 border-b border-gray-200">
                            <Avatar
                            img={this.props.avatar}
                            rounded={true}
                            size="sm"
                            />
                            <a className='text-center mt-1' href='/Forum'>{this.props.name}</a> 
                            <div className='flex justify-end'>
                                <Button>keluar</Button>
                            </div>
                            
                        </div> 
                         
                    </div>
                    <span>Tanggal Bergabung {this.props.date}</span>
                </Card>
                </div>
                
            </div>
           )
       }
  }
 
  class ListData extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
          count: 0,
       };
    }
    //memanggil kelas PostContainer dan mengisi data dari database/ array
    render() {
       return( 
       <div className='body-post'>
{       this.props.data.map((data, index)=> (
          <div key={index} className="body-post-2">
                <div className="body-post-3">
                    <ForumContainers
                    avatar={data.image}
                    name={data.name}
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
  }

export default ListData;