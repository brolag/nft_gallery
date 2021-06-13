import { verifyMessage } from '@ethersproject/wallet'
import { useWeb3React } from '@web3-react/core'
import Head from 'next/head'
import Link from 'next/link'
import Account from '../components/Account'
import ETHBalance from '../components/ETHBalance'
import useEagerConnect from '../hooks/useEagerConnect'
import usePersonalSign, { hexlify } from '../hooks/usePersonalSign'

export default function Home() {
  const { account, library } = useWeb3React()

  const triedToEagerConnect = useEagerConnect()

  const sign = usePersonalSign()

  const handleSign = async () => {
    const msg = 'NFT Gallery'
    const sig = await sign(msg)
    console.log(sig)
    console.log('isValid', verifyMessage(msg, sig) === account)
  }

  const isConnected = typeof account === 'string' && !!library

  return (
    <div>
      <Head>
        <title>NFT Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Account triedToEagerConnect={triedToEagerConnect} />
        </nav>
      </header>

      <main>
        <h1>NFT Gallery</h1>

        {isConnected && (
          <section>
            <ETHBalance />
            <button onClick={handleSign}>Personal Sign</button>
          </section>
        )}
      </main>
    </div>
  )
}
