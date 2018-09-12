import React from 'react';
import { Row, Col } from 'mdbreact';


class CardBTC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, data } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="white-text text-center text-md-left col-md-4 mt-xl-5 mb-5">
                    <h2 className="h2-responsive font-weigth-bold">BitCoin</h2>
                    <h3 className="h2-responsive font-weight-bold mt-sm-5">
                        {new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(data.ticker.last)}
                    </h3>
                    <hr className="hr-light" />
                    <Row className="text-center">
                        <Col md="4">
                            <p>Maior</p>
                            <p>{new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(data.ticker.high)}</p>
                        </Col>
                        <Col md="4">
                            <p>Menor</p>
                            <p>{new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(data.ticker.low)}</p>
                        </Col>
                        <Col md="4">
                            <p>Negociadas</p>
                            <p>{new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(data.ticker.vol)}</p>
                        </Col>
                    </Row>
                </div>
            );
        }
    }
};

export default CardBTC;