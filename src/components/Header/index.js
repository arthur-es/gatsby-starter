import React, { useState } from "react"
import { Link } from "gatsby"

import { FaWhatsapp } from "react-icons/fa"
import { MdMenu, MdClose } from "react-icons/md"

import logoEmpresa from "../../images/mribeiro.svg"

import { SiteHeader, Container, Left, Right } from "./styles"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <SiteHeader>
      <Container>
        <Left>
          <Link to="/">
            <img src={logoEmpresa} alt="Logo da empresa X" />
          </Link>
          <ul>
            <li>
              <Link to="/a-empresa">O link um</Link>
            </li>
          </ul>
        </Left>
        <Right>
          <a
            href="https://api.whatsapp.com/send?phone=5562999758245"
            target="_blank"
            rel="noopener noreferrer"
            id="fale-conosco-desktop"
          >
            Fale conosco <FaWhatsapp size={22} />
          </a>

          <button
            className="menu-mobile-button"
            onClick={() => setMenuOpen(true)}
          >
            <MdMenu size={30} />
          </button>
          <div
            class="menu-mobile"
            style={{
              display: menuOpen ? "flex" : "none",
              opacity: menuOpen ? "1" : "0",
            }}
          >
            <button type="button" onClick={() => setMenuOpen(false)}>
              <MdClose size={30} />
            </button>
            <ul>
              <li>
                {/* <img src={} alt="Logo da Empresa" /> */}
                Logo
              </li>
              <li>
                <Link to="/a-empresa">A empresa</Link>
              </li>
              <li>
                <Link to="/quem-sou-eu">Quem sou eu</Link>
              </li>
              <li>
                <Link to="/areas-de-atuacao">Áreas de atuação</Link>
              </li>
              <li>
                <a href="https://blog.sejaemrich.com.br/">Blog</a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5562999758245"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale conosco <FaWhatsapp size={28} />
                </a>
              </li>
            </ul>
          </div>
        </Right>
      </Container>
    </SiteHeader>
  )
}

export default Header
