import React,{useState} from "react";
export default function StoreDetails(props) {
   const[storeColor,changeStoreColor]=useState({
            maxWidth: 12 + "em",
            display:"inline-block",
            backgroundColor:"yellow"
   });

   const clickOnStore=()=>{
        if(storeColor.backgroundColor==="yellow"){
            changeStoreColor({
                maxWidth: 12 + "em",
                display:"inline-block",
                backgroundColor:"cyan"
            });
        }else{
            changeStoreColor({
                maxWidth: 12 + "em",
                display:"inline-block",
                backgroundColor:"yellow"
            })
        }
   };
   let sortedStoreOnSequence =
    props.storeList.sort((a, b) => (a.deliverySequence < b.deliverySequence) ? -1 : 1);
  return (
    <div>
      This is store details :-{props.tripId}
      <br/>
      { 
          sortedStoreOnSequence.map((storeObj)=>{
            let min=storeObj.etaMin;
            let max=storeObj.etaMax;
           return <div className="card m-1" style={storeColor}> 
              <div className="card-body" onClick={clickOnStore}>
                <h5 className="card-title">Id :{storeObj.storeId}</h5>
                <span className="card-text">
                  <ol>
                    <li><b>Seq: {storeObj.deliverySequence}</b></li>
                    <li>ETA: 
                        <table border="1">
                        <tbody>
                          <tr><td>{min} </td></tr>
                          <tr><td>{max}</td></tr>
                        </tbody>
                        </table>
                    </li>
                    <li>Asn: {storeObj.asnNumber}</li>
                    <li>Route: {storeObj.route}</li>
                    <li><b>Status: {storeObj.status}</b></li>
                    
                  </ol>
                </span>
                This is some text within a card body.
              </div>
            </div>
          }
          )
      }
    </div>
  );
}
