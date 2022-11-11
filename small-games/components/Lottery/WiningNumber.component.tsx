import React from "react"

type WiningNumberProps = {
  winingNumber: number,
  pickedNumbers: number[]
}

export const WiningNumber = (props: WiningNumberProps) => {
  return (<div
    style={{
      borderRadius: '100%',
      margin: '2vh',
      padding: '1vh',
      minHeight: '20px',
      minWidth: '50px',
      textAlign: 'center',
      backgroundColor: props.pickedNumbers?.includes(props.winingNumber) ? 'yellow' : 'white'
    }}>{props.winingNumber}</div>)
}