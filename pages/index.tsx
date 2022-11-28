import type { NextPage } from 'next'
import Head from 'next/head'
import { CallToAction } from '../components/CallToAction'
import { FeedbackCard } from '../components/FeedbackCard'
import { Hero } from '../components/Hero'
import { MainCard } from '../components/MainCard'
import { ServiceCard } from '../components/ServiceCard'
import { VideoSection } from '../components/VideoSection'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Solar Pro USA</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Hero section */}

      <Hero 
        heading='Modern And Efficient Solar Roof Experts' 
        message='Solar Pro company strives to innovate, evolve, and adapt to the modern world' />

      {/* Buisness Goals section */}

      <section className='grid grid-cols-8 relative'>
        <div className='absolute -top-10 col-start-2 col-end-8'>
          <CallToAction
            header='We believe that these principles will propel us into a new era, as people, as a community as a new world.'
            message='Our team of certified experts is here to tailor each project to your specific budget and energy needs. Whether you want to convert your business to green energy, need storage solutions, need assistance with design, or simply want to avoid your monthly utility payments, Solar Pro can help.' />
        </div>
        <h2 className='mt-60 mb-10 p-6 col-start-3 col-span-4 primary-font-color text-3xl font-bold text-center'>Our approach to reach your business goals</h2>
        <div className='col-start-2 col-span-6'>
          <div className='grid grid-cols-3'>
            <MainCard 
              imgSrc='shield.svg' 
              header='Reliability' 
              message='Take control of your energy cost! Go solar and pay the same amount for the next 25 years' />
            <MainCard 
              imgSrc='money-bag.svg' 
              header='Save Money' 
              message='Save on your utility bill. Positive return on investment in a few years' />
            <MainCard 
              imgSrc='lightbulb.svg' 
              header='Eco Friendly' 
              message='We only use trusted solar panel manufacturers that stand behind their products for long term savings' />
          </div>
        </div>
      </section>

      {/* Services section */}

      <section className='mb-60 p-4 grid grid-cols-8 gap-4 text-center'>
        <h2 className='col-start-3 col-span-4 text-3xl font-bold primary-font-color'>Our Services</h2>
        <p className='mb-10 p-4 col-start-2 col-span-6 text-xl primary-font-color'>Solar Pro is one of the fastest growing solar energy companies in the Atlanta area.  Our professional staff will guide you through the solar design and installation process to maximize your energy efficiency and savings.</p>
        <div className='col-start-2 col-span-6'>
          <div className='grid grid-cols-3 gap-4'>
            <ServiceCard 
              imageUrl='https://images.unsplash.com/flagged/photo-1566838803980-56bfa5300e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
              header='Residential'
              message='A skilled solar technician will provide you with a custom photovoltaic (PV) solar system design, proposal and advice...'
              linkHref='residential'/>
            <ServiceCard 
              imageUrl='https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
              header='Comercial'
              message='With a large portfolio of solar-powered, commercial clients, Solar Pro has a proven track record in providing customized...'
              linkHref='services/comercial'/>
            <ServiceCard 
              imageUrl='https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
              header='Maintenance'
              message='These systems can last for decades and provide your home with an abundant source of energy, but panels can lose efficiency...'
              linkHref='services/maintenance'/>
          </div>
        </div>
      </section>

      {/* Feedback section */}

      <section className='pb-40 relative gray-bg-color grid grid-cols-8 gap-4 text-center'>
        <div className='absolute -top-20 col-start-2 col-end-8 w-full'>
          <CallToAction
            header='We can help you calculate'
            headerColor='financing!'
            button={true}/>
        </div>
        <h2 className='col-start-3 col-span-4 mt-60 text-3xl primary-font-color font-bold'>Our Clients Speak</h2>
        <p className='col-start-3 col-span-4 primary-font-color text-xl'>We have been working with clients around the world</p>
        <div className='col-start-2 col-span-6'>
          <div className='grid grid-cols-3 gap-4'>
            <FeedbackCard
              heading='Efficient Collaborating'
              message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus '
              name='Jane Cooper'
              jobTitle='CEO at ABC Corporation'/>
            <FeedbackCard
              heading='Intuitive Design'
              message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus '
              name='Jane Cooper'
              jobTitle='CEO at ABC Corporation'/>
            <FeedbackCard
              heading='Mindblowing Service'
              message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus '
              name='Jane Cooper'
              jobTitle='CEO at ABC Corporation'/>
          </div>
        </div>
      </section>

      <section className='grid grid-cols-8 py-20'>
        <div className='col-start-2 col-end-8'>
          <VideoSection />
        </div>
      </section>
    </div>
  )
}

export default Home
