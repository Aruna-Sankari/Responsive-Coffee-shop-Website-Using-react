import React from 'react';
import './Home.css'
import { GiHamburgerMenu } from "react-icons/gi"
import { BiSearch } from "react-icons/bi";
const Home = () => {

    return (
        <div>
            <div className="header">
                <nav>
                    <div className="left">
                        <a href="#">GrandCoffee</a>
                    </div>
                    <div className="right">
                        <label for="toggle" id="check"><GiHamburgerMenu className="bars" /></label>
                        <input type="checkbox" name="toggle" id="toggle"></input>
                        <ul className="list">
                            <li><a href="#" class="active">Home</a></li>
                            <li><a href="#aboutus">About Us</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><BiSearch className="listbutton" /></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="main-header">
                <div className="content">
                    <span>Outstanding</span>
                    <h1>Coffee Shop</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                    </p>

                    <button className="btn">LEARN MORE</button>
                </div>


            </div>





        </div >
    )
}
export default Home;