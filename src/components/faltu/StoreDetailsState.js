import React , {useState} from 'react';


export default function StoreDetailsState(props) {
    const convertUpperCase = function(){
        console.log("uppercase Clicked: "+myText);
        setMyText(myText.toUpperCase())
        //setMyText("i have clicked uppercase button");
    }
    const clickChange= (event) => {
        console.log("clickchnage Clicked");
        setMyText(event.target.value);
    }
    const removeSpace=()=>{
      let newText= myText.split(/\s+/);
      setMyText(newText.join(" "));
    }
    const [myText,setMyText] =useState('Enter Text here ');
    return (
    <div>
        <h1>{props.status}</h1>
      <div className="mb-3">
        <label className="form-label" htmlFor='myBox'>
          Example textarea
        </label> 
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={myText}
          onChange={clickChange} 
          rows="3"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={convertUpperCase}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={removeSpace}>RemoveExtraSpace</button>
    </div>
  );
}
