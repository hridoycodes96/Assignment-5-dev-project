

import { Suspense } from "react";
import Banner from "./components/Banner"
import Explor from "./components/Explor"
import Nav from "./components/Nav"
import Objects from "./components/Objects/Objects";
import type { Iobject } from "./types/objectType";



const objectfetch = async():Promise<Iobject[]> =>{
   const res = await fetch('/data.json');
   const data = await res.json();
   return data 
}


function App() {
  // console.log(objectsPromise)
  const objectsPromise = objectfetch()

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Explor></Explor>
      <Suspense fallback={<h2>Loading ...</h2>}>

      <Objects objectsPromise ={objectsPromise} />
      </Suspense>
      
    </>
  )
}

export default App
