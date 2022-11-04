import { useRouter } from "next/router"
import Link from "next/link";
import { Images } from '../constants/Images'
import Image from 'next/image'

type LinkProps = {
  id: number,
  title: string,
  link: string,
  img?: any,
}

const LinkArray: LinkProps[] = [
  {
    id: 0,
    title: 'Hangman',
    link: '/hangman',
    img: Images.HangmanImg
  },
  {
    id: 1,
    title: 'TicTacToe',
    link: '/tictactoe',
    img: Images.TicTactToe
  },
]

const Nav = () => {

  const router = useRouter();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '200px',
      minWidth: '200px',
      fontFamily: 'monospace',
      textAlign: 'center',
      fontSize: '20px',
      borderRight: '1px solid',
      borderBottom: '1px solid',

    }}>
      {
        LinkArray.map((path: any) => {
          return (
            <Link
              key={path.id}
              href={`${path.link}`}
              passHref
              style={{
                margin: '2px 5px',
                backgroundColor: router.pathname.includes(path.link) ? 'rgb(202 229 223)' : 'white',
                color: 'rgb(0, 114, 229)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Image src={path.img} alt="some awesome" width={23} height={23} />
              {path.title}
            </Link>
          )
        })
      }
    </div>
  )
}

export default Nav