import React from "react";
import {
  Button,
  ButtonToolbar,
  Modal,
  FormGroup,
  Form,
  FormControl,
  Col,
  Row
} from "react-bootstrap";
import { Link } from "react-router-dom";
import AddittionRecipeCards from "./AdditionCard";

class AddRecipes extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      showAdd: false,
      showEdit: false,
      setModalShow: false,
      currentIndex: 0,

      newestRecipe: {
        recipeName: "",
        youtubeURL: "",
        indgridents: [],
        directions: []
      }
    };

    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.open = this.open.bind(this);
    this.updateNewRecipe = this.updateNewRecipe.bind(this);
    this.UpdateModal = this.UpdateModal.bind(this);
    this.updateDirections = this.updateDirections.bind(this);
  }

  //Deletes a recipe
  deleteRecipe(index) {
    let recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes });
  }

  //Update Recipe
  updateNewRecipe(recipeName, indgridents, directions, youtubeURL) {
    console.log(recipeName);
    console.log(indgridents);
    console.log(directions);
    console.log(youtubeURL);
    this.setState({
      newestRecipe: {
        recipeName: recipeName,
        youtubeURL: youtubeURL,
        indgridents: indgridents,
        directions: directions
      }
    });
  }

  //Save new recipe to recipes
  saveNewRecipe(newestRecipe) {
    let recipes = this.state.recipes.slice();
    recipes.push(newestRecipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({
      recipes: recipes
    });

    //this is to reset so that when modal is opend no previous valus are populated
    this.setState({
      newestRecipe: {
        recipeName: "",
        youtubeURL: "",
        indgridents: [],
        directions: []
      }
    });
    this.close();
  }

  //Closes a Modal
  close = () => {
    if (this.state.showAdd) {
      this.setState({
        showAdd: false
      });
    } else if (this.state.showEdit) {
      this.setState({
        showEdit: false
      });
    }
  };
  //updating the recipe name
  updateRecipeName(recipeName, currentIndex) {
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {
      recipeName: recipeName,
      youtubeURL: recipes[currentIndex].youtubeURL,
      indgridents: recipes[currentIndex].indgridents,
      directions: recipes[currentIndex].directions
    };
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes });
  }

  //update indgrident
  updateIngridents(currentIndex, indgridents) {
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {
      recipeName: recipes[currentIndex].recipeName,
      youtubeURL: recipes[currentIndex].youtubeURL,
      indgridents: indgridents,
      directions: recipes[currentIndex].directions
    };
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes });
  }

  //update directions
  updateDirections(currentIndex, directions) {
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {
      recipeName: recipes[currentIndex].recipeName,
      youtubeURL: recipes[currentIndex].youtubeURL,
      indgridents: recipes[currentIndex].indgridents,
      directions: directions
    };

    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes });
  }

  //update Link
  updateLink(currentIndex, youtubeURL) {
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {
      recipeName: recipes[currentIndex].recipeName,
      youtubeURL: youtubeURL,
      indgridents: recipes[currentIndex].indgridents,
      directions: recipes[currentIndex].directions
    };

    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes });
  }

  //Open a Model
  open(state, currentIndex) {
    this.setState({
      [state]: true
    });
    this.setState({
      currentIndex
    });
  }

  //Modal update
  UpdateModal() {
    this.setState({
      setModalShow: true
    });
  }

  //Local Storage
  componentDidMount() {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    this.setState({ recipes });
  }

  render() {
    /* const btnAdd = { backgroundColor: "rgb(163, 157, 163) !important" };*/
    const { currentIndex, recipes } = this.state;
    const divStyle = { margin: 0 };

    return (
      <div className="container">
        <div className="Top">
          <img src="/Images/FlowersTop.png" alt="" />
        </div>
        <h1 className="centering" style={{ textAlign: "center" }}>
          Add Recipes....
        </h1>
        {recipes.length > 0 && (
          <div className="row">
            {recipes.map((item, index) => {
              return (
                <div key={index}>
                  <Col key={index} sm="4">
                    <AddittionRecipeCards
                      itemname={item.recipeName}
                      youtube={item.youtubeURL}
                      ind={item.indgridents}
                      dir={item.directions}
                    />
                  </Col>

                  <Row style={{ marginLeft: "31px" }}>
                    <Col md={4}>
                      <Link
                        className="btn btn-secondary btn-circle btn-lg"
                        to="/AddRecipes"
                        onClick={() => this.deleteRecipe(index)}
                      >
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </Link>
                    </Col>
                    <Col md={4}>
                      <Link
                        className="btn btn-secondary btn-circle btn-lg"
                        to="/AddRecipes"
                        onClick={() => this.open("showEdit", index)}
                      >
                        <i class="fas fa-edit"></i>
                      </Link>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </div>
        )}

        <Modal size="lg" show={this.state.showAdd} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup controlId="formBasicText">
              <Form.Label>Recipe Name</Form.Label>
              <FormControl
                type="text"
                value={this.state.newestRecipe.recipeName}
                placeholder="Enter Recipe Name"
                onChange={event =>
                  this.updateNewRecipe(
                    event.target.value,
                    this.state.newestRecipe.youtubeURL,
                    this.state.newestRecipe.indgridents,
                    this.state.newestRecipe.directions
                  )
                }
              ></FormControl>
            </FormGroup>
            <FormGroup controlId="YoutubeBasicText">
              <Form.Label>YouTube Tutorial</Form.Label>
              <FormControl
                type="text"
                value={this.state.newestRecipe.youtubeURL}
                placeholder="Enter Youtube Link Name"
                onChange={event =>
                  this.updateNewRecipe(
                    this.state.newestRecipe.recipeName,
                    this.state.newestRecipe.indgridents,
                    this.state.newestRecipe.directions,
                    event.target.value
                  )
                }
              ></FormControl>
            </FormGroup>
            <FormGroup controlId="formControlTextarea">
              <Form.Label>Indgridents</Form.Label>
              <FormControl
                type="textarea"
                value={this.state.newestRecipe.indgridents}
                placeholder="Enter Indgridents (Separted by Commas)"
                onChange={event =>
                  this.updateNewRecipe(
                    this.state.newestRecipe.recipeName,
                    event.target.value.split(","),
                    this.state.newestRecipe.directions,
                    this.state.newestRecipe.youtubeURL
                  )
                }
              ></FormControl>
            </FormGroup>
            <FormGroup controlId="DirectionControlTextarea">
              <Form.Label>Directions</Form.Label>​
              <Form.Control
                as="textarea"
                rows="3"
                value={this.state.newestRecipe.directions}
                placeholder="Enter Directions (Separted by Commas)"
                onChange={event =>
                  this.updateNewRecipe(
                    this.state.newestRecipe.recipeName,
                    this.state.newestRecipe.indgridents,
                    event.target.value.split(","),
                    this.state.newestRecipe.youtubeURL
                  )
                }
              />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="addButton"
              onClick={event => this.saveNewRecipe(this.state.newestRecipe)}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        {this.state.showEdit && (
          <Modal size="lg" show={this.state.showEdit} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormGroup controlId="formBasicText">
                <Form.Label>Recipe Name</Form.Label>
                <FormControl
                  type="text"
                  value={recipes[currentIndex].recipeName}
                  placeholder="Enter Recipe Name"
                  onChange={event =>
                    this.updateRecipeName(event.target.value, currentIndex)
                  }
                ></FormControl>
              </FormGroup>
              <FormGroup controlId="YoutubeBasicText">
                <Form.Label>YouTube Tutorial</Form.Label>
                <FormControl
                  type="textarea"
                  value={recipes[currentIndex].youtubeURL}
                  placeholder="Enter Indgridents (Separted by Commas)"
                  onChange={event =>
                    this.updateLink(currentIndex, event.target.value)
                  }
                ></FormControl>
              </FormGroup>
              <FormGroup controlId="formControlTextarea">
                <Form.Label>Indgridents</Form.Label>
                <FormControl
                  type="textarea"
                  value={recipes[currentIndex].indgridents}
                  placeholder="Enter Indgridents (Separted by Commas)"
                  onChange={event =>
                    this.updateIngridents(
                      currentIndex,
                      event.target.value.split(",")
                    )
                  }
                ></FormControl>
              </FormGroup>
              <FormGroup controlId="DirectionControlTextarea">
                <Form.Label>Directions</Form.Label>​
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={recipes[currentIndex].directions}
                  placeholder="Enter Directions (Separted by Commas)"
                  onChange={event =>
                    this.updateDirections(
                      currentIndex,
                      event.target.value.split(",")
                    )
                  }
                />
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button className="addButton" onClick={this.close}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        <br />

        <ButtonToolbar>
          <div
            className="svg-wrapper"
            style={{
              position: "relative",
              bottom: "15px !important",
              zIndex: "1"
            }}
          >
            <Link
              to="/AddRecipes"
              onClick={() => this.open("showAdd", currentIndex)}
            >
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="320" />
              </svg>
              <div className="text">ADD RECIPE</div>
            </Link>
          </div>
        </ButtonToolbar>
        <div className="Bottom">
          <img src="/Images/FlowersBottom.png" alt="" />
        </div>
        <Link
          to="/Selection"
          className="btn btn-secondary btn-circle btn-circleFixed btn-xl"
        >
          <i class="fas fa-arrow-left"></i>
        </Link>
      </div>
    );
  }
}
export default AddRecipes;
