import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

type PersonProps = {
  id: number,
  name: string,
  age: number,
  cityOfBirth?: string,
}

const arrayOfData: PersonProps[] = [
  {
    id: 0,
    name: 'Valentin 0',
    age: 30,
    cityOfBirth: 'Montana',
  },
  {
    id: 1,
    name: 'Valentin 1',
    age: 20,
  },
  {
    id: 2,
    name: 'Valentin 2',
    age: 15,
  },
  {
    id: 3,
    name: 'Valentin 3',
    age: 40,
  },
  {
    id: 4,
    name: 'Valentin 4',
    age: 60,
  },
]

export default function Home() {

  const [ageFilter, setAgeFilter] = useState<number>(0)
  const [personName, setPersonName] = useState<string>('')
  const [initialData, setInitialData] = useState(arrayOfData)

  const AddPerson = (personName: any) => {

    let person: any = {
      id: Math.random(),
      name: personName,
      age: Math.floor(Math.random() * 100),
      cityOfBirth: 'Montana',
    }
    setInitialData([...initialData, person])
  }


  const DeletePerson = (id: number) => {
    setInitialData(
      initialData.filter(a =>
        a.id !== id
      )
    );
  }


  const UpdatePerson = (person: PersonProps) => {
    console.log(person)
    if (!person.cityOfBirth) {
      setInitialData([...prev, person])
    }
  }

  const PersonCard = (props: PersonProps) => {

    const { id, name, age, cityOfBirth } = props

    return (
      <div
        style={{ border: '1px solid red', color: 'gold', minWidth: '250px', maxHeight: '250px', textAlign: 'center' }}
        key={id}>
        <h1>{name}</h1>
        <p>{age}</p>
        <p>{cityOfBirth}</p>
        <button onClick={() => DeletePerson(id)}>Delete Person</button>
        <button onClick={() => UpdatePerson(props)}>Update Person</button>
      </div>
    )
  }

  return (
    <div className={styles.container}>
     
      <h1 style={{ alignSelf: 'center' }}>Welcome to mini games.</h1>
      {/* <div>

        <input placeholder='Enter age ...' onChange={(e: any) => setAgeFilter(e.target.value)} />
        <input placeholder='Add new person ...' onInput={(e: any) => setPersonName(e.target.value)} />
        <button onClick={() => AddPerson(personName)}>Add</button>
        {
          initialData
            ?.filter((person: PersonProps) => person.age >= ageFilter)
            ?.map((person: PersonProps) => {
              return (
                <PersonCard
                  key={person.id}
                  age={person.age}
                  id={person.id}
                  name={person.name}
                  cityOfBirth={person.cityOfBirth}
                />
              )
            })
        }
      </div> */}
    </div>
  )
}
