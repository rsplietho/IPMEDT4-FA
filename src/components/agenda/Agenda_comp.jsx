import { useState } from 'react';
import Calendar from 'react-calendar';
import '../../styles/components/agenda/agenda.css';

const Agenda_comp = () => {
    const [date, setDate] = useState(new Date());
    
    const specialDays = [
        { date: new Date(), className: 'special-day' }, // Huidige dag toegevoegd
      ];

      const tileClassName = ({ date }) => {
        const specialDay = specialDays.find((day) =>
          isSameDay(day.date, date)
        );
        return specialDay ? specialDay.className : null;
      };

      const isSameDay = (date1, date2) => {
        return (
          date1.getDate() === date2.getDate() &&
          date1.getMonth() === date2.getMonth() &&
          date1.getFullYear() === date2.getFullYear()
        );
      };

    return (
        <div className='app'>
          <h1 className='text-center'>Calendar</h1>
          <div className='calendar-container'>
            
            <Calendar 
            onChange={setDate}
            value={date}
            locale="nl-NL"
            tileClassName={tileClassName}
            />
          </div>
          <p className='text-center1'>  
          <span className='day'>
            {date.toLocaleDateString('nl-NL', {
            day: 'numeric',
            })} 
            </span>
            <span className='month'>
            {date.toLocaleDateString('nl-NL', {
                month: 'long',
                year: 'numeric',
                })}    
                </span>   
            
          </p>
        </div>
      );
    }
  
  export default Agenda_comp;