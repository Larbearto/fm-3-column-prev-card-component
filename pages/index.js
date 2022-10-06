import Head from 'next/head'
import Image from 'next/image'
import LuxuryIcon from '../public/luxuryIcon'
import SedanIcon from '../public/sedanIcon'
import SuvIcon from '../public/suvIcon'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center max-w-full min-h-screen bg-TransparentWhite'>
      <div className='lg:flex lg:justify-center lg:items-center lg:max-w-[920px] max-w-[330px]'>
        <div className='lg:max-w-[330px] lg:max-h-[500px] rounded-t-lg bg-BrightOrange lg:rounded-tr-none lg:rounded-l-lg'>
          <div className='pt-10 pl-12 pr-12 lg:pr-10'>
            <SedanIcon />
            <h1 className=''>SEDANS</h1>
            <p>
              Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in
              the city or on your next road trip.
            </p>
            <div className='pt-6 pb-11 lg:pt-8'>
              <button className='text-BrightOrange'>Learn More</button>
            </div>
          </div>
        </div>
        <div className='lg:max-w-[330px] lg:max-h-[500px] bg-DarkCyan'>
          <div className='pt-10 pl-12 pr-12 lg:pr-10'>
            <SuvIcon />
            <h1>SUVS</h1>
            <p className=''>
              Take an SUV for its spacious interior, power, and versatility. Perfect for your next
              family vacation and off-road adventures.
            </p>
            <div className='pt-6 pb-11 lg:pt-8'>
              <button className='text-DarkCyan hover:bg-DarkCyan'>Learn More</button>
            </div>
          </div>
        </div>
        <div className='rounded-b-lg lg:max-w-[330px] lg:max-h-[500px] bg-VeryDarkCyan lg:rounded-r-lg lg:rounded-bl-none'>
          <div className='pt-10 pl-12 pr-12 lg:pr-10'>
            <LuxuryIcon />
            <h1>LUXURY</h1>
            <p>
              Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort
              of a luxury rental and arrive in style.
            </p>
            <div className='pt-6 pb-11 lg:pt-8'>
              <button className='text-VeryDarkCyan hover:bg-VeryDarkCyan'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
