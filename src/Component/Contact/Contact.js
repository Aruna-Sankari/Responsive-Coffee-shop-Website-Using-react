import React from 'react'
import './Contact.css'
import { Component } from 'react'
class Contact extends Component{
    render() {
        return (
            <div>
                <div className="contactus" id="contactus">
                    <h2>Contact Us</h2>
                    <div className="contact-row">
                        <div className="contact-form">
                            <form action="" class="form">
                                <input type="text" placeholder="Name" required></input>
                                <input type="email" placeholder="Email" required></input>
                                <input type="text" placeholder="Phone Number" required></input>
                                <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
                            </form>

                            <div className="contact-button">
                                <button className="contact-btn">SEND</button>
                            </div>
                        </div>
                        <div className="location">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248842.96083588907!2d80.06608437549717!3d12.960890504130514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dfa2ed55f3b%3A0x5178b7858fba797f!2sStarbucks!5e0!3m2!1sen!2sin!4v1698142411573!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
export default Contact;
