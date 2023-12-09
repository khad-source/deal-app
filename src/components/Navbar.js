import React, { useState } from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
/* event.preventDefault() لتجنب اعادة تحميل المتصفح عند وجود فورم submit   عندنا فورم بحث ل  */

const NavBar = ( {searchFn}) => {
    const [ valInp ,setVal ] = useState ("")

    const onSearch = (event) =>{  
        event.preventDefault()
        searchFn(valInp)
        setVal('')
    }
    return (

        <Navbar expand="lg" className="bg-dark" variant='dark' >
            <Container  >
                <Navbar.Brand href="#">مطعم جديد</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="ابحث .."
                            onChange={(e)=>setVal(e.target.value)}
                            value={valInp}
                            className="me-2"

                           
                        />
                        <Button onClick={onSearch}  className="mx-2" variant="light">بحث</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar
