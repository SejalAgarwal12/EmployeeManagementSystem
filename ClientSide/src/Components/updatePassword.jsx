import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./Style.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';

function updatePassword() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [Cust, setCust] =useState({
        password:''
    })

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

    const [categ,setCateg] = useState([]);
    useEffect(() => {
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
    
    function saveData(e){
        e.preventDefault();
        axios.put("http://localhost:1010/editEmployee/" +id, Cust)
        .then((result) => {
            console.log(result.data)
            if(result.data.Status){
                navigate('/employeeDetail/'+id)
            }else{
                alert(result.data.Error)
            }
        })
        .catch((err) => console.log("error occured", err))
    }

  return (
    <>
    <div  className='mb-5' id="content1">
        <h2 className='text-center shadow py-3 bg-white'>EMPLOYEE MANAGEMENT SYSTEM</h2>
        <div className="d-flex justify-content-center align-items-center mt-5"> 
            <div className="container p-3 rounded border w-50 mb-4  categForm">
                <h2 className="text-center mb-4">Update Password</h2>
                <form onSubmit={saveData}> 
                    <div className="mb-2">
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
                            readOnly
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
                            readOnly
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="text"
                            name="password"
                            placeholder="enter password"
                            className="form-control rounded-0"
                            value={Cust.password}
                            onChange={(e) => setCust({...Cust, password: e.target.value})}
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
                            readOnly
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
                            readOnly
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="category">Category:</label>
                        <select 
                            disabled
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
                            disabled
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
                    <button className="btn rounded-0 w-100 mb-2 mt-3 text-center" type='submit'> UPDATE </button>   
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default updatePassword