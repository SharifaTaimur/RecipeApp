import React from "react";
import { Router } from "react-router-dom";
import {
  Card,
  Button,
  Form,
  FormControl,
  InputGroup,
  Col
} from "react-bootstrap";
import { Link } from "react-router-dom";
import RecipeCards from "./RecipeCards";
import LoadingSpinner from "./Preloader";

const APP_ID = "6d492b1e";
const APP_KEY = "b3817937f5cb2b7442804e5199c19690";

class SearchRecipes extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      recipe: [],
      loading: false,
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  /* componentDidMount(){
     fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
     .then(response=>response.json())
     .then(data=>{
         console.log(data.meals) 
         this.setState({ 
           'recipe':data.meals,
         })
       }) 
   }*/

  handleChange(event) {
    const { value } = event.target;
    this.setState(
      {
        query: value,
        loading: true,
        message: ""
      },
      () => {
        this.fetchSearchResults(1, value);
      }
    );
  }

  fetchSearchResults(updatedPageNo = "", query) {
    const pageNumber = updatedPageNo ? `&page=4${updatedPageNo} ` : "";

    this.setState({
      loading: true
    });

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.meals);
        this.setState({
          recipe: data.meals,
          loading: false
        });
      });
  }

  render() {
    let recipeCards = this.state.recipe.map(function(item, index) {
      return (
        <Col key={index} sm="4">
          <RecipeCards itm={item} />
        </Col>
      );
    });
    return (
      <div className="container">
        {/* <h1 className="centering" style={{ textAlign: "center" }}>
          Search for Recipes....
        </h1>
        */}

        <div className="bg">
          <img src="/Images/BGF.png" alt="" />
        </div>
        <Form>
          <InputGroup>
            <FormControl
              size="lg"
              placeholder="Search for Recipe.."
              type="text"
              id="search-input"
              value={this.state.query}
              onChange={this.handleChange}
            />
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">
                <i className="fas fa-search"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </Form>
        <br />
        {this.state.loading ? (
          <LoadingSpinner />
        ) : (
          <Form.Row>{recipeCards}</Form.Row>
        )}
        {/*  <button type="button" class="btn btn-secondary btn-circle btn-xl">
          <i class="fas fa-arrow-left"></i>
        </button>*/}
        <Link
          to="/Selection"
          className="btn btn-secondary btn-circle btn-circleFixed  btn-xl"
        >
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
    );
  }
}
export default SearchRecipes;
