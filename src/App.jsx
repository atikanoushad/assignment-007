import { Suspense } from "react";
import Count from "./components/Count"
import Navbar from "./components/Navbar"
import TicketContainer from "./components/TicketContainer";
import Tickets from "./components/Tickets";
// import Tickets from "./components/TicketContainer"

  // const loadTickets = ()=>
  //     fetch("/orders.json")
  //     .then((res)=>res.json())
  //     .then((data)=>{
  //       console.log(data)
  //     })

  //     const App =() =>{
  //       const ticketPromise=loadTickets();
   

  // const fetchTickets = async()=>{
  //   const result = await fetch("/orders.json");
  //   return result.json
  // }
  // function App(){
  //   const fetchPromise = fetchTickets()

  const ticketPromise = fetch('/orders.json').then(res=>res.json())

  function App (){

  
  return (
    <>
    {/* navbar */}
    <header>
       <Navbar></Navbar>
    </header>
   
    {/* count cards */}
    <section>
 <Suspense fallback='loading.......'>
<TicketContainer ticketPromise={ticketPromise}></TicketContainer>

 </Suspense>
        
    
      
    </section>
   
    </>
  )
}

export default App
