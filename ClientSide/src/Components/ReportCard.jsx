import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';
import "./Style.css";

function ReportCard() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get("http://localhost:1010/reportCard/" + id)
        .then((result) => {
            if (result.data.Status) {
                setData(result.data.Result)
            } else {
                 alert(d.data.Error)
            }
            })
        .catch(err => console.log(err))
    })
  return (
    <>
    <div  className='mb-5' id="content1">
        <h2 className='text-center shadow py-3 bg-white'>EMPLOYEE MANAGEMENT SYSTEM</h2>
        <h3 className='text-center mt-2 mb-5 text-white mt-5'><u>Report Card</u></h3>
        <table className='table table-striped table-bordered mx-auto w-75 mb-5'>
            <thead className='text-center p-5'>
                <tr className='p-4'>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Employee Email</th>
                    <th>Comments</th>
                    <th>Rating</th>
                    <th>Reviewer Name</th>
                    <th>Reviewer Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {data.map(e => (
                <tr className='p-5'>
                    <td>{e.empId}</td>
                    <td>{e.empName}</td>
                    <td>{e.empEmail}</td>
                    <td>{e.msg}</td>
                    <td>{e.rating}</td>
                    <td>{e.reviewerName}</td>
                    <td>{e.reviewerEmail}</td>
                    <td>
                    <button className='btn mx-2 text-white mb-2' id='addCategButton'>
                        <Link to={`/employeeDetail/`+e.empId} className='text-white' style={{textDecoration:'none'}}>Go Back</Link>
                    </button>
                    </td>
                </tr>
                ))
            }        
            </tbody>  

        </table>
        <div className='text-center mt-5'>
            <button className='btn mb-5' id='empBtn'>
                <a href='/employeeLogin' className='text-white'>Logout</a>
            </button>
        </div>
       
    </div>
    </>
  )
}

export default ReportCard