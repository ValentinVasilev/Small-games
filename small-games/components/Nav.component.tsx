import { useRouter } from "next/router"
import Link from "next/link";
import { Images } from '../constants/Images'
import Image from 'next/image'
import ReactTooltip from 'react-tooltip';
import styles from '../styles/components/nav.component.module.scss'


type LinkProps = {
  id: number,
  title: string,
  link: string,
  img?: any,
}

const LinkArray: LinkProps[] = [
  // {
  //   id: 0,
  //   title: 'Home',
  //   link: '/',
  // },
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
        LinkArray.map((path: any) => {
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