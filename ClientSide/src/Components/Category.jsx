import React, { useEffect, useState } from 'react'
import "./Style.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Category() {
  const [data, setData] = useState([{column1 : "no data", column2 : "no data"}])
  useEffect(() => {
    fetch("http://localhost:1010/displayCategory")
    .then((res) => res.json()) // will extract data in json format
    .then((d) => {
      console.log(d)
      if(d){
          setData(d)
      }else{
          alert(d.data.Error)
      }
  })
    .catch((err) => console.log("error occured", err))
  },[])

  function sortCateg(){
    fetch("http://localhost:1010/sortCategory")
    .then((res) => res.json()) // will extract data in json format
    .then((d) => {
      // console.log(d)
      if(d){
        setData(d)
      }else{
        alert(d.data.Error)
      }
    })
    .catch((err) => console.log("error occured", err))
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
            <div className="card-header text-center" ><h2>Category List</h2></div>
            <div className="card-body text-dark">
                <h2 className="card-title text-center">
                  <a href='/addCategory' className='btn btn-primary text-center mb-3' id="addCategButton">Add Category  </a>
                  <button onClick={sortCateg} className='btn btn-primary text-center mb-3 mx-1' id="addCategButton">Sort By Name <i className="bi bi-caret-down"></i> </button>
                  <a href='' onClick={Refresh} className='btn btn-primary text-center mb-3' id="addCategButton"><i className="bi bi-arrow-clockwise"></i></a>

                </h2>
                
                <div className="table-responsive ">
                <table className='table table-striped table-bordered mx-auto w-50'>
                  <thead className='thead-dark text-center'>
                    <tr>
                      {Object.keys(data[0]).map(col => 
                          <th key={Math.random()}> {col} </th>)
                      }
                    </tr>
                  </thead>
                  <tbody>
                     {data.map(obj => {
                        return <tr key={Math.random()}>{
                            Object.values(obj).map(value => {
                                return <td key = {Math.random()}> {value} </td>
                            })
                        }</tr>
                    })}
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

export default Category