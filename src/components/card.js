import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const CardM = ({ itemData }) => {
    return (
        <Row >


            {itemData.length >= 1 ? (
                itemData.map((i) => {
                    return (
                        <Col key={i.id} sm='12' className='mb-3' >
                            <Card className='d-flex flex-row' >
                                <img className='image' src='img.jpg'></img>
                                <Card.Body >
                                    <div className='d-flex justify-content-between  ' >
                                        <Card.Title> {i.title} </Card.Title>
                                        {/*inlineCSS  */}
                                        <p style={{ color: '#ac350e' }}> {i.price}    </p>
                                    </div>
                                    <Card.Text>
                                       {i.desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
                )) :<h2 >  لا يوجد اصناف  </ h2> }


        </Row>

    )
}

export default CardM
