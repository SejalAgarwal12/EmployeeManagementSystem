import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import './courses.css'

function Courses() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='conatiner'>
                <h2 className='text-center shadow py-3 bg-white courseBook'>MY COURSE BOOK</h2>
                <div className='text-center mt-5 mb-3' >
                    <Button className='btn courseBtn'>
                        Total Courses <Badge bg="danger">19</Badge>
                        <span className="visually-hidden">unread messages</span>
                    </Button>
                </div>
                <div className="text-center mb-2">
                    <Button className='btn-dark courseBtn' onClick={handleShow}>
                        List of courses Available
                    </Button>
                </div>
                <div className='container'>
                    <button className='btn btn-dark mx-5 mb-5 courseBtn'>
                        <a href='/employeeLogin'>LogOut</a>
                    </button>
                </div>

                <div className="container">
                    <div className="row mb-4">
                        <div className="col-sm-6 col-lg-4 col-md-4">
                            <div className="card">
                                <img src="../Images/SE.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Software Enginner</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className='text-center'>10 Modules : 50 lessons</p>
                                    <a href="#" className="btn  courseBtn">Start Learning</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-md-4">
                            <div className="card">
                                <img src="../Images/PL.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Programming Languages</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className='text-center'>11 Modules : 50 lessons</p>
                                    <a href="#" className="btn courseBtn">Start Learning</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-md-4">
                            <div className="card">
                                <img src="../Images/fullStack.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Full Stack</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className='text-center'>12 Modules : 50 lessons</p>
                                    <a href="#" className="btn courseBtn">Start Learning</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-sm-6 col-lg-4 col-md-4">
                            <div className="card">
                                <img src="../Images/MA.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Mobile App development</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className='text-center'>15Modules : 50 lessons</p>
                                    <a href="#" className="btn courseBtn">Start Learning</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-md-4">
                            <div className="card">
                                <img src="../Images/DS.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Data Science</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className='text-center'>10 Modules : 50 lessons</p>
                                    <a href="#" className="btn courseBtn">Start Learning</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-md-4">
                            <div className="card">
                                <img src="../Images/fullStack.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Automaion & Testing</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className='text-center'>10 Modules : 50 lessons</p>
                                    <a href="#" className="btn courseBtn">Start Learning</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <Offcanvas show={show} onHide={handleClose} >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title><h3 className='courseAvail'>Courses Available</h3></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="Offcanvas">
                            <ul>
                                <li>Software Engineering
                                    <ul>
                                        <li>DSA</li>
                                        <li>DBMS</li>
                                    </ul>
                                </li>
                                <li>Programming Languages
                                    <ul>
                                        <li>C</li>
                                        <li>C++</li>
                                        <li>Java</li>
                                        <li>Python</li>
                                    </ul>
                                </li>
                                <li>Frontend
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                    </ul>

                                </li>
                                <li>Backend
                                    <ul>
                                        <li>Node JS</li>
                                        <li>Spring Boot</li>
                                    </ul>
                                </li>
                                <li>Mobile App Development</li>
                                <li>Data Science</li>
                                <li>Artificial Intelligence</li>
                                <li>Automation</li>
                                <li>Testing</li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
            </div>
            </>
            )
}

            export default Courses