import React from "react";
import { Card, Button, ButtonToolbar } from "react-bootstrap";
import AdditionModal from "./AdditionModal";

function AddittionRecipeCards(props) {
  console.log(props);
  const [modalShow, setModalShow] = React.useState(false);
  const divStyle = {
    margin: 0
  };

  /*var urlString = props.youtube;
    var youTubeLink = urlString.replace("watch", "embed");*/

  var urlString = props.youtube;
  var youtubeID = urlString.substr(32);
  var youTubeLink = "https://www.youtube.com/embed/" + youtubeID;

  return (
    <div style={divStyle}>
      <Card style={{ width: "18rem" }}>
        <iframe
          src={youTubeLink}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          title="video"
          height="288px"
          width="288px"
        />
        <Card.Body>
          <Card.Title>{props.itemname}</Card.Title>
          <Card.Text>Category:"TEST"</Card.Text>
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

              {
                <AdditionModal
                  recipename={props.itemname}
                  yout={props.youtube}
                  ind={props.ind}
                  dir={props.dir}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              }
            </ButtonToolbar>
          </div>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default AddittionRecipeCards;
