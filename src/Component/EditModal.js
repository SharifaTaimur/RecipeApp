import React from "react";
import { Button, Modal, FormGroup, Form, FormControl } from "react-bootstrap";

class EditModal extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Modal size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup controlId="formBasicText">
            <Form.Label>Recipe Name</Form.Label>
            <FormControl
              type="text"
              value={this.props.itm.newestRecipe.recipeName}
              placeholder="Enter Recipe Name"
              onChange={event =>
                this.updateNewRecipe(
                  event.target.value,
                  this.itm.newestRecipe.indgridents
                )
              }
            ></FormControl>
          </FormGroup>
          <FormGroup controlId="formControlTextarea">
            <Form.Label>Indgridents</Form.Label>
            <FormControl
              type="textarea"
              value={this.props.itm.newestRecipe.indgridents}
              placeholder="Enter Indgridents (Separted by Commas)"
              onChange={event =>
                this.updateNewRecipe(
                  this.props.itm.newestRecipe.recipeName,
                  event.target.value.split(",")
                )
              }
            ></FormControl>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button className="addButton">Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditModal;
