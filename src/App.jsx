import Flecha1 from "./Flecha1";

const App = () => { 
  return(
    <>
    <div className=" bg-[url('./assets/images/Fondo001.png')] bg-contain bg-no-repeat bg-white min-h-screen ">
    <header className="container mx-auto px-4">
        <div className="flex justify-around pt-10">
          <h1 className="uppercase text-2xl font-semibold text-white " >Blogr</h1>
          <button></button> 
          
          
            
              <h3 className="uppercase text-xs font-semibold text-white py-2" >Product <button><Flecha1></Flecha1></button></h3> 
              
              
              <h1 className="uppercase text-xs font-semibold text-white py-2" >Company<button><Flecha1></Flecha1></button></h1> 
              
              <h1 className="uppercase text-xs font-semibold text-white py-2" >Connect<button><Flecha1></Flecha1></button></h1> 
            
            
            <div className="flex justify-around ml-15 mr-15">
              <form className="uppercase text-sm font-semibold text-white rounded-full border-2 px-4 py-4" >  log in   </form>
              <form className="uppercase text-sm font-semibold text-black rounded-full border-2 px-4 py-4 bg-white" >  sing up  </form>
            </div>
            </div>
            </header>
            <br />
            <br />
          
        <section>
            <div className="py-12 my-12">
              <div className="flex justify-center  ">
                <h3 className="uppercase text-2xl font-semibold text-white " >  A modern publishing platafom </h3>
              </div>
              <div className="flex justify-center ">
                <h3 className="uppercase text-sm font-semibold text-white " >  grow you audience and buil your online  </h3>
              </div>
              <br />
              <br />
              <section className="">
                <div className="flex  justify-center gap-4">
                  <form className="uppercase text-sm font-semibold text-white rounded-full border-2 px-4 py-4" >  star for free  </form>
                  <form className="uppercase text-sm font-semibold text-black rounded-full border-2 px-4 py-4 bg-white" >  learn more   </form>
                </div>
              </section>
            </div>
        </section>

          <button></button>

        </div>
        <main>
          <section className="bg-gray-800 w-full h-screen flex items-end justify-start relative overflow-"></section>
        </main>
    
      
    
    </>
  )
 }
 export default App;
