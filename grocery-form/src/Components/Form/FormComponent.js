import React, { useState } from "react";
import './form.css';
import logo from '../../Assets/Images/logo.jpg';
import apple from '../../Assets/Images/apple.jpg';
import banana from '../../Assets/Images/banana.jpg';
import apricot from '../../Assets/Images/apricot.jpg';
import avocado from '../../Assets/Images/avocado.jpg';
import cherry from '../../Assets/Images/cherry.jpeg';
import cucumber from '../../Assets/Images/cucumber.jpg';
import lettuce from '../../Assets/Images/lettuce.jpg';
import greenApple from '../../Assets/Images/green-apple.jpeg';
import sweetPotato from '../../Assets/Images/sweet-potato.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormComponent = () => {
    const [total, setTotal] = useState(0.00)
    const products = [
        {
            image: apple,
            name: "Red Apple",
            description: 'Fruits makes you beautiful',
            price: 10,
            label: "kg",
        },
        {
            image: greenApple,
            name: "Green Apple",
            description: 'Fruits makes you beautiful',
            price: 10,
            label: "kg",
        },
        {
            image: banana,
            name: "Banana",
            description: 'Your protein supplement; banana',
            price: 5,
            label: "kg",
        },
        {
            image: apricot,
            name: "Apricot",
            description: 'Have fruits your tummy loves it',
            price: 12,
            label: "kg",
        },
        {
            image: cherry,
            name: "Cherry",
            description: 'Fruit for every mood',
            price: 20,
            label: "kg",
        },
        {
            image: avocado,
            name: "Avocado",
            description: '100% original',
            price: 10,
            label: "per number",
        },
        {
            image: cucumber,
            name: "Cucumber",
            description: 'Eat fresh, stay healthy',
            price: 12,
            label: "kg",
        },
        {
            image: lettuce,
            name: "Lettuce",
            description: 'Fruits makes you beautiful',
            price: 5,
            label: "per number",
        },
        {
            image: sweetPotato,
            name: "Sweet Potato",
            description: 'Never say no to vegetables',
            price: 2,
            label: "per number",
        }

    ]
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
                            <Form.Control type="search" placeholder="Search" />
                        </Form.Group>
                    </Form>
                    <ul className="product-list">
                        {products && Array.isArray(products) &&
                            products.map((product, index) => {
                                return (
                                    <li key={index} className="product">
                                        <span className="checkbox">
                                            <input aria-label="Checkbox for following text input" type="checkbox" class="form-check-input" />
                                        </span>
                                        <div className="product-image">
                                            <div className="product-image-area">
                                                <img src={product.image} alt="product" />
                                            </div>
                                        </div>
                                        <div className="product-container">
                                            <span>
                                                <div className="product-title">
                                                    <span className="product-name">{product.name}</span>
                                                    <span className="product-description">{product.description}</span>
                                                </div>
                                                <div className="product-pricing">
                                                    <b>${product.price}.00</b>
                                                </div>
                                            </span>
                                            <div className="product-quantity">
                                                <label className="quantity-label">{product.label}</label>
                                                <select name="count" id="count">
                                                    <option value="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        <div className="item-total"><b>Total &nbsp; &nbsp; &nbsp;  ${total}.00</b></div>
                    </ul>
                    <Form className="form-section-main">
                        <Form.Group className="mb-3 d-flex flex-column align-items-start">
                            <Form.Label>Customer Name</Form.Label>
                            <div className="d-flex">
                                <div className="first-name me-3 d-flex flex-column align-items-start">
                                    <Form.Control />
                                    <Form.Text className="text-muted"> First Name</Form.Text>
                                </div>
                                <div className="first-name d-flex flex-column align-items-start">
                                    <Form.Control />
                                    <Form.Text className="text-muted"> Last Name</Form.Text>
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex flex-column align-items-start">
                            <Form.Label>Phone Number</Form.Label>
                            <div className="d-flex">
                                <div>
                                    <Form.Control name="phone" placeholder="(000) 000-0000" />
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                example@example.com
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex flex-column align-items-start">
                            <Form.Label>Delivery Address</Form.Label>
                            <div className=" d-flex flex-column align-items-start" >
                                <Form.Control />
                                <Form.Text className="text-muted"> Street Address</Form.Text>
                            </div>
                            <div className=" d-flex flex-column align-items-start">
                                <Form.Control />
                                <Form.Text className="text-muted">Street Address Line 2</Form.Text>
                            </div>

                        </Form.Group>
                        <Form.Group className="mb-3 d-flex flex-column align-items-start">
                            <div className="d-flex">
                                <div className="first-name me-3 d-flex flex-column align-items-start">
                                    <Form.Control />
                                    <Form.Text className="text-muted">City</Form.Text>
                                </div>
                                <div className="first-name d-flex flex-column align-items-start">
                                    <Form.Control />
                                    <Form.Text className="text-muted"> State / Province</Form.Text>
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicEmail">
                            <Form.Control type="email" />
                            <Form.Text className="text-muted">
                                Postal / Zip Code
                            </Form.Text>
                        </Form.Group>
                        <div className="d-flex align-items-center order-button ">
                            <Button className="" variant="primary" type="submit">Order</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FormComponent;