import React from "react";
import { productService } from "../services/productService";
import { toast } from "react-toastify";

function onAddSuccess(response) {
  console.log({ good: response });
  toast.success("Product was added. id:" + response.data.item);
}

function onAddError(response) {
  console.log({ bad: response });
  toast.error("Error on attempt to add product. Please re-try.");
}

class ProductForm extends React.Component {
  state = {
    formData: {
      name: "",
      manufacturer: "",
      description: "",
      cost: "",
    },
    isModalOpen: false,
    hasMadeAjax: false,
    arrayOfComp: [],
  };

  // renderProductInfo = (aProduct) => {
  //   return (
  //     <em>
  //       {aProduct.name} {aProduct.manufacturer} {aProduct.description}{" "}
  //       {aProduct.cost}
  //     </em>
  //   );
  // };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name; // name or manufacturer or description or cost
    console.log("newValue comes from currentTarget.value", newValue);
    console.log("theinputNamer is: ", inputName);
    this.setState(() => {
      let newState = { ...this.state.formData };
      newState[inputName] = newValue;
      console.log(newState);
      return { formData: newState };
    });
  };

  onItemClicked = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("clicked item was:", e.currentTarget);
    if (e.currentTarget.name === "submit") {
      productService
        .addProduct(this.state.formData)
        .then(onAddSuccess)
        .catch(onAddError);
      this.setState(() => {
        let newState = {};
        newState.name = "";
        newState.manufacturer = "";
        newState.description = "";
        newState.cost = "";
        // console.log(newState);
        return { formData: newState };
      });
    } else if (e.currentTarget.name === "reset") {
      this.setState(() => {
        let newState = {};
        newState.name = "";
        newState.manufacturer = "";
        newState.description = "";
        newState.cost = "";
        // console.log(newState);
        return { formData: newState };
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-md-4 mx-auto p-3 card bg-light border-3 text-dark">
          <form>
            <div className="card-header bg-dark text-white mx-auto">
              Add a Product
            </div>
            <div className="col-md-9 mx-auto">
              <div className="form-group">
                <label>Product name:</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  name="name"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.name}
                />
                <label>Manufacturer:</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  name="manufacturer"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.manufacturer}
                />
                <label>Description:</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  name="description"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.description}
                />
                <label>Cost:</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  name="cost"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.cost}
                />
              </div>
            </div>
            <div className="btn form-control d-grid gap-3 mx-auto">
              <button
                type="submit"
                name="submit"
                className="btn-outline-primary p-1 rounded"
                onClick={this.onItemClicked}
              >
                Submit
              </button>
              <button
                type="button"
                name="reset"
                className="btn-outline-primary p-1 rounded"
                onClick={this.onItemClicked}
              >
                Clear form
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductForm;
