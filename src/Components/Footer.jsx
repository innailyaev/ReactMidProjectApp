import React from 'react';
import '../CSS/FooterStyle.css';

const Footer =()=>{
    let date= new Date();


    return (
        <div className="footer">
            <p>© {date.getFullYear()} Inna Ilyaev</p>
        </div>
    )
}

export default Footer;