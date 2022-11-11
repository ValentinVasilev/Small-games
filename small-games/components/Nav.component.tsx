import { useRouter } from "next/router"
import Link from "next/link";
import { Images } from '../constants/Images'
import Image, { StaticImageData } from 'next/image'
import ReactTooltip from 'react-tooltip';
import styles from '../styles/components/nav.component.module.scss'


type LinkProps = {
  id: number,
  title: string,
  link: string,
  img: StaticImageData,
}

const LinkArray: LinkProps[] = [
  {
    id: 1,
    title: 'Hangman',
    link: '/hangman',
    img: Images.HangmanImg
  },
  {
    id: 2,
    title: 'TicTacToe',
    link: '/tictactoe',
    img: Images.TicTactToe
  },
  {
    id: 3,
    title: 'Rock,Paper or Scissors',
    link: '/rps',
    img: Images.RockPaperScissors
  },
  {
    id: 4,
    title: 'Memory Game',
    link: '/memory',
    img: Images.Memory
  },
  {
    id: 5,
    title: 'Lottery',
    link: '/lottery',
    img: Images.Lottery
  }
]

const Nav = () => {

  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <Link
        href='/'
        passHref
        style={{ margin: '2vh 0vh' }}
      >
        Home
      </Link>
      {
        LinkArray.map((path: LinkProps) => {
          return (
            <Link
              className={styles.linkStyles}
              key={path.id}
              href={`${path.link}`}
              passHref
              data-tip={path.title}
            >
              <ReactTooltip place="right" type="dark" effect="float" />
              <div className={styles.linkContainer} style={{
                backgroundColor: router.pathname.includes(path.link) ? 'rgb(202 229 223)' : 'white',
              }}>
                <Image src={path.img} alt="some awesome" width={40} height={40} />
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Nav