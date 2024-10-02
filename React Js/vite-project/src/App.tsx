

import {  useState } from 'react';
import { Product } from './components/Product';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeContextProvider } from './context/TheamContext';

function App() {

const [time , setTime] = useState("")
  
 

    setInterval(() => {
      const t = new Date()
      if(t.getMinutes() === Number(52)) {setTime("NO time")}
      else {

        setTime(String(t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() ))
      }
    }, 1000);
  

  return (
   <ThemeContextProvider>
    <div className='text-2xl font-bold flex justify-center m-4'>{time}</div>
    <ThemeSwitcher/>
   {/* <Product/> */}
   </ThemeContextProvider>
  );
}

export default App
