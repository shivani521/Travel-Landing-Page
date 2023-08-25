import React, {useEffect} from "react";
import "./main.css";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {HiOutlineClipboardCheck} from "react-icons/hi";

import img from "../../Assets/img.jpg";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css';
const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle : "Bora Bora",
        location: "New Zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for it's luxurious stays and adventurous activities."
    },
    {
        id:2,
        imgSrc: img1,
        destTitle : "Machu Picchu",
        location: "Peru",
        grade: "CULTURAL RELAX",
        fees: "$600",
        description: "Explore the ancient Incan city nestled high in the Andes Mountains, offering breathtaking panoramic views of intricate stone architecture and mist-covered landscapes."
    },
    {
        id:3,
        imgSrc: img2,
        destTitle : "Great Barrier Reef",
        location: "Australia",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description: "Dive into the world's largest coral reef system, where vibrant marine life and mesmerizing coral formations create an underwater paradise teeming with color and wonder."
    },
    {
        id:4,
        imgSrc: img3,
        destTitle : "Cappadocia",
        location: "Turkey",
        grade: "CULTURAL RELAX",
        fees: "$800",
        description: "Uncover the enchanting Turkish region famous for its surreal landscapes of 'fairy chimneys' and cave dwellings, offering a unique hot air balloon perspective at sunrise."
    },
    {
        id:5,
        imgSrc: img4,
        destTitle : "Guanajuata",
        location: "Mexico",
        grade: "CULTURAL RELAX",
        fees: "$1100",
        description: "Wander through the vibrant streets of this Mexican town, known for its colorful buildings, subterranean roads, and rich cultural heritage that beckons to be explored."
    },
    {
        id:6,
        imgSrc: img5,
        destTitle : "Cinque Terre",
        location: "Italy",
        grade: "CULTURAL RELAX",
        fees: "$840",
        description: "Traverse the picturesque Italian coastal villages perched along the Ligurian Sea, each characterized by its own charm, pastel-colored houses, and breathtaking cliffside views."
    },
    {
        id:7,
        imgSrc: img6,
        destTitle : "Angkor Wat",
        location: "Cambodia",
        grade: "CULTURAL RELAX",
        fees: "$790",
        description: "Step into the awe-inspiring world of the largest religious monument, Cambodia's Angkor Wat, with its intricate temples and ancient ruins, reflecting a rich Khmer history."
    },
    {
        id:8,
        imgSrc: img7,
        destTitle : "Taj Mahal",
        location: "India",
        grade: "CULTURAL RELAX",
        fees: "$900",
        description: "Behold the iconic ivory-white marble mausoleum in Agra, India, a symbol of eternal love and architectural brilliance, set against the backdrop of beautifully landscaped gardens."
    },
    {
        id:9,
        imgSrc: img8,
        destTitle : "Bali Island",
        location: "Indonesia",
        grade: "CULTURAL RELAX",
        fees: "$500",
        description: "Immerse yourself in the Indonesian paradise of Bali, known for its lush rice terraces, serene beaches, vibrant cultural traditions, and spiritual experiences that soothe the soul."
    }
]
const Main = () => {
    //react hook to add scroll animation
    useEffect(() => {
        Aos.init({duration: 2000})
    }, {})
    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most Visited Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle,
                    location, grade, fees, description})=>{
                        return(
                            <div key={id} 
                            data-aos="fade-up"
                            className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                       <HiOutlineLocationMarker className="icon"/> 
                                    <span className="name">{location}</span>  
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span></div>
                                            <div className="price">
                                                <h5>{fees}</h5></div>   
                                        
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS<HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main