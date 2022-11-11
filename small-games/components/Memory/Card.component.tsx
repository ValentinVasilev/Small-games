import Image from 'next/image'
import styles from '../../styles/components/memory-card.component.module.scss'
import BackImg from '../../assets/pictures/card-back.jpg'
import { useState } from 'react'

type CardProps = {
  index: number,
}

const Card = (props: CardProps) => {

  const [clicked, setClicked] = useState<boolean>(false)
  // const { artistName, text, flavorText } = props

  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          {/* <img src={props.img} alt="Avatar" style={{ width: '300px', height: '350px' }} /> */}
          <Image src={BackImg} alt="back of the card" width={200} height={200} />
        </div>
        <div className={styles.flipCardBack}
          style={{ transform: clicked ? 'rotateY(180deg)' : 'none' }}
          onClick={() => setClicked(true)}>
          {/* <h1>{artistName}</h1> */}
          {/* <div style={{ color: 'skyblue', fontFamily: 'monospace' }}>{text.replaceAll('<b>', '').replaceAll('</b>', '')}</div> */}
          <p style={{ color: 'red', fontStyle: 'italic', fontFamily: 'cursive' }}>{props.index}</p>
        </div>
      </div>
    </div >
  )
}

export default Card