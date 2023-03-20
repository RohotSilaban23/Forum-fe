import React from 'react';
import moment from 'moment';
import { Card, Avatar, Button, Table } from 'flowbite-react';

const CountContainers = (props) => {
   const {jumlahPostingan}= props;
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
                               <Table.Cell>{jumlahPostingan}</Table.Cell>
                           </Table.Row>
                       </Table.Body>
                   </Table>
            </div>
           )
       }
 
  const CountData = (props) => {
       return (
          <div className="commentContainer">
          
             <CountContainers
              jumlahPostingan={props.data.length}
             />
          </div>
       );
    }


  export default CountData;