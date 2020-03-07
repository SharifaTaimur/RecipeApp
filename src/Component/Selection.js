import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

class Selection extends React.Component {
  render() {
    return (
      <div className="container h-100">
        {/* <h1 style={{textAlign:"center"}}>Please make a Selection...</h1>*/}
        <div className="Top">
          <img src="/Images/FlowersTop.png" alt="" />
        </div>
        <h1 className="centering">Please make a Selection...</h1>

        <div className="row ">
          <div className="svg-wrapper" style={{ zIndex: "1", top: "-13px" }}>
            <Link to="/SearchRecipes">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="320" />
              </svg>
              <div className="text">SEARCH RECIPES</div>
            </Link>
          </div>
        </div>
        {/*}  <Col xs={6} md={6}>
          <img
            className="test3 responsiveUp gif"
            alt=""
            src={process.env.PUBLIC_URL + "/Images/Chef1.gif"}
          />
        </Col>  */}
        <Col xs={6} md={6}>
          <img
            className="test3 responsiveUp gifGirl"
            alt=""
            src={process.env.PUBLIC_URL + "/Images/Thinking.gif"}
          />
        </Col>

        {/*<div className="eltdf-st-loader">
          <div className="eltdf-st-loader1">
            <div className="eltdf-frappe-loader">
              <div className="eltdf-loader-inner"></div>
            </div>{" "}
          </div>
        </div>*/}

        <div className="row ">
          <div className="svg-wrapper" style={{ zIndex: "1" }}>
            <Link to="/AddRecipes">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="320" />
              </svg>
              <div className="text">ADD RECIPES</div>
            </Link>
          </div>
        </div>

        <div className="Bottom ">
          <img src="/Images/FlowersBottom.png" alt="" />
        </div>
        <Link
          to="/"
          className="btn btn-secondary btn-circle btn-circleFixed btn-xl"
        >
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
    );
  }
}

export default Selection;
