import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';
import "./Style.css";

function EmployeeDetail() {
    const [emp, setEmp] = useState([])
    const { id } = useParams();
    useEffect(() => {
        axios.get("http://localhost:1010/employeeDetail/" + id)
            // .then((result) => {
            //     console.log(result)
            //     setEmp(result.data[0])
            // })
        .then((result) => {
            if (result.data.Status) {
                setEmp(result.data.Result)
            } else {
                 alert(d.data.Error)
            }
            })
        .catch(err => console.log(err))
    })
    return(
       <>
       <div className="sidebar">
        <h3 className='text-white mt-3  ml-2 text-center mb-4 mt-1'>Employee Portal</h3>
        <a className="active" href=""><i className="bi bi-house mx-1"></i>MyDetails</a> 
        <a href="/courses"><i className="bi bi-bookmark-heart-fill mx-1"></i>Courses</a>
        <a href="/certificate"><i className="bi bi-patch-check mx-1"></i>Certification</a>
        {/* <a href="/document"><i className="bi bi-file-earmark-check mx-1"></i>Documentation</a> */}
        <a href="/help"><i className="bi bi-question-circle mx-1"></i>Need help</a>
        <a href="/privacyPolicy"><i className="bi bi-journal-medical mx-1"></i>Privacy Policy</a>
        <a href="/employeeLogin"><i className="bi bi-box-arrow-left mx-1"></i>Logout</a>
      </div>
        <div  className='mb-5' id="content1">
            <h2 className='text-center shadow py-3 bg-white'>EMPLOYEE MANAGEMENT SYSTEM</h2>
            
            <h3 className='text-center mt-5 mb-5 text-white'><u>MyDetails:</u></h3>
            <div className="container table-responsive d-flex  align-items-center mt-3" >
            <table className='table table-striped table-bordered mx-auto  w-50 mb-5' >
                <thead className='text-center'>
                    <tr className='p-4'>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                        <th>ADDRESS</th>
                        <th>SALARY</th>
                        <th>CATEGORY</th>
                        <th>DESIGNATION</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {emp.map(e => (
                        <tr className='p-4 text-center '>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.password}</td>
                            <td>{e.address}</td>
                            <td>{e.salary}</td>
                            <td>{e.category}</td>
                            <td>{e.designation}</td>
                            <td>
                            <button className='btn mx-2 text-white mb-2' id='addCategButton'>
                                <Link to={`/updatePassword/`+e.id} className='text-white' style={{textDecoration:'none'}}>Update Password</Link>
                            </button>
                            <button className='btn mx-2 text-white mb-2' id='addCategButton'>
                                <Link to={`/reportCard/`+e.id} className='text-white ' style={{textDecoration:'none'}}>Generate report</Link>
                            </button>
                            </td>
                        </tr>
                        
                    ))
                    }
                </tbody>
            </table>
            </div>
            <div className='text-center mt-5'>
                <button className='btn mb-5' id='empBtn'>
                    <a href='/employeeLogin' className='text-white'>Logout</a>
                </button>
            </div>
            
        </div>
        </>
    )
}

export default EmployeeDetail