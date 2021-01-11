import React from 'react';
import { Col, Row, Form, InputGroup } from 'react-bootstrap';

const Header = () => {
    return (
        <Row style={{ padding: "10px", borderBottom: "1px solid #ccc", boxShadow: "5px 5px 5px #888888", margin: 0 }} >
            <Col sm={4}>logo</Col>
            <Col sm={7}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Search here.."
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
            </Col>
        </Row>
    );
};

export default Header;
