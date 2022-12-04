import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteContact } from "../../actions/contactActions";
import StoreDetails from "../faltu/StoreDetails";
import StoreDetailsState from "../faltu/StoreDetailsState";
import Alert from "../faltu/Alert";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  showalert={
    alert:null,
    message:""
  };
  render() {
    const { id, tripId, loadId, trailer,tripDateString,storeDetailsList } = this.props.contact;
    
    return (
      <div className="card mb-2" key={tripId}>
        <Alert alert={this.showalert.alert} message="" ></Alert>
        <div className="card-header">
          <h4>
            {tripId}
            <i
              className="fa fa-sort-down ml-2"
              style={{ cursor: "pointer" }}
              onClick={() =>
                this.setState({
                  showContactInfo: !this.state.showContactInfo
                })
              }
            ></i>
            <i
              className="fa fa-times"
              style={{ cursor: "pointer", float: "right", color: "red" }}
              onClick={() => this.props.deleteContact(id)}
            ></i>
            <Link to={`contact/edit/${id}`}>
              <i
                className="fa fa-pencil"
                style={{
                  cursor: "pointer",
                  float: "right",
                  color: "black",
                  marginRight: "1rem"
                }}
              />
            </Link>
          </h4>
        </div>
        {this.state.showContactInfo ? (
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">Load: {loadId}</li>
              <li className="list-group-item">Trailer: {trailer}</li>
              <li className="list-group-item">Trip Date: {tripDateString}</li>
              
            </ul>
            <StoreDetails tripId={tripId} storeList={storeDetailsList} status={storeDetailsList[0]? storeDetailsList[0].status:""}/>
            <StoreDetailsState status={storeDetailsList[0]? storeDetailsList[0].status:""}/>
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect(
  null,
  { deleteContact }
)(Contact);
