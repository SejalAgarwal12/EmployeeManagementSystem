import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function GetFeedback() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:1010/getFeedback")
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
    <div className=' feedbackForm'>
        <div className='text-center' >
            <a href="/Home" type='button' className='btn text-center text-white mt-5 mb-2 w-25'> <i class="bi bi-box-arrow-left mx-1 text-white"></i></a>
        </div>
        <h3 className='text-center mt-2 mb-5 text-white shadow '><u>Cheerboard:</u></h3>
        <table className='table table-striped table-bordered mx-auto w-75 '>
            <thead className='text-center'>
                <tr className='p-4'>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Employee Email</th>
                    <th>Comments</th>
                    <th>Rating</th>
                    <th>Reviewer Name</th>
                    <th>Reviewer Email</th>
                </tr>
            </thead>
            <tbody>
            {data.map(e => (
                <tr className='p-4'>
                    <td>{e.empId}</td>
                    <td>{e.empName}</td>
                    <td>{e.empEmail}</td>
                    <td>{e.msg}</td>
                    <td>{e.rating}</td>
                    <td>{e.reviewerName}</td>
                    <td>{e.reviewerEmail}</td>
                </tr>
                ))
            }        
            </tbody>  

        </table>
       
    </div>
    </>
  )
}

export default GetFeedback