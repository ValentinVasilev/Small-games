import { useEffect, useState } from 'react'
import styles from '../styles/rps.module.scss'
import Image from 'next/image'
import { RpsImages } from '../constants/rps/rpsImages'

const displayIcons = [
  RpsImages.Rock,
  RpsImages.Paper,
  RpsImages.Scissors
]


const RockPaperScissors = () => {

  const [playerOption, setPlayerOption] = useState<number>(-1)
  const [cpuOption, setCpuOption] = useState<number>(-1)

  const [cpuIsPicking, setCpuIsPicking] = useState<boolean>(false)

  const [playerWins, setPlayerWins] = useState<number>(0)
  const [playerLoses, setPLayerLoses] = useState<number>(0)

  const [cpuWins, setCpuWins] = useState<number>(0)
  const [cpuLoses, setCpuLoses] = useState<number>(0)

  const handlePlayerOption = (value: number) => {
    setPlayerOption(value)
    setCpuIsPicking(true)
    setTimeout(() => {
      setCpuOption(Math.floor(Math.random() * 3))
      setCpuIsPicking(false)
    }, 1000)
  }

  const checkForWiner = (player: number, cpu: number) => {
    if (player === 0 && cpu === 2) {
      setPlayerWins((win: any) => win + 1)
      setCpuLoses((lose: any) => lose + 1)
    } else if (player === 1 && cpu === 0) {
      setPlayerWins((win: any) => win + 1)
      setCpuLoses((lose: any) => lose + 1)
    } else if (player === 2 && cpu === 1) {
      setPlayerWins((win: any) => win + 1)
      setCpuLoses((lose: any) => lose + 1)
    } else if (cpu === 0 && player === 2) {
      setCpuWins((win: any) => win + 1)
      setPLayerLoses((lose: any) => lose + 1)
    } else if (cpu === 1 && player === 0) {
      setCpuWins((win: any) => win + 1)
      setPLayerLoses((lose: any) => lose + 1)
    } else if (cpu === 2 && player === 1) {
      setCpuWins((win: any) => win + 1)
      setPLayerLoses((lose: any) => lose + 1)
    } else if (
      player === 0 && cpu === 0 ||
      player === 1 && cpu === 1 ||
      player === 2 && cpu === 2
    ) {
      setPlayerWins((win: any) => win + 0)
      setPLayerLoses((lose: any) => lose + 0)
      setCpuWins((win: any) => win + 0)
      setCpuLoses((lose: any) => lose + 0)
      
    }
  }
  useEffect(() => {
    checkForWiner(playerOption, cpuOption)
  }, [playerOption, cpuOption])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rock, Paper or Scissors</h1>
      <main>
        <div className={styles.gameContainer}>
          {
            cpuIsPicking
              ? <p>Cpu is Picking...</p>
              : <Image src={displayIcons[cpuOption] || RpsImages.CpuIcon} alt="rock" width={140} height={140} />
          }

        </div>
        <div className={styles.infoContainer}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '75%' }}>
            <p style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>Win: {cpuWins}</p>
            <p style={{ color: 'skyblue', fontSize: '20px', fontWeight: 'bold' }}>CPU</p>
            <p style={{ color: 'red', fontSize: '20px', fontWeight: 'bold' }}>Lose: {cpuLoses}</p>
          </div>
          <p style={{ color: 'green', fontSize: '20px' }}>Vs</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '75%' }}>
            <p style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>Win: {playerWins}</p>
            <p style={{ color: 'skyblue', fontSize: '20px', fontWeight: 'bold' }}>You</p>
            <p style={{ color: 'red', fontSize: '20px', fontWeight: 'bold' }}>Lose: {playerLoses}</p>
          </div>
        </div>
        <div className={styles.gameContainer}>
          <Image src={displayIcons[playerOption] || RpsImages.HumanIcon} alt="rock" width={140} height={140} />
        </div>
        <button type='button' className={styles.btnStyle} onClick={() => handlePlayerOption(0)}>
          <Image src={RpsImages.Rock} alt="rock" width={40} height={40} />
          <p>Rock</p>
        </button>
        <button type='button' className={styles.btnStyle} onClick={() => handlePlayerOption(1)}>
          <Image src={RpsImages.Paper} alt="rock" width={40} height={40} />
          <p>Paper</p>
        </button>
        <button type='button' className={styles.btnStyle} onClick={() => handlePlayerOption(2)}>
          <Image src={RpsImages.Scissors} alt="rock" width={40} height={40} />
          <p>Scissors</p>
        </button>
      </main>
    </div>
  )
}

export default RockPaperScissors