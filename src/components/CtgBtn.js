import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const CtgBtn = ({ filterFn, uniCat }) => {


/*  to filter by cat
 */    const onFilter = (cat) => {
        filterFn(cat)
    }
    return (
        <Row className='my-4' >
            <Col sm='12'className=' d-flex justify-content-center' >
                {uniCat.length >=1 ? (uniCat.map((cat , index) => {
                    return ( 
                        <div key={index} className='   mb-5' >
                            <Button onClick={() => onFilter(cat)} variant="outline-danger mx-2">{cat}</Button>
                        </div>)
                })
                )
                    : null}


            </Col>
        </Row>
    )
}

export default CtgBtn
