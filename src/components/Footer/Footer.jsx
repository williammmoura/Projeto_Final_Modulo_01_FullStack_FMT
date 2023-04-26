import React from "react";
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"
import "./Footer.css"

export const Footer = () => {
    return(
        <footer>
            <h2>LABPharmacy Inc.</h2>
            <p>
                Redes Sociais:
            </p>
            <div>
                <FaFacebook/><FaInstagram/><FaLinkedin/>
            </div>
            <p>
                &copy;2023 LABPharmacy Inc. Todos os direitos reservados.
            </p>
        </footer>
    )
}