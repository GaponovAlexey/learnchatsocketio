import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ClipboardEvent, FormEvent, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
} from '../components/redux/reducer'
import { RootState, store } from '../components/redux/store'

const Home: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const [data, setData] = useState(null)

  const submit = (e: FormEvent<HTMLFormElement> | any) => {
    e.preventDefault()
    dispatch(incrementByAmount(data))
    setData(0)
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <h2>box</h2>
        <form onSubmit={submit}>
          <input
            value={data}
            onChange={(e) => setData(e.target.value)}
            maxLength={3}
            type='number'
            style={{ width: '50px' }}
          />
        </form>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(0))}>res</button>
      </div>
    </div>
  )
}

export default Home
