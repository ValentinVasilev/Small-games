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
  const Card = (props: CardPRops) => {
    return (<div style={{ minWidth: '200px', minHeight: '200px', border: '1px solid', margin: '1vh' }}>Card: {props.index}</div>)
  }


  const Row = (props: RowProps) => {
    let cards = [];
    for (let index = 0; index < props.rowNumbers * props.rowNumbers; index++) {
      cards.push(<Card key={index} index={index} />)
    }
    return cards
  }



  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: rows * 220 }}>
      <Row rowNumbers={rows} />
    </div>
  )
}

export default Field