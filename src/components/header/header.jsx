import React from 'react';
import Scrollchor from 'react-scrollchor';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavbarToggler, Collapse, Container, Fa } from 'mdbreact';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        }
        this.onClick = this.onClick.bind(this);
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    handleNavbarClick() {
        this.setState({
            collapse: false
        });
    }
    render() {
        const overlay = <div id="sidenav-overlay" style={{ backgroundColor: 'transparent' }} onClick={this.handleNavbarClick} />
        return (
            <div>
                <Navbar dark expand="md" fixed="top" scrolling>
                    <Container>
                        <NavbarBrand>
                            <strong className="white-text">cryptocoin</strong>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.onClick} />
                        <Collapse isOpen={this.state.collapse} navbar>
                            <NavbarNav left>
                                <NavItem active>
                                    <Scrollchor to="home" animate={{ offset: 10, duration: 600 }} className="nav-link">Início</Scrollchor>
                                </NavItem>
                                <NavItem>
                                    <Scrollchor to="#about" animate={{ offset: 10, duration: 600 }} className="nav-link">Sobre</Scrollchor>
                                </NavItem>
                                <NavItem>
                                    <Scrollchor to="#references" animate={{ offset: 10, duration: 600 }} className="nav-link">O que são?</Scrollchor>
                                </NavItem>
                                <NavItem>
                                    <Scrollchor to="#tecnology" animate={{ offset: 10, duration: 600 }} className="nav-link">Tecnologias</Scrollchor>
                                </NavItem>
                            </NavbarNav>
                            <NavbarNav right >
                                <NavItem>
                                    <a className="nav-link" href="https://github.com/raphaelruedo/cryptocoin">
                                        <Fa icon="github"></Fa>
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" href="https://www.linkedin.com/in/raphael-ruedo-141406140/">
                                        <Fa icon="linkedin"></Fa>
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" href="https://raphaelruedo.github.io/site/">
                                        <Fa icon="code"></Fa>
                                    </a>
                                </NavItem>
                            </NavbarNav>
                        </Collapse>
                    </Container>
                </Navbar>
                {this.state.collapse && overlay}
            </div>
        );
    }
};

export default Header;