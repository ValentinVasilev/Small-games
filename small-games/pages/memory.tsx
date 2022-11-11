import { useEffect, useState } from "react"
import Field from "../components/Memory/Field.component"
import styles from '../styles/memory.module.scss'

const Memory = () => {

  const [size, setSize] = useState<number>(0)


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Memory Game</h1>
      <select id="cars" onChange={(e: any) => setSize(e.currentTarget.value)} >
        <option defaultChecked value={0}>Pick a size</option>
        <option value={4}>8 (noob)</option>
        <option value={6}>12 (Some experiance)</option>
        <option value={8}>16 (Experianced)</option>
        <option value={10}>20 (Expert)</option>
      </select>
      <Field rows={size} columns={size} />
    </div>
  )
}

export default Memory