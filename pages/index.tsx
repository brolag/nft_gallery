import { useWeb3React } from '@web3-react/core'
import useEagerConnect from '@hooks/useEagerConnect'
import Header from '@components/Header'
import NFTTable from '@components/NFTTable'

// TODO: need a way to capture available nfts
const nfts = [
  {
    name: 'Helping Hand',
    id: '90473',
    slug: 'helping-hand',
    gallery: 'Modern',
    contract: '0xd07dc4262bcdbf85190c01c996b4c06a461d2430',
  },
]

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
          <NFTTable nfts={nfts} />
        </div>
      </main>
    </div>
  )
}
