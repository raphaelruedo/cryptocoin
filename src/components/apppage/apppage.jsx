import React from 'react';
import { Mask, Row, View, Container } from 'mdbreact';
import CardBTC from '../cards/card_btc';
import CardBCH from '../cards/card_bch';
import CardLTC from '../cards/card_ltc';
import AboutPage from '../about/about';
import ReferencesPage from '../references/references';
import TecnologyPage from '../tecnology/tecnology';

class AppPage extends React.Component {
    render() {
        return (
            <div id="apppage">
                <View>
                    <Mask className="d-flex justify-content-center align-items-center gradient">
                        <Container id="home">
                            <Row className="text-center">
                                <CardBTC />
                                <CardBCH />
                                <CardLTC />
                            </Row>
                        </Container>
                    </Mask>
                </View>
                <AboutPage />
                <ReferencesPage />
                <TecnologyPage />

            </div>
        );
    }
};

export default AppPage;