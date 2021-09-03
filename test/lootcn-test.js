const { BigNumber } = require('ethers')

describe('lootcn-test', function () {
	let accounts
	let loot

	before(async function () {
		accounts = await ethers.getSigners()
	})
	
	it('deploy', async function () {
        const LootCN = await ethers.getContractFactory('LootCN')
		loot = await LootCN.deploy()
		await loot.deployed()

        console.log('name', await loot.name())
	})

	it('set', async function () {
        await loot.setWeapons([
            "战锤",
            "铁头木棒",
            "大槌",
            "狼牙棒",
            "棍棒",
            "武士刀",
            "大刀",
            "弯刀",
            "长剑",
            "短剑",
            "幽灵权杖",
            "死亡权杖",
            "骨头权杖",
            "权杖",
            "魔法书",
            "编年史",
            "巨著",
            "书本"
        ])

        let w = await loot.weapons(b(0))
        console.log('w', w)
	})


	function b(num) {
		return BigNumber.from(num)
	}

	function n(bn) {
		return bn.toNumber()
	}
})