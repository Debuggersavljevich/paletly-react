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
          
         
            const [disable, setDisable] = useState(false);
           


       


  return (
    <>
    <div onClick={()=>navigator.clipboard.writeText(color)} style={{ backgroundColor: color }} className='mt-28 ml-8 mr-8 h-72 w-72 bg-red-200 rounded-t-[16px] drop-shadow-xl transition-colors text-center cursor-pointer border-2 border-white hover:transition-all hover:h-80 hover:w-80'>
                
        <button disabled={disable} onClick={handleGenerate} className='bg-white rounded-md h-12 w-24 relative top-48  hover:bg-indigo-200 transition-colors'>Generar!</button>
        
        

        <div>
            <span className='font-bold text-white'>{color}</span>
            <button id='generator' onClick={notify} className='ml-6 h-12 w-24 bg-white rounded-md'>copiar</button>
        </div>
        <div className='mt-6 text-center'>
          <button onClick={() => setDisable(true)}><svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/></svg></button>
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