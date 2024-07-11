import React, { useEffect, useState } from 'react'
import "./Style.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'

function Employee() {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1010/displayEmployee")
        .then((result) => {
            if(result.data.Status){
                setEmployee(result.data.Result)
            }else{
                alert(d.data.Error)
                 }
        })
        .catch((err) => console.log("error occured" , err))
    },[])

    //DELETE
    function handleDelete(id){
        axios.delete("http://localhost:1010/deleteEmp/"+id)
        .then((result) => {
            if(result.data.Status){
               // navigate('/Employee')
               // it will automatically reload page after deletio
               window.location.reload();
            }else{
                alert(result.data.Error)
            }
        })
        .catch((err) => console.log("error occured" , err))
    }
    
    function sortEmpName(){
        axios.get("http://localhost:1010/sortEmpName")
        .then((result) => {
            if(result.data.Status){
                setEmployee(result.data.Result)
            }else{
                alert(d.data.Error)
            }
        })
        .catch((err) => console.log("error occured" , err))
    }

    function sortEmpSalary(){
        axios.get("http://localhost:1010/sortEmpSalary")
        .then((result) => {
            if(result.data.Status){
                setEmployee(result.data.Result)
            }else{
                alert(d.data.Error)
            }
        })
        .catch((err) => console.log("error occured" , err))
    }

    function Refresh(){
        window.location.reload();
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

        <div className="card border-dark mb-3 mt-5" id="categCard" >
            <div className="card-header text-center" ><h2>Manage Employes</h2></div>
            <div className="card-body text-dark">
                <h2 className="card-title text-center">
                  <a href='/addCustomer' className='btn btn-primary text-center mb-0 mx-1' id="addCategButton">Add Employee</a>
                  <a href='' onClick={Refresh} className='btn btn-primary text-center mb-0' id="addCategButton"><i className="bi bi-arrow-clockwise"></i></a>
                  <Dropdown>
                    <Dropdown.Toggle className='btn' id="addCategButton">Sort By</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="" onClick={sortEmpName}>Name</Dropdown.Item>
                        <Dropdown.Item href="" onClick={sortEmpSalary}>Salary</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </h2>
                
                <div className="table-responsive ">
                <table className='table table-striped table-bordered mx-auto w-50'>
                    <thead className='text-center'>
                        {/* PASSWORD OF EMPLOYEE IS NOT VISIBLE TO ADMIN */}
                        <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        {/* <th>PASSWORD</th> */}
                        <th>ADDRESS</th>
                        <th>SALARY</th>
                        <th>CATEGORY</th>
                        <th>DESIGNATION</th>
                        <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.map(e =>(
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                {/* <td>{e.password}</td> */}
                                <td>{e.address}</td>
                                <td>{e.salary}</td>
                                <td>{e.category}</td>
                                <td>{e.designation}</td>
                                <td>
                                    <Link to={`/editEmp/` + e.id} className='btn mb-1 text-white' id='editBtn'>
                                        <i className="bi bi-pencil-square mx-1"></i>
                                    </Link>
                                    <button className='btn mb-1 text-white' id='deleteBtn' onClick={() => handleDelete(e.id)}>
                                        <i className="bi bi-trash mx-1"></i>
                                    </button>
                                </td>
                            </tr>
                        ))

                        }
                    </tbody>
                 
                </table>
                </div>
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

export default Employee