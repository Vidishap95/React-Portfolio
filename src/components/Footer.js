import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.css";

//array of social media objects with name, url,icon and color
const social = [
    {
        name: "Github",
        url: "https://github.com/Vidishap95",
        icon: faGithub,
        color: "",
    },
    {
        name: "LinkedIn",
        url: "",
        icon: faLinkedin,
        color: "",
    },
];

// footer components
const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <div className="footer-container">
                <section className="socail-icons-wrapper d-flex flex-md-row justify-content-center">
                    {socials.map(({ name, url, icon, color }) => (
                        <div 
                        key={name}
                        className="d-flex-column align-items-center mx-md-2 transparent-bg">
                            <a
                            href={url}
                            className={`icon ${name}`}
                            target="_blank"
                            rel="noreferrer">
                                <FontAwesomeIcon
                                icon={icon}
                                bounce
                                className="footer-icon-size"
                                style={{ color:color }} />

                            </a>
                            <a href={url} target="_blank" rel="noreferrer">
                                <span className="d-inline-block mx-1 name">{name}</span>
                            </a>
                        </div>
                    ))}
                </section>
            </div>
        </footer>
    )
}

export default Footer;