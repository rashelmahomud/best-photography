import React from 'react';
import img from '../../images/doctor1.jpg'
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <h1>About Us</h1>
           <div className='informations my-5'> 
           <div><img src={img} alt="" /></div>
            <div>
                <h1>Rashel Mahomud</h1>
                <h2>-DREAM FROM <br />
                    WEB DEVELOPMENT-</h2>
                    <p>Hello My Name is Rashel Mahomud. I have good dream for programing related work do. I can my life setup with web Development and computer sience related work todo its my big dreams. My favorite work programing and learn its best work i mena. I can my life a future all time this work with in my everythings. Web Devlopment is a very currntly suitable and jentel persona and dedicated person and heard work todo person work.</p>
            </div>
           </div>
        </div>
    );
};

export default About;