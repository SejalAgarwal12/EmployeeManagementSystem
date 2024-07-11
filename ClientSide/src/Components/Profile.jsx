import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Profile() {
  const [adminList, setAdminList] = useState([]);

  useEffect(() => {
    adminRecordFun();
  }, []);

  function adminRecordFun() {
    axios
      .get("http://localhost:1010/adminRecord")
      .then((result) => {
        if (result.data.Status) {
          setAdminList(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log("error occured", err));
  }
  //DELETE
  function handleDeleteAmin(id){
    axios.delete("http://localhost:1010/deleteAdmin/"+id)
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
  return (
    <>
      <div className="sidebar">
        <h3 className="text-white mt-3 mb-5 ml-2 text-center">ADMIN</h3>
        <a className="active" href="/home">
          <i className="bi bi-house mx-1"></i>Dashboard
        </a>
        <a href="/AdminProfile">
          <i className="bi bi-person-circle mx-1"></i>Profile
        </a>
        <a href="/Employee">
          <i className="bi bi-people mx-1"></i>Employees
        </a>
        <a href="/Category">
          <i className="bi bi-tags mx-1"></i>Category
        </a>
        <a href="/Designation">
          <i className="bi bi-person-rolodex mx-1"></i>Designation
        </a>
        <a href="/">
          <i className="bi bi-box-arrow-left mx-1"></i>Logout
        </a>
      </div>

      <div className="content">
        <h2 className="text-center shadow py-3">EMPLOYEE MANAGEMENT SYSTEM</h2>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div className="container p-3 rounded border w-75  categForm">

            <div className="mt-3">
              <h2 className="text-center mb-2">LIST OF ADMINS</h2>
              <a href='/addAdmin' className='btn btn-primary text-center mb-3' id="addCategButton">Add New Admin  </a>

              <table className="table table-responsive table-striped table-bordered mx-auto w-75">
                <thead className="text-center">
                  <tr>
                    <th>ID</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {adminList.map((a) => (
                    <tr>
                      <td>{a.id}</td>
                      <td>{a.email}</td>
                      <td>{a.password}</td>
                      <td>
                        {/* <Link
                          to={`/editAdmin/` + a.id}
                          className="btn mx-1 text-white"
                          id="editBtn"
                        >
                          <i className="bi bi-pencil-square mx-1"></i>
                        </Link> */}
                        <button
                          className="btn mb-1 text-white"
                          id="deleteBtn"
                          onClick={() => handleDeleteAmin(a.id)}
                        >
                          <i className="bi bi-trash mx-1"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="footer p-0 mt-3">
          <p className="text-center">EMS@serviceDesk.com</p>
          <p className="text-center">
            <i className="bi bi-telephone-fill"></i>180080008080
          </p>
          <p className="text-center">
            <i className="bi bi-youtube mx-2"></i>
            <i className="bi bi-twitter mx-2"></i>
            <i className="bi bi-whatsapp mx-2"></i>
            <i className="bi bi-facebook mx-2"></i>
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
