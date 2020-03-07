import React from "react";
import { Card, Button, Modal, ButtonToolbar } from "react-bootstrap";
import MyVerticallyCenteredModal from "./Modal";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function RecipeCards(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const divStyle = {
    margin: 0
  };

  return (
    <div key={props.itm.idMeal} style={divStyle}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.itm.strMealThumb} />
        <Card.Body>
          <Card.Title>{props.itm.strMeal}</Card.Title>
          <Card.Text>Category:{props.itm.strCategory}</Card.Text>
          <div className="col text-center ">
            {/* <Link to="/RecipeModal" className="btn btn-outline-secondary btn-lg"  onClick={() => setModalShow(true)}>
                   <i className="fas fa-utensils"/> Recipe
              </Link>*/}

            <ButtonToolbar>
              <Button
                variant="btn btn-outline-secondary btn-lg"
                onClick={() => setModalShow(true)}
              >
                <i className="fas fa-utensils" /> Recipe
              </Button>

              <MyVerticallyCenteredModal
                details={props.itm}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </ButtonToolbar>
          </div>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default RecipeCards;
