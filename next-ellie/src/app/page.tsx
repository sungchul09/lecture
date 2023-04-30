import Image from 'next/image'
import { Inter } from 'next/font/google'
import os from 'os' // node APIs

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(os.hostname())
  return (
    <h1>HomePage다</h1>
  )
}
