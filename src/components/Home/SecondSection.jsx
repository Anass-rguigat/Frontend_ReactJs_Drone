import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const CounterPage = () => {
  const [counterState, setCountState] = useState(false)

  return (
    <div className='bg-gradient-to-b from-[#1f1f1f] via-black to-[#1f1f1f] px-6 sm:px-12 md:px-20 lg:px-40 py-10 flex items-center justify-center'>
      <ScrollTrigger onEnter={() => setCountState(true)} onExit={() => setCountState(false)}>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center max-w-5xl'>
          <div>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ffffff]'>
              {counterState && <CountUp start={0} end={2000} duration={2.75} />}
            </h2>
            <p className='py-2 text-[#b8b8b8] font-medium'>Shows</p>
          </div>
          <div>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ffffff]'>
              {counterState && <CountUp start={0} end={100} duration={2.75} />}%
            </h2>
            <p className='py-2 text-[#b8b8b8] font-medium'>Satisfied Clients</p>
          </div>
          <div>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ffffff]'>
              {counterState && <CountUp start={0} end={500} duration={2.75} />}
            </h2>
            <p className='py-2 text-[#b8b8b8] font-medium'>Number of Drones</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  )
}

export default CounterPage
