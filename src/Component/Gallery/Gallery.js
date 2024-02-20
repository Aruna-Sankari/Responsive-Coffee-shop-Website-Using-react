import React from 'react'
import './Gallery.css'
import { BiSearch } from "react-icons/bi";
import gal1 from '../../Images/img-1.png'
import gal2 from '../../Images/img-2.png'
import gal3 from '../../Images/img-3.png'
import gal4 from '../../Images/img-4.png'
import gal5 from '../../Images/img-5.png'
import gal6 from '../../Images/img-6.png'
import gal7 from '../../Images/img-7.png'
import gal8 from '../../Images/img-8.png'
import gal9 from '../../Images/img-9.png'

const Gallery = () => {
    return (
        // <div>
        <section className="gallery" id="gallery">
            <div className="gallery-topic">
                <h2>Our Gallery</h2>
                <p>Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, when an unknown printer took a galley of type and scra make a type specimen book. It has</p>
            </div>
            <div className="gallery-image">
                <div className="col-2">
                    <img src={gal1} alt="" />
                    <div className="overlay">
                        <BiSearch  className="overlay-btn"/>
                    </div>
                </div>
                <div className="col-2">
                    <img src={gal2} alt="" />
                    <div className="overlay">
                        <BiSearch  className="overlay-btn"/>
                    </div>
                </div>
                <div className="col-2">
                    <img src={gal3} alt="" />
                    <div className="overlay">
                        <BiSearch className="overlay-btn" />
                    </div>
                </div>
                <div className="col-2">
                    <img src={gal4} alt="" />
                    <div className="overlay">
                        <BiSearch className="overlay-btn" />
                    </div>
                </div>
                <div className="col-2">
                    <img src={gal5} alt="" />
                    <div className="overlay">
                        <BiSearch className="overlay-btn" />
                    </div>
                </div>
                <div className="col-2">
                    <img src={gal6} alt="" />
                    <div className="overlay">
                        <BiSearch className="overlay-btn" />
                    </div>
                </div>
                <div className="col-2">
                    <img src={gal7} alt="" />
                    <div className="overlay">
                        <BiSearch className="overlay-btn" />
                    </div>
                </div>
                <div className="col-2">
                    <img src={gal8} alt="" />
                    <div className="overlay">
                        <BiSearch  className="overlay-btn"/>
                    </div>
                </div>
                <div className="col-2">
                    <img src={gal9} alt="" />
                    <div className="overlay">
                        <BiSearch className="overlay-btn" />
                    </div>
                </div>
            </div>

          <button className="gal">See More</button>
        </section>
        // </div>
    )
}
export default Gallery;