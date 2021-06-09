import { useEffect, useState } from "react";
import Web3 from "web3";

export default function Home() {
  const [account, setAccount] = useState({ account: "" });

  useEffect(() => {
    // const fecthAddress = async () => {
    //   const web3 = new Web3(Web3.givenProvider || "http://localhost:3000");
    //   const network = await web3.eth.net.getNetworkType();
    //   console.log(network); // should give you main if you're connected to the main network via metamask...
    //   const accounts = await web3.eth.accounts;
    //   setAccount({ account: accounts[0] });
    //   console.log(accounts);
    // };
    // fecthAddress();
  }, []);

  return <div>hello world</div>;
}
