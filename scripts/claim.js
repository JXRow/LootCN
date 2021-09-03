const hre = require('hardhat')
const fs = require('fs')
const { BigNumber } = require('ethers')

var lootAddress = '0x1b708d4aaeb4bb2acb190bdd7aeaf66ec42e35b6'

async function claim() {
    const accounts = await hre.ethers.getSigners()

    const abi = getAbi('./artifacts/contracts/LootCN.sol/LootCN.json')
    const loot = new ethers.Contract(lootAddress, abi, accounts[0])

    await loot.claim(b(1), {gasLimit:b('8000000'), value:m(10)})
}


async function view() {
    const accounts = await hre.ethers.getSigners()

    const abi = getAbi('./artifacts/contracts/LootCN.sol/LootCN.json')
    const loot = new ethers.Contract(lootAddress, abi, accounts[0])

    console.log('tokenURI()', await loot.tokenURI(b(1)))
}


function getAbi(jsonPath) {
    let file = fs.readFileSync(jsonPath)
    let abi = JSON.parse(file.toString()).abi
    return abi
}

function b(num) {
    return BigNumber.from(num)
}

function n(bn) {
    return bn.toNumber()
}

async function delay(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, sec * 1000);
    })
}

main()