import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    name: "Github",
    link: "https://github.com/ToniGrbic",
    icon: <AiFillGithub size={30} />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/toni-grbi%C4%87-6aa509249/",
    icon: <AiFillLinkedin size={30} />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/toni.grbic/",
    icon: <AiOutlineInstagram size={30} />,
  },
];

const SocialLinks = ({ showIconText = false }: { showIconText?: boolean }) => {
  return (
    <>
      {socialLinks.map((socialLink) => {
        return (
          <div key={socialLink.name}>
            <a
              aria-label={socialLink.name}
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-link-container">
                {socialLink.icon}
                {showIconText ? (
                  <p className="social-link-text">{socialLink.name}</p>
                ) : (
                  ""
                )}
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
};

export default SocialLinks;
