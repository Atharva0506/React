import { useEffect, useMemo, useState } from 'react';
import './App.css'

function App() {

  const [index,setIndex] = useState<number>(0)
  const [cities,setCities] = useState<string[]>([])
  const countries = useMemo(()=>[
    {
      name: "India",
      value: "IN",
      cities: ["Pune", "Mumbai", "Delhi", "Bangalore"]
    },
    {
      name: "United States",
      value: "US",
      cities: ["New York", "Los Angeles", "Chicago", "San Francisco"]
    },
    {
      name: "Australia",
      value: "AU",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth"]
    },
    {
      name: "United Kingdom",
      value: "UK",
      cities: ["London", "Manchester", "Birmingham", "Edinburgh"]
    },
    {
      name: "Canada",
      value: "CA",
      cities: ["Toronto", "Vancouver", "Montreal", "Calgary"]
    }
  ],[]);


  useEffect(()=>{
    setCities(countries[index].cities)
  },[index,countries])


  return (
    <>
     <select onChange={(e : React.ChangeEvent<HTMLSelectElement> )=>{
      setIndex(Number(e.target.value))
     }}>
        {countries.map((item,index)=>{
          return (<option key={index} value={index}>{item.name}</option>)
        })}
     </select>
     
     <select name="City" id="">{
       cities.map((item,index) => (<option key={index} value={item}>
        {item}
       </option>))
      }
       
     </select>
    </>
  )
}

export default App
