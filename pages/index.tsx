import { useWeb3React } from '@web3-react/core'
import useEagerConnect from '@hooks/useEagerConnect'
import Header from '@components/Header'

export default function Home() {
  const { account, library } = useWeb3React()
  const triedToEagerConnect = useEagerConnect()

  return (
    <div>
      <Header triedToEagerConnect={triedToEagerConnect} />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="w-60">
            {/* <Nft
              contract="0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405"
              tokenId="46093"
            /> */}
          </div>
        </div>
      </main>
    </div>
  )
}
