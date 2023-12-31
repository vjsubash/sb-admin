import React, { useContext } from 'react'
import Card from "./Card";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import {UserContext} from './Context/UserContextComponent'
import { DashboardContext } from './Context/DashboardContextComponent';

function Dashboard() {
  let context = useContext(UserContext)
  let dashboard = useContext(DashboardContext)
  let navigate = useNavigate()

  let handleDelete = (i)=>{
    let newUsers = [...context.users]
    newUsers.splice(i,1)
    context.setUsers(newUsers)
  }
  return <>
     <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            <div className="row">

                {
                  dashboard.data.map((e,i)=>{
                    return <Card key={i}
                    title={e.title}
                    value={e.value}
                    color={e.color}
                    icon={e.icon}
                    isProgress={e.isProgress}
                    />
                  })
                }

            </div>
      </div>
      <div className='container-fluid'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>Batch</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          context.users.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>{e.address}</td>
              <td>{e.batch}</td>
              <td>
                <Button variant='primary' onClick={()=>{navigate(`/edit-user/${i}`)}}>
                  {/* <Link to={`/edit-user/${i}`}>Edit</Link> */}
                  Edit
                </Button>
                &nbsp;
                <Button variant='danger' onClick={()=>handleDelete(i)}>Delete</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
      </div>
      
  </>
}

export default Dashboard