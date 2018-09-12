import React from 'react';
import { Container, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="mdb-color" className="font-small lighten-2 pt-0">
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Developed by <a href="https://raphaelruedo.github.io/site"> Raphael Ruedo </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;