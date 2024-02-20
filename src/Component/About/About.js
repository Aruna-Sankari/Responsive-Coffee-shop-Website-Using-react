import React from 'react';
import { Component } from 'react';
import about from '../../Images/about-img.png'
import './About.css'
class About extends Component {
    render() {
        return (
            <div>
                <section className="aboutus" id="aboutus">
                    <div className="main-row">
                        <div className="col-1">
                            <h2>About Us</h2>
                            <p>
                            Full cleaning and housekeeping services for companies and households..
                            </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply.
                            </p>

                            <button className="btn">Read More</button>
                        </div>

                        <div className="col-1">
                            <img src={about} alt="" />
                        </div>
                    </div>
                </section>

            </div>
        )

    }

}
export default About