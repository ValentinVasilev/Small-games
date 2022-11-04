import { useState } from 'react'
import styles from '../styles/tictactoe.module.scss'


const TicTacToe = () => {

  const [turn, setTurn] = useState<string>('x');
  const [cells, setCells] = useState<any[]>(Array(9).fill(''));
  const [winner, setWinner] = useState<string | null>();

  const checkForWinner = (squares: any) => {

    let combos: any = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern: any) => {
        if (
          squares[pattern[0]] === '' ||
          squares[pattern[1]] === '' ||
          squares[pattern[2]] === ''
        ) {
          // do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num: number) => {
    if (cells[num] !== '') {
      alert('already clicked');
      return;
    }

    if (winner) {
      alert('Game is over!')
      return;
    }

    let squares = [...cells];

    if (turn === 'x') {
      squares[num] = 'x';
      setTurn('o');
    } else {
      squares[num] = 'o';
      setTurn('x');
    }

    checkForWinner(squares);
    setCells(squares);
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(''));
    setTurn('x')
  };

  type CellProps = {
    num: number
  }

  const Cell = (props: CellProps) => {

    const { num } = props

    return (<td className={styles.cellStyle} onClick={() => handleClick(num)}>{cells[num]}</td>);
  }



  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tic Tac Toe</h1>
      <p style={{ fontSize: '25px', fontStyle: 'italic', backgroundColor: 'white' }}>On turn is: <b>{turn}</b></p>
      <table style={{
        maxWidth: '50%',
        minWidth: '450px',
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",

      }}>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <p style={{ color: 'green', fontSize: '35px' }}>{winner.toUpperCase()} is the winner!</p>
          <button style={{cursor: 'pointer', fontSize: '25px', fontFamily:"cursive"}} onClick={() => handleRestart()}>Play Again</button>
        </>
      )}
    </div>
  )
}

export default TicTacToe




