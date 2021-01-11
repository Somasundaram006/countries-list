import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';

const CardComponent = (props) => {
  const { flag, countryName, capital, population } = props;
  return (
    <>
      <CardDeck style={{ margin: " 10px " }}>
        <Card>
          <Card.Body style={{ backgroundColor: "#eee" }}>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 0.2 }}>
                <img src={flag} width="100px" height="100px" alt="country - flag" />
              </div>
              <div style={{ flex: 0.8 }}>
                <div>Name:{countryName}</div>
                <div>capital:{capital}</div>
                <div>Population: <h3>{population}</h3></div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </CardDeck>
    </>
  );
};

export default CardComponent;
