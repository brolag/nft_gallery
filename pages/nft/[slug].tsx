import useEagerConnect from '@hooks/useEagerConnect'
import Header from '@components/Header'
import Nft from '@components/Nft'

export default function NFTShowroom() {
  const triedToEagerConnect = useEagerConnect()

  return (
    <div>
      <Header triedToEagerConnect={triedToEagerConnect} />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex-1 min-w-0"></div>
          <Nft
            contract="0xd07dc4262bcdbf85190c01c996b4c06a461d2430"
            tokenId="90473"
          />
        </div>
      </main>
    </div>
  )
}
