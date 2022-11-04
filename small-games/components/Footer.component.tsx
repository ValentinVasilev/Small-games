import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/ValentinVasilev/Small-games/tree/main/small-games"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', textAlign: 'center' }}
      >
        <p style={{ fontWeight: '500', fontFamily: 'monospace', paddingRight: '2vh', fontSize: '25px' }}>Repo: {' '}</p>
        <p>
          <Image src="/github.png" alt="Vercel Logo" width={40} height={40} />
        </p>
      </a>
    </footer>
  )
}

export default Footer