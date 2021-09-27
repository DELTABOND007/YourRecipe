//https://your-recipe-6e93d.web.app/  
import emailjs from "emailjs-com";
import React from 'react';
import Footer from "../Footer";
import "./ContactUs.css";
import Swal from 'sweetalert2';
window.Swal = Swal;


export default function ContactUs() {
    const validation=()=>{
        Swal.fire(
            'Good job!',
            'E-mail Sended,We will Contact You Soon',
            'success'
          )
        
    }

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_zybovqn', 'template_prei3wd', e.target, 'user_zThVsvsexz8YK6VUUSMLS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(<>
        <div className="contact-us">
            <h1 className="heading"> ContactUs</h1>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message" onClick={validation}></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}