import { useWeb3React } from '@web3-react/core'
import useEagerConnect from '@hooks/useEagerConnect'
import Header from '@components/Header'
import NFTTable from '@components/NFTTable'

export default function Home() {
  const { account, library } = useWeb3React()
  const triedToEagerConnect = useEagerConnect()

  return (
    <div>
      <Header triedToEagerConnect={triedToEagerConnect} />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-800 sm:text-3xl sm:truncate mb-20">
              Registered NFTs
            </h2>
          </div>
          <NFTTable />
        </div>
      </main>
    </div>
  )
}
