import { useState } from 'react'
import Box from './components/Box'

function App() {
  
  

  return (
    <>
    
    <h1 className='text-5xl font-bold text-white drop-shadow-2xl text-center mt-24 font-inter '>Paletly! (Ahora en React)😎</h1>
    <h2 className='text-3xl font-bold text-white drop-shadow-2xl text-center mt-12 font-inter '>¡Crea tus paletas de colores, con un sólo click!🧉</h2>
    <h3 className='text-xl font-bold text-white drop-shadow-2xl text-center mt-24 font-inter '>¡Para copiar el color hacé click en copiar!🥳</h3>
    


    <div className='flex justify-between'>

      <Box/>
      <Box/>
      <Box/>
      <Box/>
      
    </div>
    <div>
    <h3 className='text-xl font-bold text-white drop-shadow-2xl text-center mt-24 font-inter'>Hecho con ❤ por <a className='underline decoration-pink-500' href="https://www.github.com/debuggersavljevich">@Debuggersavljevich </a></h3>

    </div>
    </>
  )
}

export default App
