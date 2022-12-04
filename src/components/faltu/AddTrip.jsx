import React, { Component } from "react";
import { connect } from "react-redux";
import TextInputGroup from "../layout/TextInputGroup";
import { addTrip } from "../../actions/contactActions";
import AddStore from "./AddStore";
class AddTrip extends Component {
  state = {
    tripId: "",
    tripDate: "",
    loadId: "",
    trailer: "",
    totalBoxCount: "",
    storeDetailsList:[],
    errors: {},
    storeCountArray:[]
  };
  myArray=[];
 

  onSubmit = (e) => {
    e.preventDefault();

    const { tripId, tripDate, loadId, site, trailer, totalBoxCount,storeDetailsList} =
      this.state;
console.log("----"+this.state);
    // Check For Errors
    if (tripId === "") {
      this.setState({ errors: { tripId: "Trip Id is required" } });
      return;
    }

    if (tripDate === "") {
      this.setState({ errors: { tripDate: "Trip Date is required" } });
      return;
    }

    if (loadId === "") {
      this.setState({ errors: { loadId: "LoadId is required" } });
      return;
    }

    if (site === "") {
      this.setState({ errors: { site: "Site is required" } });
      return;
    }

    if (trailer === "") {
      this.setState({ errors: { trailer: "Site is required" } });
      return;
    }

    const newContact = {
      tripId,
      tripDate,
      loadId,
      site,
      trailer,
      totalBoxCount,
      storeDetailsList
    };

    //// SUBMIT CONTACT ////
    this.props.addTrip(newContact);

    // Clear State
    this.setState({
      tripId: "",
      tripDate: "",
      loadId: "",
      site: "",
      trailer: "",
      totalBoxCount:"",
      storeDetailsList:[],
      errors: {}
    });

    //Redirect to home
    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onClickAddStore=()=>{
    //const root = createRoot(document.getElementById('storeDiv'));
    //const element = <AddStore parentCallback = {this.handleCallback} />;
    //root.render(element);
    
   // <AddStore parentCallback = {this.handleCallback}></AddStore>
   // this.state.storeCountArray.push({"a":"a"});
    this.myArray.push("aaa");
    this.setState({storeCountArray:this.myArray});
  }

  handleCallback = (childData) =>{
    console.log("Add Trip: "+JSON.stringify(childData));
    this.state.storeDetailsList.push(childData);
    this.setState(this.state);
    console.log("last state :- "+JSON.stringify(this.state));
  }
  render() {
    const { tripId, tripDate, loadId, site, trailer, totalBoxCount,storeDetailsList, errors } =
      this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Trip</div>
        <div className="card-body">
         {/*  <form> */}
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <TextInputGroup
                    label="Trip Id"
                    name="tripId"
                    placeholder="Enter TripId"
                    value={this.state.tripId}
                    onChange={this.onChange}
                    error={errors.tripId}
                  />
                </div>
                <div className="col-sm">
                  <TextInputGroup
                    label="Trip Date"
                    name="tripDate"
                    placeholder="Enter Date"
                    value={this.state.tripDate}
                    onChange={this.onChange}
                    error={errors.tripDate}
                  />
                </div>
                <div className="col-sm">
                  <TextInputGroup
                    label="Load Id"
                    name="loadId"
                    placeholder="Enter Load"
                    value={this.state.loadId}
                    onChange={this.onChange}
                    error={errors.loadId}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <TextInputGroup
                    label="Site"
                    name="site"
                    placeholder="Enter Site"
                    value={this.state.site}
                    onChange={this.onChange}
                    error={errors.site}
                  />
                </div>
                <div className="col-sm">
                  <TextInputGroup
                    label="Trailer"
                    name="trailer"
                    placeholder="Enter trailer"
                    value={this.state.trailer}
                    onChange={this.onChange}
                    error={errors.trailer}
                  />
                </div>
                <div className="col-sm">
                  <TextInputGroup
                    label="Total Box"
                    name="totalBoxCount"
                    placeholder="Enter Total Box Count"
                    value={this.state.totalBoxCount}
                    onChange={this.onChange}
                    error={errors.totalBoxCount}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <input
                    className="form-check-input mx-2"
                    type="checkbox"
                    name="isComingled"
                    role="switch"
                    id="isComingled"
                  />
                  <label
                    className="form-check-label mx-4"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    Comingled
                  </label>
                </div>
                <div className="col-sm">
                  <input
                    type="button"
                    value="Add Store"
                    onClick={this.onClickAddStore}
                    className="btn btn-dark btn-block"
                  />
                </div>
              </div>
            </div>
            <div id="storeDiv" className="my-3">
              {
                this.state.storeCountArray.length > 0 ? 
                this.state.storeCountArray.map((obj,index)=>
                  <AddStore key={index} sequence={index+1} tripId={this.state.tripId} parentCallback = {this.handleCallback} />
                ):null
              }
                
            </div>
            <div className="row">
              <div className="col-sm my-1">
                  <input
                    type="button"
                    value="Add Trip"
                    onClick={this.onSubmit}
                    className="btn btn-dark btn-block"
                  />
                </div>
                </div>    
        {/*   </form>
 */}        </div>
      </div>
    );
  }
}

export default connect(null, { addTrip })(AddTrip);
