import React, { Component } from 'react';
import { Container, Row, Col, Fa } from 'mdbreact';

class TecnologyPage extends Component {
    render() {
        return (
            <Container id="tecnology">
                <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">Tecnologias usadas</h2>
                    <Row>
                        <Col md="4">
                            <Fa icon="television" size="3x" className="cyan-text" />
                            <h5 className="font-weight-bold my-4">ReactJS</h5>
                            <p className="grey-text mb-md-0 mb-5">
                                O React é uma biblioteca para criar interfaces
                            </p>
                        </Col>
                        <Col md="4">
                            <Fa icon="cubes" size="3x" className="cyan-text" />
                            <h5 className="font-weight-bold my-4">MDBReact</h5>
                            <p className="grey-text mb-md-0 mb-5">
                                Framework de interfaces baseado no Bootstrap 4 e Material Design
                            </p>
                        </Col>
                        <Col md="4">
                            <Fa icon="database" size="3x" className="cyan-text" />
                            <h5 className="font-weight-bold my-4">Mercado BitCoin API</h5>
                            <p className="grey-text mb-md-0 mb-5">
                                API pública que fornece os dados dos valores de moedas virtuais
                            </p>
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    };
}

export default TecnologyPage;