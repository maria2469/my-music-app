import React, { Fragment } from 'react'
import ChatBot from '../components/ChatBot/ChatBot'
import Hero from '../components/Hero/Hero'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <section className="flex flex-col items-center">
        <Hero />
        <ChatBot />
      </section>
    </Fragment>
  )
}
