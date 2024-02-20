import React from 'react';
import { Component } from 'react';
import './Service.css'
import ico1 from '../../Images/icon1.png'
import ico2 from '../../Images/icon2.png'
import ico3 from '../../Images/icon3.png'
class Service extends Component {
    render() {
        let service = [{ icon: ico1, title: "Original Coffee", cont: "Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea" },
        { icon: ico2, title: "20 Original Flavors", cont: "Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea" },
        { icon: ico3, title: "Pleasant Abient", cont: "Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea" }
        ]
        return (
            <div>
                <div className="services" id="services">
                    <div className="main-services">
                        <div className="services-row">
                            <div className="services-topic">
                                <h2>Services</h2>
                                <p>
                                Typesetting industry lorem Ipsum is simply dummy text of the
                                </p>
                            </div>
                            <div className="services-related">
                                {
                                    service.map((value, i) => {
                                        return (
                                            <div className="services-col" key={i}>
                                                <img src={value.icon} alt="" />
                                                <h4>{value.title}</h4>
                                                <p>{value.cont}</p>
                                                <a href="#" className="servbtn">READ MORE</a>
                                            </div>

                                        )

                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div >

        )

    }
}
export default Service;