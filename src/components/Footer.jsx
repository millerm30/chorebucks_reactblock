import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const style = {
  footerContainer: `w-full h-14`,
  mainDivider: `text-center lg:text-left bg-gray-100 text-gray-600 h-14`,
  secondDivider: `flex justify-center items-center md:justify-between lg:justify-between p-6 border-t border-gray-300 h-14`,
  copyrightDivider: `mr-12 hidden md:block lg:block`,
  socialDivider: `flex justify-center`,
  socialIcon: `text-3xl mr-6 text-gray-600 hover:scale-150 transition duration-700`,
};

const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.mainDivider}>
        <div className={style.secondDivider}>
          <div className={style.copyrightDivider}>
            <span>&copy;2022, Designed By Michael Miller</span>
          </div>
          <div className={style.socialDivider}>
            <a href="http://www.facebook.com/millerm30" target="_blank" rel="noopener noreferrer"><FaFacebook className={style.socialIcon} /></a>
            <a href="http://www.twitter.com/millerm30" target="_blank" rel="noopener noreferrer"><FaTwitter className={style.socialIcon} /></a>
            <a href="http://www.instagram.com/millergm302022" target="_blank" rel="noopener noreferrer"><FaInstagram className={style.socialIcon} /></a>
            <a href="http://linkedin.com/in/michael-miller-0aa2bb229" target="_blank" rel="noopener noreferrer"><FaLinkedin className={style.socialIcon} /></a>
            <a href="http://www.github.com/millerm30" target="_blank" rel="noopener noreferrer"><FaGithub className={style.socialIcon} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer