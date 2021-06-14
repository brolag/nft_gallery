import { useNft } from 'use-nft'
import Link from 'next/link'

type NftProps = {
  contract: string
  tokenId: string
}

export default function Nft({ contract, tokenId }: NftProps) {
  const { loading, error, nft } = useNft(contract, tokenId)

  if (loading) return <>Loading…</>

  if (error || !nft) return <>Error.</>

  return (
    <section>
      <h2 className="text-2xl font-bold leading-7 text-gray-800 sm:text-3xl sm:truncate mb-20">
        {nft.name}
      </h2>
      <img className="w-64 shadow-xl mb-12" src={nft.image} alt="" />
      <p className="mb-10 text-gray-800">{nft.description}</p>
      <Link href={`https://etherscan.io/token/${contract}?a=${tokenId}`}>
        <a className="text-indigo-600 hover:text-indigo-900 font-bold text-sm">
          See on Ether Scan{' '}
        </a>
      </Link>
    </section>
  )
}
