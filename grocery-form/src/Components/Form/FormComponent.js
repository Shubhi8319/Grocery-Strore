import React from "react";
import './form.css';
import logo from '../../Assets/Images/logo.jpg';
import apple from '../../Assets/Images/apple.jpg';
import Form from 'react-bootstrap/Form';

const FormComponent = () => {
    return (
        <React.Fragment>
            <div className="grocery-form">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="form-section">
                    <h1>Grocery Order Form</h1>
                    <Form className="">
                        <Form.Group className="mb-3 d-flex align-items-start flex-column search-section" controlId="formBasicEmail">
                            <Form.Label>My Products</Form.Label>
                            <Form.Control type="search" placeholder="Search"/>
                        </Form.Group>
                    </Form>
                    <ul className="product-list">
                        <li className="product">
                        <span className="checkbox">
                        <input aria-label="Checkbox for following text input" type="checkbox" class="form-check-input"/>    
                        </span>    
                        <div className="product-image">
                            <div className="product-image-area">
                                <img src={apple} alt="apple"/>
                            </div>
                        </div>
                        <div className="product-container">
                            <span>
                                <div className="product-title">
                                    <span className="product-name">Apple</span>
                                    <span className="product-description">Fruits makes you beautiful</span>
                                </div>
                                <div className="product-pricing">
                                    <b>$10.00</b>
                                </div>
                            </span>
                            <div className="product-quantity">
                                <span>
                                    <label className="quantity-label">kg</label>
                                    
                                </span>
                            </div>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FormComponent;