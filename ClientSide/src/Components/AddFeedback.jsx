import React, { useEffect, useState } from 'react'
import "./Style.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddFeedback() {
    const [emp, setEmp] = useState([{column1 : "no data", column2 : "no data"}]);
    const [Cust, setCust]  = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        fetchEmp();
    }, []);

    function fetchEmp(){
        // fetch("http://localhost:1010/displayEmployee")
        // .then((res) => res.json()) // will extract data in json format
        // .then((d) => {
        //     console.log(d)
        //     if(d){
        //         setEmp(d.result)
        //     }else{
        //         alert(d.data.Error)
        //     }
        // })
        axios.get("http://localhost:1010/displayEmployee")
        .then((result) => {
            console.log(result.data)
            if(result.data.Status){
                setEmp(result.data.Result)
            }else{
                alert(result.data.Error)
            }
        })
        .catch((err) => console.log("error occured", err))
    }

    function saveData(event){
        event.preventDefault();
        const data = new FormData(event.target);
        const sendData = {
            empId:data.get("eid"),
            empName:data.get("ename"),
            empEmail:data.get("eemail"),
            msg:data.get("msg"),
            rating:data.get("rating"),
            reviewerName:data.get("rname"),
            reviewerEmail:data.get("remail")
        }
        console.log(sendData);
        fetch("http://localhost:1010/addFeedback", {
          method: "post",
          body: JSON.stringify(sendData),
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json()) // will extract data in json format
        .then((d) => {
            console.log(d)
            if(d){
                navigate("/Home")
            }else{
                alert(d.data.Error)
            }
        })
        .catch((err) => console.log("error occured", err));
    }
  return (
    <>
    <div className=' feedbackForm'>
    <div className="form-box mt-5 mb-5"> 
        <a href='/Home' className='text-dark'><i class="bi bi-box-arrow-left mx-1 text-dark"></i>Go Back</a>
        <div className="textup mb-3"> 
            <i className="bi bi-clock-fill mx-1"></i> 
            It only takes two minutes!! 
        </div> 
        <form onSubmit={saveData}> 
             <label htmlFor="eid"> 
                <i className="bi bi-person-fill mx-1"></i> 
                Employee Id
            </label> 
            <select 
                name='eid' 
                id='eid' 
                required
                className='form-select form-control rounded-0' 
                >
                {emp.map(e => {
                     return <option value={e.id}>{e.id}</option>
                })}
            </select>

            <label htmlFor="ename"> 
                <i className="bi bi-person-fill mx-1"></i> 
                Employee Name 
            </label> 
            <select 
                name='ename' 
                id='ename' 
                required
                className='form-select form-control rounded-0' 
                >
                {emp.map(e => {
                     return <option value={e.name}>{e.name}</option>
                })}
            </select>
  
            <label htmlFor="eemail" className='mt-2'> 
                <i className="bi bi-envelope-fill mx-1"></i> 
                Employee Email
            </label> 
            <select 
                name='eemail' 
                id='eemail' 
                required
                className='form-select form-control rounded-0' 
                >
                {emp.map(e => {
                     return <option value={e.email}>{e.email}</option>
                })}
            </select>
  
            <label htmlFor="msg"> 
                <i className="bi bi-chat-left-dots-fill"></i> 
                Write your feedback: 
            </label> 
            <textarea id="msg" name="msg" rows="4" cols="10" required> </textarea> 

            <label htmlFor="rating"> 
                <i className="bi bi-stars"></i> 
                Rating 
            </label> 
            <select name="rating" id="rating" required >
                <option value="1">1-star</option>
                <option value="2">2-star</option>
                <option value="3">3-star</option>
                <option value="4">4-star</option>
                <option value="5">5-star</option>
            </select>

            <label htmlFor="rname"> 
                <i className="bi bi-person-fill mx-1"></i> 
                Reviewer Name 
            </label> 
            <input type="text" id="rname" name="rname" required /> 
  
            <label htmlFor="remail" className='mt-2'> 
                <i className="bi bi-envelope-fill mx-1"></i> 
                Reviewer Email
            </label> 
            <input type="email" id="remail"   name="remail" required /> 

            <button type="submit" className='mt-3'> Submit </button> 
        </form> 
    </div> 
</div>
    </>
    
  )
}

export default AddFeedback