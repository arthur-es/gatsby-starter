import React from "react"
import { Link } from "gatsby"

import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"
import { MdMailOutline } from "react-icons/md"
import logoMribeiro from "../../images/mribeiro.svg"
import heartIcon from "../../images/heart.svg"

import {
  SiteFooter,
  FooterTop,
  WrapperTop,
  FooterBottom,
  WrapperBottom,
} from "./styles"

const Footer = () => (
  <SiteFooter>
    <FooterTop>
      <WrapperTop>
        <div>
          <Link to="/">
            {/* <img src={logoEmrichFooter} alt="Emrich" /> */}
          </Link>
        </div>

        <div className="contato">
          <a
            href="https://api.whatsapp.com/send?phone=5562999758245"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={20} />
            62 99975-8245
          </a>
          <a
            href="mailto:rosangela@sejaemrich.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdMailOutline size={20} />
            rosangela@sejaemrich.com.br
          </a>
        </div>

        <div className="siga">
          <p>Siga:</p>
          <a href="https://www.facebook.com/sejaemrich">
            <FaFacebook size={20} />
          </a>

          <a href="https://www.instagram.com/sejaemrich/">
            <FaInstagram size={21} />
          </a>
        </div>
      </WrapperTop>
    </FooterTop>
    <FooterBottom>
      <WrapperBottom>
        <p className="copyright-desktop">
          © Copyright 2020 - Emrich Desenvolvimento Humano | Todos os direitos
          reservados
        </p>
        <div className="copyright-mobile">
          <p>
            © Copyright 2020
            <br /> Emrich Desenvolvimento Humano <br />
            Todos os direitos reservados
          </p>
        </div>
        <a
          href="https://mribeiro.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Criado com{" "}
          <span>
            <img src={heartIcon} alt="coração" />
          </span>{" "}
          por
          <img src={logoMribeiro} alt="MRibeiro" />
        </a>
      </WrapperBottom>
    </FooterBottom>
  </SiteFooter>
)

export default Footer
