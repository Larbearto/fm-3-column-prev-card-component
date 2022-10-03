import Head from 'next/head'
import Image from 'next/image'
import LuxuryIcon from '../public/icon-luxury.svg'
import SedanIcon from '../public/icon-sedans.svg'
import SuvIcon from '../public/icon-suvs.svg'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-screen min-h-screen bg-TransparentWhite'>
      <div className='flex items-center justify-center flex-none lg:flex-col lg:flex lg:w-lg w-sm'>
        <div className='flex flex-col lg:flex lg:flex-row w-[324px] lg:w-[920px]'>
          <div className='rounded-t-lg lg:rounded-l-lg bg-BrightOrange cards'>
            <SedanIcon />
            <h1>sedans</h1>
            <p>
              Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in
              the city or on your next road trip.
            </p>
            <button className='text-BrightOrange hover:bg-BrightOrange'>Learn More</button>
          </div>
          <div className='cards bg-DarkCyan '>
            <SuvIcon />
            <h1>suvs</h1>
            <p>
              Take an SUV for its spacious interior, power, and versatility. Perfect for your next
              family vacation and off-road adventures.
            </p>
            <button className='text-DarkCyan hover:bg-DarkCyan'>Learn More</button>
          </div>
          <div className='rounded-b-lg lg:rounded-r-lg cards bg-VeryDarkCyan'>
            <LuxuryIcon />
            <h1>luxury</h1>
            <p>
              Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort
              of a luxury rental and arrive in style.
            </p>
            <button className='text-VeryDarkCyan hover:bg-VeryDarkCyan'>Learn More</button>
          </div>
        </div>
      </div>
    </main>
  )
}
