import useEagerConnect from '@hooks/useEagerConnect'
import Header from '@components/Header'
import NFTRegistrationForm from '@components/NFTRegistrationForm'
import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function AddNeft() {
  const triedToEagerConnect = useEagerConnect()
  const { account } = useWeb3React()
  const router = useRouter()

  useEffect(() => {
    if (!account) {
      router.push('/')
    }
  }, [])

  return (
    <>
      {account ? (
        <div>
          <Header triedToEagerConnect={triedToEagerConnect} />
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <NFTRegistrationForm />
            </div>
          </main>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
