import React, { useEffect, useState } from 'react'
import { UserContext } from "../App";
import { useContext } from "react";
import "./Style.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const { user, setUser } = useContext(UserContext);
  //console.log(user.email)

  const [adminCount, SetAdminCount] = useState();
  const [salaryCount, SetSalaryCount] = useState();
  const [employeeCount, SetEmployeeCount] = useState();
  const [categCount, SetCategCount] = useState();
  const [desigCount, SetDesigCount] = useState();
  // const [admin, setAdmin] = useState([])

  useEffect(() => {
    adminCountFun();
    employeCountFun();
    categCountFun();
    desigCountFun();
    salaryCountFun();
    // adminRecordFun();
  }, []);

  function adminCountFun(){
    axios.get("http://localhost:1010/adminCount")
        .then((result) => {
            if(result.data.Status){
              SetAdminCount(result.data.Result[0].admin)
            }else{
              alert(result.data.Error)
            }
        })
        .catch((err) => console.log("error occured" , err))
  }

  function employeCountFun(){
    axios.get("http://localhost:1010/employeCount")
        .then((result) => {
            if(result.data.Status){
              SetEmployeeCount(result.data.Result[0].emp)
            }else{
              alert(result.data.Error)
            }
        })
        .catch((err) => console.log("error occured" , err))
  }

  function categCountFun(){
    axios.get("http://localhost:1010/categCount")
        .then((result) => {
            if(result.data.Status){
              SetCategCount(result.data.Result[0].categ)
            }else{
              alert(result.data.Error)
            }
        })
        .catch((err) => console.log("error occured" , err))
  }

  function desigCountFun(){
    axios.get("http://localhost:1010/desigCount")
        .then((result) => {
            if(result.data.Status){
              SetDesigCount(result.data.Result[0].desig)
            }else{
              alert(result.data.Error)
            }
        })
        .catch((err) => console.log("error occured" , err))
  }

  function salaryCountFun(){
    axios.get("http://localhost:1010/salaryCount")
      .then((result) => {
        if(result.data.Status){
           SetSalaryCount(result.data.Result[0].sal)
        }else{
           alert(result.data.Error)
        }
      })
      .catch((err) => console.log("error occured" , err))
  }

  //LIST OF ADMINS
  // function adminRecordFun(){
  //   axios.get("http://localhost:1010/adminRecord")
  //   .then((result) => {
  //     if(result.data.Status){
  //       setAdmin(result.data.Result)
  //     }else{
  //       alert(result.data.Error)
  //     }
  //   })
  //   .catch((err) => console.log("error occured" , err))

  // }
  
  return (
    <>
      <div className="sidebar">
        <h3 className='text-white mt-3  ml-2 text-center'>ADMIN</h3>
        <p className='text-center text-white mb-3'>{user.email}</p>
        <a className="active" href="/home"><i className="bi bi-house mx-1"></i>Dashboard</a>
        <a href="/AdminProfile"><i className="bi bi-person-circle mx-1"></i>Profile</a>
        <a href="/Employee"><i className="bi bi-people mx-1"></i>Employees</a>
        <a href="/Category"><i className="bi bi-tags mx-1"></i>Category</a>
        <a href="/Designation"><i className="bi bi-person-rolodex mx-1"></i>Designation</a>
        <a href="/"><i className="bi bi-box-arrow-left mx-1"></i>Logout</a>
      </div>


      <div className="content">
        <h2 className='py-3 text-center shadow'>EMPLOYEE MANAGEMENT SYSTEM</h2>

        <div id='homeCard0'className='mb-4 p-2'>
          <h3 className='text-center'>LEADER CHEERBOARD</h3>
          <h4 className='text-center mb-5'>Anytime Feedback, Anytime Review!</h4>
          <p className='px-5'>
          We all want to grow and learn in our personal and professional lives, and feedback can 
          help with that.We hope you find the feedback insightful and useful.<br/>
          We hope that feedbacks helps you achieve even greater heights and success in your professional journey!
           We look forward to seeing you ACE it in the future
          </p>
          <div className='text-center'>
            <a href="/addFeedback" type='button' className='btn text-center mb-2 w-25'>
              Add Feedback
            </a>
            <br />
            <a href="/displayFeedback" type='button' className='btn text-center mb-4 w-25'>
              View Cheerboard
            </a>
          </div>
          
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card shadow" id='homeCard1'>
              <div className="card-body">
                <div className='row'>
                  <div className='col'>
                    <h5 className="card-title">{adminCount}</h5>
                    <p className="card-text">ADMIN COUNT</p>
                  </div>
                  <div className='col'>
                    <div className='d-flex justify-content-center align-item-center'>
                      <i className="bi bi-person-check mt-5 display-1"></i>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow" id='homeCard2'>
              <div className="card-body">
              <div className='row'>
                  <div className='col'>
                    <h5 className="card-title">{categCount}</h5>
                    <p className="card-text">CATEGORY COUNT</p>
                  </div>
                  <div className='col'>
                    <div className='d-flex justify-content-center align-item-center'>
                      <i className="bi bi-tags mt-5 display-1"></i>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow" id='homeCard3'>
              <div className="card-body">
              <div className='row'>
                  <div className='col'>
                    <h5 className="card-title">{desigCount}</h5>
                    <p className="card-text">DESIGNATION COUNT</p>
                  </div>
                  <div className='col'>
                    <div className='d-flex justify-content-center align-item-center'>
                      <i className="bi bi-person-rolodex mt-5 display-1"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow" id='homeCard4'>
              <div className="card-body">
              <div className='row'>
                  <div className='col'>
                    <h5 className="card-title">{salaryCount}</h5>
                    <p className="card-text">SALARY COUNT</p>
                  </div>
                  <div className='col'>
                    <div className='d-flex justify-content-center align-item-center'>
                      <i className="bi bi-currency-rupee mt-5 display-1"></i>
                    </div>   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow" id='homeCard5'>
              <div className="card-body">
              <div className='row'>
                  <div className='col'>
                    <h5 className="card-title">{employeeCount}</h5>
                    <p className="card-text">EMPLOYEE COUNT</p>
                  </div>
                  <div className='col'>
                    <div className='d-flex justify-content-center align-item-center'>
                      <i className="bi bi-people mt-5 display-1"></i>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        

        <div className='footer p-0 mt-5'>
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

export default Home