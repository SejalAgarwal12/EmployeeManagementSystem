import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Style.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function AddAdmin() {
    const navigate = useNavigate();
    const [admin, setAdmin]  = useState();
    function saveData(event){
        event.preventDefault();
        const data = new FormData(event.target);
        const sendData = {
          id: data.get("id"),
          email : data.get("email"),
          password : data.get("password"),
        };
        console.log(sendData);
        fetch("http://localhost:1010/AddAdmin", {
          method: "post",
          body: JSON.stringify(sendData),
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json()) // will extract data in json format
        .then((d) => {
            console.log(d)
            if(d){
                navigate("/AdminProfile")
            }else{
                alert(d.data.Error)
            }
        })
        .catch((err) => console.log("error occured", err));

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
                <h2 className="text-center mb-4">Add New Admin</h2>
                <form onSubmit={saveData}> 
                    <div className="mb-2">
                        <label htmlFor="id">Admin Id:</label>
                        <input
                            type="text"
                            name="id"
                            placeholder="enter id"
                            className="form-control rounded-0"
                        />
                    </div>
                    
                    <div className="mb-2">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="enter email"
                            className="form-control rounded-0"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="enter password"
                            className="form-control rounded-0"
                        />
                    </div>
                    
                    <button className="btn rounded-0 w-100 mb-2 mt-3 text-center" type='submit'> Add</button>
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

export default AddAdmin