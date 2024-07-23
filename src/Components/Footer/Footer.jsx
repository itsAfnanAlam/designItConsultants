import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer_container'>
        <div className="logo">
            <img src="/img/logo.png" alt="" />
            <span>DesignIt Consultants © 2024</span>
        </div>
        <div className="socials">
            <ul>
                <li><Link to="/">Insta</Link></li>
                <li><Link to="/">Insta</Link></li>
                <li><Link to="/">Insta</Link></li>
            </ul>
        </div>
        <div className="address">
            <h4><i>Our Office </i></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, recusandae!</p>
        </div>
        <div className="address">
            <h4><i>Contact info </i></h4>
            <p>Lorem ipsum dolor sit</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, recusandae!</p>
        </div>
    </div>
  )
}

export default Footer