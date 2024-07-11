import "./Style.css";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

function EmployeeLogin() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [msg, updateM] = useState("");
    const [values, setValues] = useState({
        id:'',
        email:'',
        password:''
    });

    function handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        const sendData = {
          id: data.get("id"),  
          email: data.get("email"),
          password: data.get("password"),
        };
        console.log(sendData);

        fetch("http://localhost:1010/checkEmpLogin", {
          method: "post",
          body: JSON.stringify(sendData),
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json()) // will extract data in json format
        .then((d) => {
          console.log(d);
          if (d) {
            const result = {
              id: d.id,
              email: d.email,
              passwrod: d.password,
            };
            setUser(result); // USER IS LOGGEDIN SUCCESSFULLY AND setUser() is updated
            navigate("/employeeDetail/" +result.id);
          } 
          else {
            updateM("incorrect id or password");
          }
        })
        .catch((err) => console.log("error occured", err));
    }
  return (
    <>
    <div className="EmpLoginPage">
    <h1 className="text-white text-center">EMPLOYEE MANAGEMENT SYSTEM</h1>
      <div className="d-flex justify-content-center align-items-center vh-100"> 
        <div className="container p-3 rounded border w-25 loginForm">
          <h2 className="text-center mb-4">Employee Login Form</h2>
          <p className="text-danger text-center">{msg}</p>
          <form onSubmit={handleSubmit}>
          <div className="mb-2">
              <label htmlFor="id">Employe Id:</label>
              <input
                type="number"
                name="id"
                placeholder="enter employee id"
                className="form-control rounded-0"
                onChange={(e) => setValues({...values, id : e.target.value})}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="enter email"
                className="form-control rounded-0"
                onChange={(e) => setValues({...values, email : e.target.value})}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="enter password"
                className="form-control rounded-0"
                onChange={(e) => setValues({...values, password : e.target.value})}
              />
            </div>

            <button className="btn rounded-0 w-100 mb-2 mt-3 loginBtn" type='submit'>
              LogIn as Employee
            </button>

            <div>
            <button className="btn rounded-0 w-50 mb-2 mt-1 loginBtn " type='reset'>
              Reset
            </button>
            <button 
              className="btn rounded-0 w-50 mb-2 mt-1 loginBtn " 
              type='submit'
              onClick={() => {navigate('/')}}
            >
              I am Admin
            </button>
            </div>
            
            <div className="mb-2">
                <input type="checkbox" name="tick" id="tick" className="me-2 " />
                <label htmlFor="password">I agree with terms & conditions.</label>
            </div>
          </form>
        </div>
      </div>
      
      </div>
    </>
  )
}

export default EmployeeLogin