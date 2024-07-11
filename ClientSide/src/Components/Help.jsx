import React from 'react'
import './courses.css'

function Help() {
  return (
    <>
    <h3 className='text-center shadow py-3 bg-white courseBook'>Need Help?</h3>
    <div className="helpBg mb-5">
    <p className='text-center'>Drop an email to us and get your query resolved</p>
    <p className='text-center'><a href='/employeeLogin' className='px-3'>Logout</a></p>
    <div className="container mt-2 w-60 mx-auto border border-dark helpForm">
    <form className=' mt-5 px-5 py-2'>
    <div className="row mb-4">
      <div className="col-md-4 ">
        <label for="fname">Name</label>
      </div>
      <div className="col-md-8">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </div>
    </div>
    <div className="row mb-4">
      <div className="col-md-4">
        <label for="lname">Email</label>
      </div>
      <div className="col-md-8">
        <input type="email" id="lname" name="lastname" placeholder="Your last name.."/>
      </div>
    </div>
    
    <div className="row mb-4">
      <div className="col-md-4">
        <label for="subject">Subject</label>
      </div>
      <div className="col-md-8">
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
      </div>
    </div>
    <div className="row mx-auto w-50">
     <button type="submit" className='p-2 mb-5'>Submit</button>
    </div>
  </form>
    </div>
    </div>
    </>
  )
}

export default Help