import Web3 from 'web3/dist/web3.min.js'

const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545')
const form = document.querySelector('form')

if (window.ethereum) {
  form.classList.add('has-eth')
}

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const tipValue = event.target.elements.tip.value
})
