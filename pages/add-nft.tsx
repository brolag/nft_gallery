import useEagerConnect from '@hooks/useEagerConnect'
import Header from '@components/Header'
import NFTRegistrationForm from '@components/NFTRegistrationForm'

export default function AddNeft() {
  const triedToEagerConnect = useEagerConnect()
  return (
    <div>
      <Header triedToEagerConnect={triedToEagerConnect} />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <NFTRegistrationForm />
        </div>
      </main>
    </div>
  )
}
