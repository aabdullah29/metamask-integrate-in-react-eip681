import { useState } from "react";
import { ethers } from "ethers";
import './App.css';

import QRCodeGenerator from './QRCodeGenerator';

function ConnectMetamaskUsingEth() {
  const [publicKey, setPublickey] = useState();
  const [network, setNetwork] = useState();
  const [chainId, setChainId] = useState();
  const [msg, setMsg] = useState();

  const connectMetamask = async () => {
    const { ethereum } = window;
    if (ethereum.isMetaMask) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);

      const { name, chainId } = await provider.getNetwork();

      setNetwork(name);
      setChainId(chainId);
      setPublickey(accounts[0]);
    } else {
      setMsg("Install MetaMask");
    }
  };


  // const swithcNetwork = async (chainId) => {
  //   try {
  //     await window.ethereum.request({
  //       method: "wallet_addEthereumChain",
  //       params: [avlNetwork[`${chainId}`]]
  //     });
  //     setNetwork(avlNetwork[`${chainId}`].chainName);
  //     setChainId(chainId);
  //   } catch (error) {
  //     setMsg(error);
  //   }
  // };

  // const avlNetwork = {
  //   137: {
  //     chainId: `0x${Number(137).toString(16)}`,
  //     rpcUrls: ["https://rpc-mainnet.matic.network/"],
  //     chainName: "Polygon Mainnet",
  //     nativeCurrency: {
  //       name: "MATIC",
  //       symbol: "MATIC",
  //       decimals: 18
  //     },
  //     blockExplorerUrls: ["https://polygonscan.com/"]
  //   },
  //   43114: {
  //     chainId: `0x${Number(43114).toString(16)}`,
  //     rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
  //     chainName: "Avalanche C-Chain",
  //     nativeCurrency: {
  //       name: "Avalanche",
  //       symbol: "AVAX",
  //       decimals: 18
  //     },
  //     blockExplorerUrls: ["https://snowtrace.io/"]
  //   }
  // };


  return (

<div className="App">
      <h1>Connect MetaMask</h1>
      <button onClick={connectMetamask}>Connect MetaMask</button>
      <br />
      {/* <button className="btn" onClick={() => swithcNetwork(137)}>
        Connect Polygon
      </button>
      <br />
      <button className="btn" onClick={() => swithcNetwork(43114)}>
        Connect Avalanche
      </button> */}
      <p>Public Key: {publicKey}</p>
      <p>Network: {network}</p>
      <p>Chain ID : {chainId}</p>
      {msg && <p>{msg}</p>}

      <div className="App">
      <QRCodeGenerator />
    </div>
    </div>
    
  );
}

export default ConnectMetamaskUsingEth;