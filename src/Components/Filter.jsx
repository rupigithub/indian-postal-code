import React, { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { useContext } from "react";
import { Usercontext } from "../Context/userContext";

function Filter() {
  // const Pincode = localStorage.getItem('pincode');
  const [pincode] = useContext(Usercontext);
  let [data, setData] = useState({});
  let [loading, setLoading] = useState(true);
  let [filter, setFilter] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios(
          `https://api.postalpincode.in/pincode/${pincode}`
        );
        console.log(response);
        const responseData = response.data[0];
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, [pincode]);

  console.log(`data : ${data}`);
  const filteredItems = data?.PostOffice?.filter((items) => {
    return items.Name.toLowerCase().includes(filter);
  });

  console.log(`filtered data : ${filteredItems}`);

  return (
    <>
      <div className="container">
        <h2>Pincode:{pincode}</h2>
        <h3>
          Message:
          <span
            style={
              filteredItems
                ? { margin: "5px", padding: "5px" }
                : { margin: "5px", padding: "5px", color: "red" }
            }
          >
            {data?.Message}
          </span>
        </h3>
        <form>
          <input
            className="filter-box"
            type="text"
            value={filter}
            placeholder="filter by name"
            onChange={(e) => setFilter(e.target.value.toLowerCase())}
          ></input>
        </form>

        <div className="sub-container">
          {filteredItems
            ? filteredItems.map((items, i) => {
                return (
                  <div className="boxes" key={i}>
                    <p>Name : {items.Name}</p>
                    <p>Branch : {items.BranchType}</p>
                    <p>Pincode : {items.Pincode}</p>
                    <p>District : {items.District}</p>
                    <p>Division : {items.Division}</p>
                  </div>
                );
              })
            : //   <p style={{color : 'red'}}> data not matched. Please try again.</p>
              loading && (
                <div className="loader">
                  <p>Loading.....</p>
                  <Oval height={50} width={50} color="#4fa94d" />
                </div>
              )}
        </div>
      </div>
    </>
  );
}

export default Filter;
