import React from 'react';
import moment from 'moment';
import { Card, Avatar, Button } from 'flowbite-react';


// Menbuat Component Post
class PostContainers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }   
    }
    render() {
        return (
          // menampilkan disain ui
          <div className="max-w-[100%] my-1.5">
                <Card>
                    <div className="flex flex-wrap gap-2">
                        <Avatar
                        img={this.props.avatar}
                        rounded={true}
                        />
                        <a href='/'>{this.props.name}</a>
                        <span>
                           {this.props.day} at {this.props.time}
                        </span>
                    </div>
                    <p>{this.props.comment}</p>
                    <div className='flex justify-center '>
                            <Button onClick={() => this.setState({count: this.state.count + 1}) }>Like {this.props.like + this.state.count}</Button>
                            <Button className='mx-1.5'>Unlike</Button>
                            <Button>Comment</Button>
                    </div>
                </Card>
          </div>
        )
     }
}

//class PostData untuk mengisi data ke kelas PostContainer
class PostData extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
          count: 0,
       };
    }
    //memanggil kelas PostContainer dan mengisi data dari database/ array
    render() {
       return this.props.data.map((data, index)=> (
          <div className="commentContainer" key={index}>
          
             <PostContainers
             avatar={data.image}
             name={data.name}
             day ={moment(data.date).format('ddd')}
             time ={moment(data.date).format('LT')}
             comment = {data.Comment} 
             like ={data.like}
             />
          </div>
       ));
    }
 }

 export default PostData;