import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setButtonText("Sending...");
    //     let response = await fetch("http://localhost:5000/contact", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json;charset=utf-8",
    //         },
    //         body: JSON.stringify(formDetails),
    //     });
    //     setButtonText("Seg...");
    //     setButtonText("Send");
    //     let result = await response.json();
    //     setFormDetails(formInitialDetails);
    //     if (result.code === 200) {
    //         setStatus({ success: true, message: 'Message sent successfully' });
    //     } else {
    //         setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    //     }
    // };

    const Result = () => {
        return (
            <p> Your message has been sent successfully.
            </p>
        )
    }
        const [result, showResult] = useState(false)

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.
                sendForm('service_hm20y8f', 'template_i3rherk', e.target, 'R3Dv_E-UHynhKoEvq')
                .then(
                    (result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });
            e.target.reset();
            setButtonText("Send");
            setFormDetails(formInitialDetails);
            showResult(true);
        }

        return (
            <section className="contact" id="connect">
                <Container>
                    <Row className="align-items-center">
                        <Col size={12} md={6}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                                }
                            </TrackVisibility>
                        </Col>
                        <Col size={12} md={6}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <h2>Get In Touch</h2>
                                        <form onSubmit={sendEmail}>
                                            <Row>
                                                <Col size={12} sm={6} className="px-1">
                                                    <input type="text" name="name" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                                                </Col>
                                                <Col size={12} sm={6} className="px-1">
                                                    <input type="text" value={formDetails.lastName} placeholder="Last Name (not required)" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                                </Col>
                                                <Col size={12} sm={6} className="px-1">
                                                    <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                                                </Col>
                                                <Col size={12} sm={6} className="px-1">
                                                    <input type="tel" value={formDetails.phone} placeholder="Phone No. (not required)" name="phone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                                </Col>
                                                <Col size={12} className="px-1">
                                                    <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                                                    {/* <button type="submit"><span>{buttonText}</span></button> */}
                                                </Col>
                                                <button type="submit"><span>{buttonText}</span></button>
                                                <div className="px-1">{result ? <Result /> : null}</div>
                                                {/* {
                                                status.message &&
                                                <Col>
                                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                                </Col>
                                            } */}
                                            </Row>
                                        </form>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
