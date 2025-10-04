import React, { use }  from 'react';
import Count from './Count';
import { Ticket, Tickets } from 'lucide-react';

// import { use } from 'react';

// const TicketContainer = ({promise}) => {
//     console.log(promise);
    // const tickets = use(promise);
    // console.log(tickets);
   

    
function TicketContainer({ticketPromise}){
    const loadTicket = use(ticketPromise)
    console.log(loadTicket)
    // const initialData = use(fetchPromise);
    // console.log(initialData);

    return (
        // initialData.map((issue) => {
        //         console.log(issue);
        //         return <h2> My</h2>
        //     })


        <div>
            <Count></Count>

            
            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>

                <div className='col-span-9' id='ticket-container'>
                    <h2>Customer Tickets</h2>
                    
                    
                    
                </div>
                <div>
                    <div className='col-span-3'>
                        <h2>Tickets Status</h2>
                    </div>
                </div>
             </section>    
            </div>
       
    );
};

export default TicketContainer;