import React, { Component } from 'react';
import { Container, Row, Col, Fa } from 'mdbreact';

class ReferencesPage extends Component {
    render() {
        return (
            <Container id="references">
                <section className="my-5">
                    <h4 className="h1-responsive font-weight-bold text-center my-5">O que são?</h4>
                    <Row className="d-flex justify-content-center">
                        <Col lg="6">
                            <Row className="mb-3">
                                <Col size="1">
                                    <Fa icon="bitcoin" size="lg" className="primary-text" />
                                </Col>
                                <Col xl="10" md="11" size="10">
                                    <h5 className="font-weight-bold mb-3"><a href="https://bitcoin.org/pt_BR/faq">BitCoin</a></h5>
                                    <p className="grey-text">Bitcoin é uma rede que funciona de forma consensual onde foi possível criar uma nova forma de pagamento e também uma nova moeda completamente digital.</p>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col size="1">
                                    <Fa icon="bitcoin" size="lg" className="primary-text" />
                                </Col>
                                <Col xl="10" md="11" size="10">
                                    <h5 className="font-weight-bold mb-3"><a href="https://litecoin.org/pt/">LiteCoin</a></h5>
                                    <p className="grey-text">Litecoin é uma moeda ponto-a-ponto baseada na Internet que permite pagamentos instantâneos com um custo próximo à zero para qualquer indivíduo no mundo.</p>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col size="1">
                                    <Fa icon="bitcoin" size="lg" className="primary-text" />
                                </Col>
                                <Col xl="10" md="11" size="10">
                                    <h5 className="font-weight-bold mb-3"><a href="https://www.bitcoincash.org/">BCash</a></h5>
                                    <p className="grey-text">BCash ou BitCoin Cash é uma moeda, definida como "dinheiro eletrônico ponto a ponto".  </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    };
}

export default ReferencesPage;