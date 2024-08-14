import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import translationIcon from "../assets/translation.svg"
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg"

function SiteNav() {
    const { t, i18n } = useTranslation();

    let handleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')
        localStorage.setItem('language', i18n.language)
    }

    let themeData = useContext(ThemeContext)

    console.log(themeData)

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav className={i18n.language === 'en' ? 'me-auto' : 'ms-auto'}> */}
                    <Nav className='mx-auto'>
                        <NavLink className="nav-link" to="/">{t('home')}</NavLink>
                        <NavLink className="nav-link" to="/products">{t('products')}</NavLink>

                    </Nav>
                    <img
                        src={translationIcon}
                        width={40}
                        style={{ cursor: 'pointer' }}
                        alt="Translation icon"
                        onClick={handleLanguage}
                    />
                    {
                        themeData.theme === 'light'
                            ?
                            <img className='mx-3' src={moon} alt="Moon" width={20} onClick={themeData.handleTheme}/>
                            :
                            <img className='mx-3' src={sun} alt="Sun" width={20} onClick={themeData.handleTheme}/>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNav;