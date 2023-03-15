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
                              Jumlah User
                          </Table.HeadCell>
                          <Table.HeadCell>
                              Jumlah Forum
                          </Table.HeadCell>
                          <Table.HeadCell>
                              Jumlah Postingan
                          </Table.HeadCell>
                       </Table.Head>
                       <Table.Body>
                           <Table.Row>
                               <Table.Cell>{this.props.jumlahAnggota}</Table.Cell>
                               <Table.Cell>{this.props.jumlahForum}</Table.Cell>
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
              jumlahAnggota={this.props.data.length}
              jumlahForum={this.props.data.length}
              jumlahPostingan={this.props.data.length}
             />
          </div>
       );
    }
  }

  export default CountData;