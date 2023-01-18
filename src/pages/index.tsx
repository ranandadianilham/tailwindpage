import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Item, ItemContainer } from '@/components/item'
import { Navbar as NavbarCs} from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ItemContainer />
    </>
  )
}
