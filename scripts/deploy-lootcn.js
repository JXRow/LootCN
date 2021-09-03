const hre = require('hardhat')
const fs = require('fs')
const { BigNumber } = require('ethers')

lootAddress = '0x1b708d4aaeb4bb2acb190bdd7aeaf66ec42e35b6'

async function main() {
    const accounts = await hre.ethers.getSigners()

    const LootCN = await hre.ethers.getContractFactory('LootCN')
    const loot = await LootCN.deploy()
    await loot.deployed()
    console.log('LootCN deployed to:', loot.address)
}


async function init() {
    const accounts = await hre.ethers.getSigners()

    const abi = getAbi('./artifacts/contracts/LootCN.sol/LootCN.json')
    const loot = new ethers.Contract(lootAddress, abi, accounts[0])

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
    ], {gasLimit:b('8000000')})

    await loot.setChestArmor([
        "神之长袍",
        "丝绸长袍",
        "亚麻长袍",
        "长袍",
        "衬衫",
        "恶魔之壳",
        "龙鳞铠甲",
        "铆钉铠甲",
        "硬皮铠甲",
        "皮革铠甲",
        "圣之胸甲",
        "华丽胸甲",
        "板甲",
        "锁子甲",
        "锁环甲"
    ], {gasLimit:b('8000000')})

    await loot.setHeadArmor([
        "上古头盔",
        "华丽头盔",
        "卓越头盔",
        "高级头盔",
        "头盔",
        "恶魔皇冠",
        "龙之皇冠",
        "战帽",
        "皮帽",
        "帽子",
        "皇冠",
        "神之头罩",
        "丝绸头罩",
        "亚麻头罩",
        "头罩"
    ], {gasLimit:b('8000000')})

    await loot.setWaistArmor([
        "华丽皮带",
        "战争皮带",
        "镀金皮带",
        "网格皮带",
        "重型皮带",
        "魔皮皮带",
        "龙鳞皮带",
        "铆钉皮带",
        "硬皮皮带",
        "皮带",
        "光明肩带",
        "丝绸肩带",
        "羊毛肩带",
        "亚麻肩带",
        "肩带"
    ], {gasLimit:b('8000000')})

    await loot.setFootArmor([
        "圣之腿甲",
        "华丽腿甲",
        "腿甲",
        "链条靴",
        "重型靴",
        "魔皮靴",
        "龙鳞靴",
        "铆钉靴",
        "硬皮靴",
        "皮靴",
        "圣之拖鞋",
        "丝绸拖鞋",
        "羊毛鞋",
        "亚麻鞋",
        "鞋子"
    ], {gasLimit:b('8000000')})

    await loot.setHandArmor([
        "神之长手套",
        "华丽长手套",
        "长手套",
        "链条手套",
        "重型手套",
        "恶魔之手",
        "龙鳞手套",
        "铆钉手套",
        "硬皮手套",
        "皮手套",
        "圣之手套",
        "丝绸手套",
        "羊毛手套",
        "麻布手套",
        "手套"
    ], {gasLimit:b('8000000')})

    await loot.setNecklaces([
        "项链",
        "护身符",
        "吊坠"
    ], {gasLimit:b('8000000')})

    await loot.setRings([
        "金戒指",
        "银戒指",
        "铜戒指",
        "白金戒指",
        "钛金戒指"
    ], {gasLimit:b('8000000')})

    await loot.setSuffixes([
        "强力型",
        "巨人型",
        "泰坦型",
        "技能型",
        "完美型",
        "才华型",
        "启蒙型",
        "保护型",
        "愤怒型",
        "狂怒型",
        "狂暴型",
        "刻薄型",
        "狐狸型",
        "侦查型",
        "反射型",
        "双生型"
    ], {gasLimit:b('8000000')})

    await loot.setNamePrefixes([
        "痛苦","天启","末日","野兽","巨兽","枯萎","血","荆棘",
        "硫磺","焦虑","腐朽","灾难","妄想","僵尸","腐败","诅咒",
        "死亡","恶魔","可怕","龙","恐惧","厄运","黄昏","鹰","苍天","命运","敌",
        "狂风","食尸鬼","忧郁","符文","傀儡","严肃","恨","破坏","荣誉","恐怖","催眠",
        "海怪","厌恶","漩涡","思想","奇迹","病态","遗忘","猛攻","痛",
        "混乱","凤凰","瘟疫","狂怒","狂喜","符号","骷髅","索尔","灵魂","悲伤",
        "心灵","风暴","暴风","折磨","复仇","胜利","毒蛇","漩涡","悲哀","愤怒",
        "光之","微光"
    ], {gasLimit:b('8000000')})

    await loot.setNameSuffixes([
        "克星",
        "之根",
        "咬",
        "歌",
        "吼",
        "之悟",
        "乐器",
        "之光",
        "扭曲",
        "之影",
        "耳语",
        "呐喊",
        "咆哮",
        "眼泪",
        "巅峰",
        "形态",
        "之阳",
        "之月"
    ], {gasLimit:b('8000000')})

}


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

function m(num) {
    return BigNumber.from('1000000000000000000').mul(num)
}

function d(bn) {
    return bn.div('1000000000000000').toNumber() / 1000
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

init()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
