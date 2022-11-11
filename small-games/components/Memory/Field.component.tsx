import Card from '../Memory/Card.component';

type FieldProps = {
  rows: number,
  columns: number
}


const Field = (props: FieldProps) => {

  const { rows, columns } = props


  type RowProps = {
    rowNumbers: number,
  }

  type CardPRops = {
    index: number
  }

  // const Card = (props: CardPRops) => {
  //   return (<div style={{ minWidth: '200px', minHeight: '200px', border: '1px solid', margin: '1vh' }}>Card: {props.index}</div>)
  // }


  type CardPRops2 = {
    index: number,
    img: string
  }

  // const Card = (props: CardPRops2) => {

  //   // const { artistName, text, flavorText } = props

  //   return (
  //     <div className="flip-card">
  //       <div className="flip-card-inner">
  //         <div className="flip-card-front">
  //           <img src={props.img} alt="Avatar" style={{ width: '300px', height: '350px' }} />
  //         </div>
  //         <div className="flip-card-back">
  //           <h1>{artistName}</h1>
  //           <div style={{ color: 'skyblue', fontFamily: 'monospace' }}>{text.replaceAll('<b>', '').replaceAll('</b>', '')}</div>
  //           <p style={{ color: 'red', fontStyle: 'italic', fontFamily: 'cursive' }}>{flavorText}</p>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }


  const Row = (props: RowProps) => {
    let cards = [];
    for (let index = 1; index <= props.rowNumbers * 2; index++) {
      cards.push(<Card key={index} index={index} />)
    }
    return cards
  }



  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: rows * 220 }}>
      <Row rowNumbers={rows} />
      {/* <Card index={1}/> */}
    </div>
  )
}

export default Field