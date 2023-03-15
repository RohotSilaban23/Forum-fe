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
                    <div>
                        <div className="flex flex-wrap gap-2">
                            <Avatar
                            img={this.props.avatar}
                            rounded={true}
                            size="lg"
                            />
                            <h2 className='text-center text-4xl mt-3'>{this.props.name}</h2> 
                        </div> 
                        <div className='flex justify-end'>
                                <div>
                                    <Button >Join</Button>
                                </div>
                        </div>
                    </div>
                    
                    <p>{this.props.desc}</p>
                </Card>
                </div>
                
            </div>
           )
       }
  }
 
  class ForumData extends React.Component {
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
  }

export default ForumData;