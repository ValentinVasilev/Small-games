import { useRouter } from "next/router"
import Link from "next/link";


type LinkProps = {
  id: number,
  title: string,
  link: string
}

const LinkArray: LinkProps[] = [
  {
    id: 0,
    title: 'Hangman',
    link: '/hangman'
  },
  {
    id: 1,
    title: 'TicTacToe',
    link: '/tictactoe'
  },
]

const Nav = () => {

  const router = useRouter();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '150px',
      minWidth: '150px',
      // border: '1px solid',
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

              }}
            >
              {path.title}
            </Link>
          )
        })
      }
    </div>
  )
}

export default Nav