import React from 'react';
import { Container } from 'mdbreact';

class AboutPage extends React.Component {
    render() {
        return (
            <Container id="about" style={{ maxWidth: '80%' }}>
                <h2 className="h1-responsive font-weight-bold my-5 text-center">Sobre o projeto</h2>
                <p className="dark-grey-text mx-auto mb-5 w-75 text-center"><strong className="font-weigth-bold">cryptocoin</strong> é uma SPA criada com intuito de estudos da biblioteca ReactJS, onde exibe os últimos valores de algumas moedas virtuais como bitCoin, LiteCoin, etc.</p>
            </Container>
        );
    }
};

export default AboutPage;