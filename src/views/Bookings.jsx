import React from 'react'
import Agenda_comp from '../components/agenda/Agenda_comp'
import Car_cards from '../components/agenda/Car_cards'


function Bookings() {
  return (
    <section className='container'>
      <Agenda_comp/>
      <Car_cards/>
      <Car_cards/>
      <Car_cards/>
      <Car_cards/>
    </section>
  )
}

export default Bookings