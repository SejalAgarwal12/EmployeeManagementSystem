import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './courses.css'

function Certification() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
   <>
   <h3 className='text-center shadow py-3 bg-white'>My Acheivements</h3>
   <div className='text-center mt-5 mb-3 mx-auto'>
        <Button  onClick={handleShow} className='btn courseBtn'>
            My certificates
        </Button>
   </div>
   

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modalTitle'>Certificates</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>OOPsss!! you don't have any certifcates yet</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} className='btn courseBtn'>
            Close
          </Button>
          <Button  className='btn courseBtn'>
            <a href='/courses'>Start Today</a>
            
          </Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default Certification