import { useState } from 'react'
import './App.css'
import { useStateContext } from './context'
import search from './assets/icons/search.svg'
import { BackgroundLayout, WeatherCard, MiniCard } from './components'
function App() {
  const [input, setInput] = useState('')
  const { weather, thisLocation, values,place,setPlace} = useStateContext()
  const submitCity=()=>{
    setPlace(input)
    setInput('')
  }

  return (
    <div className="w-full h-screen text-white px-8 py-0">
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-4xl text-black sm:text-2xl'>Weathernaut</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2 sm:gap-1'>
          <img src={search} alt="search" className='h-[1.5rem] w-[1.5rem]' />
          <input onKeyUp={(e) => {
            if (e.key === 'Enter') {
              submitCity()
            }
          }} type="text" placeholder="Search City"className='focus:outline-none text-black w-full text-lg' value={input} onChange={e => setInput(e.target.value)} />
        </div>

      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className='flex flex-wrap w-full gap-4 py-4 px-[10%] md
      :px-[5%] items-center justify-center '>
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />

        <div className='flex justify-center gap-4 flex-wrap w-[60%]'>
          {
            values?.slice(1, 7).map(curr => {
              return (
                <MiniCard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              )
            })
          }
        </div>
      </main>

    </div>
  )
}

export default App
