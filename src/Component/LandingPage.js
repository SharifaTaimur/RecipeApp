import React from "react";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Row, Col } from "react-bootstrap";

export const history = createBrowserHistory();

function LandingPage() {
  return (
    <div className="container">
      <div className="Top">
        <img src="/Images/FlowersTop.png" alt="" />
      </div>
      {/*} <Row>
        <Col xs={6} md={6}>
          <img
            className="test2 responsiveUp"
            alt=""
            src={process.env.PUBLIC_URL + "/Images/Board.png"}
          />
        </Col>
        <Col xs={6} md={6}>
          <img
            className="test3 responsiveUp"
            alt=""
            src={process.env.PUBLIC_URL + "/Images/Mint.png"}
          />
        </Col>
           </Row>*/}
      <Row>
        <h1 className="centeringText">
          Let's start cooking <br /> good meals!
        </h1>

        <div className="row centeringB1" style={{ bottom: "84px" }}>
          <div className="svg-wrapper" style={{ zIndex: "1" }}>
            <Link to="/Selection">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="320" />
              </svg>
              <div className="text">START</div>
            </Link>
          </div>
        </div>
      </Row>

      {/*<Row>
        <Col xs={6} md={6}>
          <img
            className="test Coffeecup"
            alt=""
            src={process.env.PUBLIC_URL + "/Images/Coffee.png"}
          />
        </Col>
        <Col xs={6} md={6}>
          <img
            className="test1 responsiveDown"
            alt=""
            src={process.env.PUBLIC_URL + "/Images/CookingUtensil.png"}
          />
        </Col>
      </Row> 
        <div className="Bottom" style={{ top: "28px" }}>*/}
      <div className="Bottom">
        <img src="/Images/FlowersBottom.png" alt="" />
      </div>
    </div>
  );
}

export default LandingPage;
