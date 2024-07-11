import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./Style.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function EditEmp() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [Cust, setCust] =useState({
        // id:'',
        name:'',
        email:'',
        // password:'',
        address:'',
        salary:'',
        category:'',
        designation:''
    });

    const [categ,setCateg] = useState([]);
    useEffect(() => {
        // axios.get("http://localhost:1010/displayCategory")
        // .then((result) => {
        //     if(result.data.Status){
        //         setCateg(result.data.Result)
        //     }else{
        //         alert(d.data.Error)
        //          }
        // })
        fetch("http://localhost:1010/displayCategory")
    .then((res) => res.json()) // will extract data in json format
    .then((d) => {
      console.log(d)
      if(d){
          setCateg(d)
      }else{
          alert(d.data.Error)
      }
  })
        .catch((err) => console.log("error occured", err))
      },[]);

      const [desig,setDesig] = useState([]);
      useEffect(() => {
        // axios.get("http://localhost:1010/displayDesignation")
        // .then((result) => {
        //     if(result.data.Status){
        //         setDesig(result.data.Result)
        //     }else{
        //         alert(d.data.Error)
        //          }
        // })
        fetch("http://localhost:1010/displayDesignation")
    .then((res) => res.json()) // will extract data in json format
    .then((d) => {
      console.log(d)
      if(d){
          setDesig(d)
      }else{
          alert(d.data.Error)
      }
  })
        .catch((err) => console.log("error occured", err))
      },[]);

      useEffect(() => {
        axios.get("http://localhost:1010/displayEmployee/" + id)
        .then((result) => {
            console.log(result.data);
            setCust({
                ...Cust,
                id: result.data.Result[0].id,
                name: result.data.Result[0].name,
                email: result.data.Result[0].email,
                password: result.data.Result[0].password,
                address: result.data.Result[0].address,
                salary: result.data.Result[0].salary,
                category: result.data.Result[0].category,
                designation: result.data.Result[0].designation
            })
        })
        .catch((err) => console.log("error occured", err))
      },[])

      function saveData(e){
        e.preventDefault();
        axios.put("http://localhost:1010/editEmployee/" +id, Cust)
        .then((result) => {
            console.log(result.data)
            if(result.data.Status){
                navigate('/Employee')
            }else{
                alert(result.data.Error)
            }
        })
        .catch((err) => console.log("error occured", err))
      }

  return (
    <>
    <div className="sidebar">
        <h3 className='text-white mt-3 mb-5 ml-2 text-center'>ADMIN</h3>
        <a className="active" href="/home"><i className="bi bi-house mx-1"></i>Dashboard</a>
        <a href="/AdminProfile"><i className="bi bi-person-circle mx-1"></i>Profile</a>
        <a href="/Employee"><i className="bi bi-people mx-1"></i>Employees</a>
        <a href="/Category"><i className="bi bi-tags mx-1"></i>Category</a>
        <a href="/Designation"><i className="bi bi-person-rolodex mx-1"></i>Designation</a>
        <a href="/"><i className="bi bi-box-arrow-left mx-1"></i>Logout</a>
    </div>

    <div className="content">
        <h2 className='text-center shadow py-3'>EMPLOYEE MANAGEMENT SYSTEM</h2>
        <div className="d-flex justify-content-center align-items-center mt-5"> 
            <div className="container p-3 rounded border w-75  categForm">
                <h2 className="text-center mb-4">EDIT EMPLOYEE</h2>
                <form onSubmit={saveData}> 
                    <div className="mb-2">
                        {/* ADMIN CAN'T CHNGE ID AND PASSWORD OF EMPLOYEE */}
                        <label htmlFor="id">Employee Id:</label>
                        <input
                            type="text"
                            name="id"
                            placeholder="enter id"
                            className="form-control rounded-0"
                            value={Cust.id}
                            onChange={(e) => setCust({...Cust, id: e.target.value})}
                            readOnly
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="enter name"
                            className="form-control rounded-0"
                            value={Cust.name}
                            onChange={(e) => setCust({...Cust, name: e.target.value})}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="enter email"
                            className="form-control rounded-0"
                            value={Cust.email}
                            onChange={(e) => setCust({...Cust, email: e.target.value})}
                        />
                    </div>
                    {/* ADMIN CAN'T CHNGE ID AND PASSWORD OF EMPLOYEE 
                    PASSWORD IS NOT VISIBLE TO ADMIN*/}
                    <div className="mb-2">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="enter password"
                            className="form-control rounded-0"
                            value={Cust.password}
                            onChange={(e) => setCust({...Cust, password: e.target.value})}
                            readOnly
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="enter address"
                            className="form-control rounded-0"
                            value={Cust.address}
                            onChange={(e) => setCust({...Cust, address: e.target.value})}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="salary">Salary:</label>
                        <input
                            type="text"
                            name="salary"
                            placeholder="enter salary"
                            className="form-control rounded-0"
                            value={Cust.salary}
                            onChange={(e) => setCust({...Cust, salary: e.target.value})}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="category">Category:</label>
                        <select 
                            name='category' 
                            id='category' 
                            className='form-select form-control rounded-0' 
                            value={Cust.category}
                            onChange={(e) => setCust({...Cust, category :e.target.value})}>
                            {categ.map(e => {
                                return <option value={e.category}>{e.category}</option>
                            })}
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="designation">Designation:</label>
                        <select 
                            name='designation' 
                            id='designation' 
                            className='form-select form-control rounded-0' 
                            value={Cust.designation}
                            onChange={(e) => setCust({...Cust, designation:e.target.value})}>
                            {desig.map(e => {
                                return <option value={e.designation}>{e.designation}</option>
                            })}
                        </select>
                    </div>
                    <button className="btn rounded-0 w-100 mb-2 mt-3 text-center" type='submit'> EDIT</button>   
                </form>
            </div>
        </div>

        <div className='footer p-0 mt-3'>
          <p className='text-center'>EMS@serviceDesk.com</p>
          <p className='text-center'><i className="bi bi-telephone-fill"></i>180080008080</p>
          <p className='text-center'>
            <i className="bi bi-youtube mx-2"></i>
            <i className="bi bi-twitter mx-2"></i>
            <i className="bi bi-whatsapp mx-2"></i>
            <i className="bi bi-facebook mx-2"></i>
          </p>
        </div>

    </div>
    </>
  )
}

export default EditEmp