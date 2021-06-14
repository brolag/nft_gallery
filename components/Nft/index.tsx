import { useNft } from 'use-nft'

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
      <h1>{nft.name}</h1>
      <img src={nft.image} alt="" />
      <p>{nft.description}</p>
      <p>Owner: {nft.owner}</p>
      <p>Metadata URL: {nft.metadataUrl}</p>
    </section>
  )
}
