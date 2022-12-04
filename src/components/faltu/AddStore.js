import React, { useState } from 'react';
import TextInputGroup from "../layout/TextInputGroup";
import Alert from './Alert';

//https://www.geeksforgeeks.org/how-to-pass-data-from-child-component-to-its-parent-in-reactjs/
export default function AddStore(props) {
    const buttonid=props.tripId+props.sequence;
    const onStoreSave = (event) => {
      setAlert({
        type:"success",
        msg:"Store Added Succesfully"
      });
      setTimeout(()=>{
        setAlert(null);
      },3000);
      //let mayVal=document.getElementById("storeId1").value;
      stateVal2.deliverySequence=props.sequence;
      stateVal2.tripId=props.tripId;
      document.getElementById(buttonid).style.display="none";
      console.log("stateVal1 => "+JSON.stringify(stateVal2));
      props.parentCallback(stateVal2);
        //event.preventDefault();
    }
   const [alert,setAlert]= useState(null);
   let stateVal1 = {
      totalBoxCount: "",
      totalTotesCount:"",
      totalCasesCount:"",
      route:"",
      cartsCount:"",
      totesCount:"",
      casesCount:"",
      invoiceId:"",
      storeId:"",
      tripId: "",
      status: "INITIAL",
      deliverySequence: 0,
      errors: {}
    };
    let errors = {
      totalBoxCount: "",
      totalTotesCount:"",
      totalCasesCount:"",
      route:"",
      cartsCount:"",
      totesCount:"",
      casesCount:"",
      invoiceId:"",
      storeId:"",
    };
    const [stateVal,setStateVal]=useState(stateVal1);
    const [stateVal2,setStateVal2]=useState(stateVal1);
    const onChange = (e) =>{ 
      console.log(e.target.name); 
      console.log(e.target.value);
      stateVal2[e.target.name]=e.target.value;
      setStateVal2(stateVal2);
      setStateVal({ [e.target.name]: e.target.value});
    };


    const { totalBoxCount,totalTotesCount,totalCasesCount,route,cartsCount,totesCount,casesCount,
      invoiceId,storeId } = stateVal;
  return (
    <div>
        <Alert alert={alert}></Alert>
        <div className="card mb-3">
        <div className="card-header">Add Store</div>
        <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <TextInputGroup
                    label="Store Id"
                    name="storeId"
                    placeholder="Enter StoreId"
                    value={stateVal.storeId}
                    onChange={onChange}
                    error={errors.storeId}
                  />
                </div>
                <div className="col-sm">
                  <TextInputGroup
                    label="Invoice Id"
                    name="invoiceId"
                    placeholder="Enter Invoice Id"
                    value={stateVal.invoiceId}
                    onChange={onChange}
                    error={errors.invoiceId}
                  />
                </div>
                <div className="col-sm">
                  <TextInputGroup
                    label="Cases Count"
                    name="casesCount"
                    placeholder="Enter Carts Count"
                    value={stateVal.casesCount}
                    onChange={onChange}
                    error={errors.casesCount}
                  />
                </div>
              </div>{ /* row end */}
              <div className="row">
                <div className="col-sm">
                  <TextInputGroup
                    label="Totes Count"
                    name="totesCount"
                    placeholder="Enter Carts Count"
                    value={stateVal.totesCount}
                    onChange={onChange}
                    error={errors.totesCount}
                  />
                </div>
                <div className="col-sm">
                  <TextInputGroup
                    label="Carts Count"
                    name="cartsCount"
                    placeholder="Enter Carts Count"
                    value={stateVal.cartsCount}
                    onChange={onChange}
                    error={errors.cartsCount}
                  />
                </div>
                <div className="col-sm">
                  <TextInputGroup
                    label="AsnNumber"
                    name="asnNumber"
                    placeholder="Enter AsnNumber"
                    value={stateVal.asnNumber}
                    onChange={onChange}
                    error={errors.asnNumber}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <TextInputGroup
                    label="Total Route"
                    name="route"
                    placeholder="Enter Route"
                    value={stateVal.route}
                    onChange={onChange}
                    error={errors.route}
                  />
                </div>
                <div className="col-sm">
                  <TextInputGroup
                    label="Total Delivery Boxes"
                    name="deliveryBoxes"
                    placeholder="Enter deliveryBoxes Count"
                    value={stateVal.deliveryBoxes}
                    onChange={onChange}
                    error={errors.deliveryBoxes}
                  />
                </div>
                <div className="col-sm">
                  <TextInputGroup
                    label="Total Cases Count"
                    name="totalCasesCount"
                    placeholder="Enter Total Totes Count"
                    value={stateVal.totalCasesCount}
                    onChange={onChange}
                    error={errors.totalCasesCount}
                  />
                </div>
              </div> 
              <div className="row">
                <div className="col-sm">
                  <TextInputGroup
                    label="Total Totes Count"
                    name="totalTotesCount"
                    placeholder="Enter Total Totes Count"
                    value={stateVal.totalTotesCount}
                    onChange={onChange}
                    error={errors.totalTotesCount}
                  />
                </div>
                <div className="col-sm">
                  <TextInputGroup
                    label="Total Box"
                    name="totalBoxCount"
                    placeholder="Enter Total Box Count"
                    value={stateVal.totalBoxCount}
                    onChange={onChange}
                    error={errors.totalBoxCount}
                  />
                </div>
                <div className="col-sm">
                   <input
                    type="button"
                    value="Submit"
                    id={buttonid}
                    onClick={onStoreSave}
                    className="btn btn-dark btn-block my-5"
                  />
                </div>
              </div> 
             </div>
        </div>
        </div>      

      
    </div>
  );
}
