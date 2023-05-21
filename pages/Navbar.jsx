import { React } from 'react'

const Navbar = ({ account, connectWallet }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-gray-900 to-gray-700 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-3xl tracking-tight">
          Web3 Voting DAPP
        </span>
      </div>
      <div className="flex">
        {account ? (
          <button
            type="button"
            className='className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-m font-bold'
          >
            {account.slice(0, 6) + '...' + account.slice(38, 42)}
          </button>
        ) : (
          <button
            type="button"
            className='className="bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded"'
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar

/*
Don't forget to pass the parameters account and setAccount in app.js while importing
*/
