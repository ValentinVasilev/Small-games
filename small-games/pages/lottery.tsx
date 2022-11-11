import { useState, useEffect } from 'react'
import styles from '../styles/lottery.module.scss'
import { WiningNumber } from '../components/Lottery/WiningNumber.component'

const Lottery = () => {

  const [winingNumbers, setWiningNumbers] = useState<Array<number>>([])
  const [currentJackpot, setCurrentJackpot] = useState<number>(777777)
  const [peoplePlayed, setPeoplePlayed] = useState<number>(0)
  const [playerWallet, setPlayerWallet] = useState<number>(100)
  const [myNumbers, setMyNumbers] = useState<Array<number>>([])


  // Generate the wining numbers
  const generateNumbers = () => {

    let rotation = 6;

    for (let index = 0; index < rotation; index++) {
      const element = Math.floor(Math.random() * 49);

      if (winingNumbers.includes(element)) {
        console.log('this number exist', element)
        console.log(winingNumbers)
        rotation += 1;
        continue;
      }

      setWiningNumbers((prev) => [...prev, element])
    }
  }

  // Generate the wining pot
  const generateWiningPot = () => {
    setPeoplePlayed(Math.floor(Math.random() * 1000000))
    setCurrentJackpot((prev: number) => prev + peoplePlayed)
  }

  // Generate the game
  const generateGame = () => {


    if (playerWallet > 3) {
      setPlayerWallet((prev) => prev - 3)
    } else if (playerWallet < 3) {
      alert('Not enough money!')
    }

    generateWiningPot()

    if (winingNumbers.length > 0) {
      setWiningNumbers([])
      generateNumbers()

    } else {
      generateNumbers()
    }
  }


  const generatePlayerNumbers = () => {

    let rotation = 6;
    let winingNumbersArray: number[] = []
    for (let index = 0; index < rotation; index++) {
      const element = Math.floor(Math.random() * 49);

      if (!winingNumbersArray.includes(element)) {
        winingNumbersArray.push(element)
      } else {
        rotation += 1;
        continue;
      }
    }

    return setWiningNumbers(winingNumbersArray);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lottery 6/49</h1>
      <div>
        <section>
          <h4>Game Rules</h4>
        </section>
        <div>
          <section className={styles.gameSection}>
            <h3>Jackpot: ${currentJackpot.toLocaleString()}</h3>
            <h5>People Played: {peoplePlayed.toLocaleString()}</h5>
            <div className={styles.winingContainer}>
              {
                winingNumbers.map((num: number, index: number) => {
                  return <WiningNumber key={index} winingNumber={num} pickedNumbers={myNumbers} />
                })
              }
            </div>
            <button className={styles.btn} onClick={() => generateGame()}>Generate Game</button>
          </section>
          <section className={styles.playerSection}>
            <h3>Wallet: ${playerWallet}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              {
                myNumbers.map((num: number, index: number) => {
                  return <p key={index}>{num}</p>
                })
              }
            </div>

            <button className={styles.btn} onClick={() => generatePlayerNumbers()}>Generate my numbers</button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Lottery