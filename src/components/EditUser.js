import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser({users,setUsers}) {

  let params = useParams()
  let [name,setName] = useState()
  let [email,setEmail] = useState()
  let [mobile,setMobile] = useState()
  let [address,setAddress] = useState()
  let [batch,setBatch] = useState()
  let navigate = useNavigate()

let handleSave = ()=>{
  let newArray = [...users]
  newArray.splice(params.id,1,{name,email,mobile,address,batch})
  setUsers(newArray)
  navigate('/dashboard')
}

useEffect(()=>{
  if(params.id < users.length)
  {
    setName(users[params.id].name)
    setEmail(users[params.id].email)
    setMobile(users[params.id].mobile)
    setAddress(users[params.id].address)
    setBatch(users[params.id].batch)
  }
  else
  {
    alert("Invalid User Id")
    navigate('/dashboard')
  }
},[])

return <div className='container'>
   <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
          </div>
  <Form>
  <Form.Group className="mb-3">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Mobile</Form.Label>
      <Form.Control type="text" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Address</Form.Label>
      <Form.Control type="text" placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Batch</Form.Label>
      <Form.Control type="text" placeholder="Enter Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
    </Form.Group>
   
    <Button variant="primary" onClick={()=>handleSave()}>
      Submit
    </Button>
  </Form>
</div>
}

export default EditUser