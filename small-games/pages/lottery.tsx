import { useState, useEffect } from 'react'
import styles from '../styles/lottery.module.scss'
import { WiningNumber } from '../components/Lottery/WiningNumber.component'

const Lottery = () => {

  const [winingNumbers, setWiningNumbers] = useState<Array<number>>([])
  const [currentJackpot, setCurrentJackpot] = useState<number>(777777)
  const [peoplePlayed, setPeoplePlayed] = useState<number>(0)
  const [playerWallet, setPlayerWallet] = useState<number>(100)
  const [myNumbers, setMyNumbers] = useState<Array<number>>([2, 15, 7, 38, 42, 27])

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

  const generateWiningPot = () => {
    setPeoplePlayed(Math.floor(Math.random() * 1000000))
    setCurrentJackpot((prev: any) => prev + peoplePlayed)
  }

  const generateWiningNumbers = () => {
    generateWiningPot()

    if (winingNumbers.length > 0) {
      setWiningNumbers([])
      generateNumbers()

    } else {
      generateNumbers()
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lottery 6/49</h1>
      <h3>Jackpot: ${currentJackpot.toLocaleString()}</h3>
      <h5>People Played: {peoplePlayed}</h5>
      <div className={styles.winingContainer}>
        {
          winingNumbers.map((num: number, index: number) => {
            return <WiningNumber key={index} winingNumber={num} pickedNumbers={myNumbers} />
          })
        }
      </div>

      <button className={styles.btn} onClick={() => generateWiningNumbers()}>Generate Numbers</button>
    </div>
  )
}

export default Lottery