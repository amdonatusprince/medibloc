import React, { useState } from "react";
import { ethers } from "ethers";
import "../css/styles.css";
import contractAbi from "../components/contractABI.json";
import "../css/getPatientRecord.css"

const contractAddress = "0x8084B71fd847053621f36a3A87DDC885f45A467D";
const abi = contractAbi;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner(); // Get the signer from the provider
const contract = new ethers.Contract(contractAddress, abi, signer);


const GetAuthorizedAddresses = () => {

  return (
    <div className="medical-records main_container">
      <p>Enter Address you wish to grant permision to view your information!</p>
      <input></input>
      <button >Grant Access</button>
      
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* Other components */}
      <GetAuthorizedAddresses />
      {/* Other components */}
    </div>
  );
};

export default App;
