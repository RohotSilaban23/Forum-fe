import React from 'react';
import moment from 'moment';
import { Card, Avatar, Button, Table } from 'flowbite-react';

class CountContainers extends React.Component {
    constructor(props) {
       super(props);
       }
 
       render() {
          return (
            <div className="max-w-[100%] my-1.5">
                   <Table>
                       <Table.Head className='justify-center'>
                          <Table.HeadCell>
                              Jumlah Post
                          </Table.HeadCell>
                       </Table.Head>
                       <Table.Body>
                           <Table.Row>
                               <Table.Cell>{this.props.jumlahPostingan}</Table.Cell>
                           </Table.Row>
                       </Table.Body>
                   </Table>
            </div>
           )
       }
  }
 
  class CountData extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
          count: 0,
       };
    }
    //memanggil kelas PostContainer dan mengisi data dari database/ array
    render() {
       return (
          <div className="commentContainer">
          
             <CountContainers
              jumlahPostingan={this.props.data.length}
             />
          </div>
       );
    }
  }

  export default CountData;