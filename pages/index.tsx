import { useEffect, useState } from "react"
import Web3 from "web3"

export default function Home() {
  const [account, setAccount] = useState({ account: "" })

  useEffect(() => {
    const fecthAddress = async () => {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
      const network = await web3.eth.net.getNetworkType()
      const accounts = await web3.eth.getAccounts()
      console.log(network) // should give you main if you're connected to the main network via metamask...
      setAccount({ account: accounts[0] })
    }
    fecthAddress()
  }, [])

  console.log(account)

  return account && account.account ? (
    <div>{account.account}</div>
  ) : (
    <div>not connected</div>
  )
}
