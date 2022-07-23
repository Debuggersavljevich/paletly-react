import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Box = () => {

        const notify = () => toast.success('🤩 Color copiado!', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    
        const [color, setColor] = useState('#000')
      
        const getRgb = () => Math.floor(Math.random() * 256)
      
        const rgbToHex = (r, g, b) =>
          '#' +
          [r, g, b]
            .map(x => {
              const hex = x.toString(16)
              return hex.length === 1 ? '0' + hex : hex
            })
            .join('')
      
        const handleGenerate = () => {
          const color = {
            r: getRgb(),
            g: getRgb(),
            b: getRgb(),
          }
      
          setColor(rgbToHex(color.r, color.g, color.b))}



       


  return (
    <>
    <div onClick={()=>navigator.clipboard.writeText(color)} style={{ backgroundColor: color }} className='mt-28 ml-8 mr-8 h-72 w-72 bg-red-200 rounded-t-[16px] drop-shadow-xl transition-colors text-center cursor-pointer border-4 border-white'>
                
        <button onClick={handleGenerate} className='bg-white rounded-md h-12 w-24 relative top-48  hover:bg-indigo-200 transition-colors'>Generar!</button>
        
        <div>
            <span className='font-bold text-white'>{color}</span>
            <button onClick={notify} className='ml-6 h-12 w-24 bg-white rounded-md'>copiar</button>
        </div>
    </div>

    <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />


    </>
  )
}

export default Box;