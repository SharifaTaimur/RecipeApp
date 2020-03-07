import React from "react";
import { Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  var counter = 1;
  console.log("below");
  console.log(props.details);

  var ingredient;
  var urlString = props.details.strYoutube;
  var youtubeID = urlString.substr(32);
  var youTubeLink = "https://www.youtube.com/embed/" + youtubeID;

  const ingredients = [];
  // Get all ingredients from the object. Up to 20
  for (let i = 1; i <= 20; i++) {
    if (props.details[`strIngredient${i}`]) {
      ingredients.push(
        `${props.details[`strIngredient${i}`]} - ${
          props.details[`strMeasure${i}`]
        }`
      );
    } else {
      // Stop if there are no more ingredients
      break;
    }
  }

  var indList = ingredients.map((value, index) => {
    return <li key={index}>{value}</li>;
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="recipe-detail">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <h1> {props.details.strMeal}</h1>
              </div>
              <div className="col-lg-8">
                <iframe
                  src={youTubeLink}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                  style={{ width: "480px", height: "315px" }}
                />
                <div className="info">
                  <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      <p>Serves:</p>
                      <p>
                        <strong>
                          <i className="fa fa-users" aria-hidden="true"></i> 6{" "}
                        </strong>
                      </p>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <p>Prep Time:</p>
                      <p>
                        <strong>
                          <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                          30 min
                        </strong>
                      </p>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <p>Cooking:</p>
                      <p>
                        <strong>
                          <i className="fa fa-clock-o" aria-hidden="true"></i>30
                          mins
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ingredient-direction">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <h3>Ingredients</h3>
                      <ol>{indList}</ol>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <h3>Directions</h3>
                      <ol className="directions">
                        {props.details.strInstructions}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;

/* funtion indgridenList(props){
    return(
      <li> props.details.strIngredient1 + props.details.strMeasure1</li>
    )
}*/
