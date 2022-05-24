import Banner from '@components/Banner'
import Featured from '@components/Featured'
import Popular from '@components/Popular'
import { useState } from 'react'
import Wrapper from './wrapper'

export default function Home() {

  return (
    <Wrapper title="Home">
      <Banner />
      <Featured />
      <Popular />
    </Wrapper>
  )
}
