import React from 'react';
import { Mask, Row, View, Container } from 'mdbreact';
class AppPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice/BRL.json")
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
        <div id="apppage">
          <View>
            <Mask className="d-flex justify-content-center align-items-center gradient">
              <Container>
                <Row>
                  <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">{data.bpi.BRL.rate} - <span>{data.bpi.BRL.description}</span></h1>
                    <h6>$ {data.bpi.USD.rate} - <span>{data.bpi.USD.description}</span></h6> 
                    <hr className="hr-light" />
                    <h6 className="mb-6"> {data.disclaimer}</h6>
                  </div>
                </Row>
              </Container>
            </Mask>
          </View>
        </div>
      );
    }
  }
};

export default AppPage;