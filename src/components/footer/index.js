import React from "react";
import { FooterStyled } from "./styles";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {

    return (
        <FooterStyled>
            <div className="title">
                My to-do List
            </div>
            <div className="social-medias">
                
                <a href="https://www.facebook.com/gabriel.viegasdasilva" target="_blank" rel="noreferrer">
                    <FaFacebook></FaFacebook>   
                </a>
                
                <a href="https://www.instagram.com/gabrielviegasdasilva/" target="_blank" rel="noreferrer">
                    <FaInstagram></FaInstagram>   
                </a>
                
                <a href="https://www.linkedin.com/in/gabriel-viegas-a2865117b/" target="_blank" rel="noreferrer">
                    <FaLinkedin></FaLinkedin>   
                </a>
                
                <a href="https://twitter.com/GabrielglViegas" target="_blank" rel="noreferrer">
                    <FaTwitter></FaTwitter>   
                </a>
                
                <a href="https://github.com/gabrielgl9" target="_blank" rel="noreferrer">
                    <FaGithub></FaGithub>   
                </a>
            </div>
        </FooterStyled>
    )
}

export default Footer;