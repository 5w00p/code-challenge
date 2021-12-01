import React from "react";

class Cars extends React.Component {
  state = {
    carInfo: [
      {
        make: "Kia",
        model: "Sorento",
        year: 2020,
      },
      {
        make: "Kia",
        model: "Optima",
        year: 2019,
      },
      {
        make: "Tesla",
        model: "Model 3",
        year: 2021,
      },
      {
        make: "Honda",
        model: "Civic",
        year: 2019,
      },
      {
        make: "Honda",
        model: "Accord",
        year: 2018,
      },
      {
        make: "Volkswagen",
        model: "Jetta",
        year: 2021,
      },
      {
        make: "Toyota",
        model: "Camry",
        year: 2021,
      },
      {
        make: "Ford",
        model: "Mustang",
        year: 2019,
      },
      {
        make: "Ford",
        model: "F-150",
        year: 2019,
      },
      {
        make: "Toyota",
        model: "Camry",
        year: 2020,
      },
      {
        make: "Ford",
        model: "F-150",
        year: 2021,
      },
    ],
    yearSelected: "",
  };

  mapCar = (oneCar) => {
    return (
      <React.Fragment>
        <div className="card col-md-3 m-1">
          <div className="card-body">
            <h5 className="card-title">{oneCar.make}</h5>
            <h5 className="card-text">{oneCar.model}</h5>
            <h5 className="card-text">{oneCar.year}</h5>
          </div>
        </div>
      </React.Fragment>
    );
  };

  onYearChange = (e) => {
    console.log(e.currentTarget.value);
    let currYrSelected = e.currentTarget.value;
    console.log(currYrSelected);
    // eslint-disable-next-line array-callback-return
    let result = this.state.carInfo.filter((selYear) => {
      if (selYear.year === currYrSelected) {
        return selYear;
      }
    });
    this.setState(() => {
      return result;
    });
  };

  toggleShowHide = () => {
    console.log("Showing or hiding the cars.");
    this.setState(() => {
      return { showCars: this.state.carInfo.map(this.mapCar) };
    });
  };

  componentDidMount() {
    this.setState((prevState) => {
      return { mappedCars: prevState.carInfo.map(this.mapCar) };
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="p-5">
          <button
            type="button"
            className="btn btn-dark"
            name="showCars"
            onClick={this.toggleShowHide}
          >
            Show/Hide Cars
          </button>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="exFormCntrlSelect1"></label>
              <select
                className="form-control"
                name="yearDD"
                value={this.state.yearSelected}
                onChange={this.onYearChange}
              >
                <option value="">Select Year</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                {/* {this.state.carInfo.map(this.mapYear)} */}
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-4 mx-auto p-2">
          <hr />
          <div className="row">{this.state.carInfo.map(this.mapCar)}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cars;
