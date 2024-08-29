import React from "react";
import { useNavigate } from "react-router-dom";
import { Usercontext } from "../Context/userContext";
import { useContext } from "react";


function Home(){
    // const [pincode, setPincode] = useState('');
    const [pincode,setPincode] = useContext(Usercontext);
    const navigate = useNavigate();
    
    const handleInput = (e) =>{
        setPincode(e.target.value);
        // console.log(pincode);
        
    }

    const fetchPin = (e) =>{
       e.preventDefault();
        // localStorage.setItem('pincode', pincode);
        if(pincode.length === 6){
            navigate("/filter");
        }
        else{
            alert("please enter 6 digit of pincode");
        }
    }

    return(
        <div className="container">
    <h1>Enter Pincode</h1>
    <form>
        <input className="input-box" type="text" value={pincode} placeholder="Pincode" onChange={handleInput}></input>
        <button  className="lookUp-box" onClick={fetchPin}>LookUp</button>
    </form>
        </div>
    )
}

export default Home;