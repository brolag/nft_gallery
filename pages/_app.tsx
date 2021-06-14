import 'tailwindcss/tailwind.css'

import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import { NftProvider, useNft } from 'use-nft'
import { getDefaultProvider, Contract } from 'ethers'

function getLibrary(provider) {
  return new Web3Provider(provider)
}

const ethersConfig = {
  ethers: { Contract },
  provider: getDefaultProvider('homestead'),
}

export default function NextWeb3App({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <NftProvider fetcher={['ethers', ethersConfig]}>
        <Component {...pageProps} />
      </NftProvider>
    </Web3ReactProvider>
  )
}
