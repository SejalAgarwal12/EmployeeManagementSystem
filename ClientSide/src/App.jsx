import Login from './Components/Login'
import React from 'react'
import './App.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, createContext } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Components/Home'
import Category from './Components/Category';
import AddCategory from './Components/AddCategory';
import Designation from './Components/Designation';
import AddDesignation from './Components/AddDesignation';
import Employee from './Components/Employee';
import AddEmployee from './Components/AddEmployee';
import AddCustomer from './Components/AddCustomer';
import EditEmp from './Components/EditEmp';
import EmployeeLogin from './Components/EmployeeLogin';
import EmployeeDetail from './Components/EmployeeDetail';
import UpdatePassword from './Components/updatePassword';
import Profile from './Components/Profile';
import AddAdmin from './Components/AddAdmin';
import AddFeedback from './Components/AddFeedback';
import GetFeedback from './Components/GetFeedback';
import ReportCard from './Components/ReportCard';
import Courses from './Components/Courses';
import Help from './Components/Help';
import Certification from './Components/Certification';
import PrivacyPolicy from './Components/PrivacyPolicy';


export const UserContext = createContext(null) ; // GLOBAL VARIABLE

function App() {
  const [user, setUser] = useState(false); // global var: USSER IS NOT LOGEED IN NOW
  return (
    <>
       <BrowserRouter>
        <UserContext.Provider value = {{user:user, setUser:setUser}}>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/employeeLogin' element={<EmployeeLogin/>} />
            <Route path='/employeeDetail/:id' element={<EmployeeDetail/>} />
            <Route path='/updatePassword/:id' element={<UpdatePassword/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/addFeedback' element={<AddFeedback/>} />
            <Route path='/displayFeedback' element={<GetFeedback/>} />
            <Route path='/reportCard/:id' element={<ReportCard/>} />
            <Route path='/AdminProfile' element={<Profile/>} />
            <Route path='/addAdmin' element={<AddAdmin/>} />
            <Route path='/Category' element={<Category/>} />
            <Route path='/addCategory' element={<AddCategory/>} />
            <Route path='/Designation' element={<Designation/>} />
            <Route path='/addDesignation' element={<AddDesignation/>} />
            <Route path='/Employee' element={<Employee/>} />
            <Route path='/addEmployee' element={<AddEmployee/>} />
            <Route path='/addCustomer' element={<AddCustomer/>} />
            <Route path='/editEmp/:id' element={<EditEmp/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/certificate' element={<Certification/>} />
            <Route path='/help' element={<Help/>} />
            <Route path='/privacyPolicy' element={<PrivacyPolicy/>} />

            <Route path = "*" element={
              <h1>Sorry this page doenot exist</h1>
            }></Route> 
        </Routes>
        </UserContext.Provider> 
      </BrowserRouter>
      </>
  )
}

export default App
