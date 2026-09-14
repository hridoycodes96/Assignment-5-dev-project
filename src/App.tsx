

import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Explor from "./components/Explor"
import Nav from "./components/Nav"

import type { Iobject } from "./types/objectType";
import TechContainer from "./components/TechContainer";
import StackSidebar from "./components/StackSidebar";
import { toast } from "react-toastify";
import Footer from "./Footer";



const fetchTechData = async (): Promise<Iobject[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data
}

function App() {
  const [techPromise] = useState(() => fetchTechData());
  const [selectedStack, setSelectedStack] = useState<Iobject[]>([]);

  const handleRemoveFromStack = (id: number) => {
    const removedItem = selectedStack.find((item) => item.id === id);

    setSelectedStack(selectedStack.filter((item) => item.id !== id));

    if (removedItem) {
      toast.info(`${removedItem.name} removed from stack.`, {
        position: "bottom-right",
        autoClose: 2000,
        theme: "light",
      });
    }
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);

    toast.error("Cleared all technologies from stack.", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "light",
    });
  };



  return (
    <main className="w-full pb-12">
        <Nav></Nav>
      <Banner></Banner>
      <Explor></Explor>
    


           <div className="container mx-auto px-4 lg:px-8 mt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Suspense
              fallback={
                <p className="text-center py-10 font-medium">
                  Technologies Data Loading...
                </p>
              }
            >
              <TechContainer
                techPromise={techPromise}
                selectedStack={selectedStack}
                setSelectedStack={setSelectedStack}
              />
            </Suspense>
          </div>

          <div className="lg:col-span-1">
            <StackSidebar
              selectedStack={selectedStack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </div>

      <Footer />


    </main>
    

    
  )
}

export default App
