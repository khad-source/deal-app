import React from 'react'
import { Col, Row } from 'react-bootstrap'



const Header = () => {
  return (
    <Row   >
        <Col sm="12" className='justify-content-center text-center' >
             < div className='fontMenu p-2'> قائمة الطعام</div>
               <div className='justify-content-center d-flex'>
             <p className="underline ">  </p> 
               </div>
        </Col>
       
    </Row>
  )
}

export default Header
