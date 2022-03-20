import Web3 from 'web3/dist/web3.min.js'

const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545')
const form = document.querySelector('form')

async function send(tipValue) {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
  const wei = web3.utils.toWei(tipValue, 'ether')
  const value = web3.utils.toHex(wei)

  if (accounts.length > 0) {
    window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x261A93a996A307B9a4461de30410c2e9e8e6027e',
          value,
        },
      ],
    })
  }
}

if (window.ethereum) {
  form.classList.add('has-eth')
}

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const tipValue = event.target.elements.tip.value

  if (window.ethereum) {
    send(tipValue)
  } else {
    alert('Please install MetaMask')
  }
})
