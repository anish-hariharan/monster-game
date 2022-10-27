const choosenMaxLife = 100;
const healValue = 10;
const attackValue = 10;
const strongAttack = 20;
let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;
let hasBonusLife = true;
let monsterWins = 0;
let playerWins = 0;

const playerName = () => {
    let playername = prompt("enter your name ")
    if(!playername){
        return playername = 'Player'
    }else{
        return document.querySelectorAll('span')[0].innerHTML = `${playername.charAt(0).toUpperCase()+playername.slice(1)} HEALTH`
    }
}

const names =  playerName()

adjustHealthBars(choosenMaxLife)

const newGame = () => {
    if(hasBonusLife === false){
        alert('new game is reloading...')
        addBonusLife()
        hasBonusLife = true
        resetValues()
    }
}

const resetValues = () => {
    resetGame(100)
    currentMonsterHealth = choosenMaxLife
    currentPlayerHealth = choosenMaxLife
    lifeUsed = 0
    srtongleft = 0
}

const endRound = () => {
    if(currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        alert('You have a bonus life !')
        resetValues()
    }else{
        newGame()
    }
}

const onAttack = () => {
    const damage = dealMonsterDamage(attackValue)
    currentMonsterHealth -= damage
    const playerDamage = dealPlayerDamage(20)
    currentPlayerHealth -= playerDamage
    if(currentMonsterHealth <= 0){
        alert('You Won!')
        playerWins += 1
        endRound()
    }else if (currentPlayerHealth <= 0) {
        alert("You Lost!")
        monsterWins += 1
        endRound()
    }
}

var lifeUsed = 0
let life = 3;
const onHeal = () => {
    if(life <= lifeUsed){
        alert("You Had Used All Of Your Life !")
    }else if(currentPlayerHealth <= 90){
        increasePlayerHealth(healValue)
        lifeUsed = lifeUsed + 1
        currentPlayerHealth += healValue
        alert(`${lifeUsed} were used ${life - lifeUsed} lives were left`)
    }
}

const strongattacks = 3;
let srtongleft = 0
const onStrongAttack = () => {
    if(strongattacks <= srtongleft){
        alert("No Strong Attack Left")
    }else{
        const damage = dealMonsterDamage(strongAttack)
        currentMonsterHealth -= damage
        srtongleft += 1
        alert(`${srtongleft} were used ${strongattacks - srtongleft} abilities were left`)
    }
}

const logButton = () => {
    alert(`The Monster score is ${monsterWins} and the ${names.split(" ")[0]} score is ${playerWins}`)
}

attackBtn.addEventListener('click', onAttack)
healBtn.addEventListener('click', onHeal)
strongAttackBtn.addEventListener('click', onStrongAttack)
logBtn.addEventListener("click", logButton)