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

      if (!winingNumbers.includes(element)) {
        setWiningNumbers((prev) => [...prev, element])
      } else {
        rotation += 1;
        continue;
      }
    }
  }

  // Generate the wining pot
  const generateWiningPot = () => {
    setPeoplePlayed(Math.floor(Math.random() * 1000000))
    setCurrentJackpot((prev: number) => prev + peoplePlayed)
  }

  // Generate the game
  const generateGame = () => {
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
    for (let index = 0; index < rotation; index++) {
      const element = Math.floor(Math.random() * 49);

      if (!winingNumbers.includes(element)) {
        setMyNumbers((prev) => [...prev, element])
      } else {
        rotation += 1;
        continue;
      }
    }
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
            {
              myNumbers.map((num: number, index: number) => {
                return <p key={index}>{num}</p>
              })
            }
            <button className={styles.btn} onClick={() => generatePlayerNumbers()}>Generate my numbers</button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Lottery