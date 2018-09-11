import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container } from 'mdbreact';

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
            <Router>
                <div>
                    <Navbar dark expand="md" fixed="top" scrolling>
                        <Container>
                            <NavbarBrand>
                                <strong className="white-text">CryptoCoin</strong>
                            </NavbarBrand>
                            <NavbarToggler onClick={this.onClick} />
                            <Collapse isOpen={this.state.collapse} navbar>
                                <NavbarNav right>
                                    <NavItem active>
                                        <NavLink to="#!">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="#!">Sobre</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="#!">GitHub</NavLink>
                                    </NavItem>
                                </NavbarNav>
                            </Collapse>
                        </Container>
                    </Navbar>
                    {this.state.collapse && overlay}
                </div>
            </Router>
        );
    }
};

export default Header;