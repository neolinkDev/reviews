// import React from 'react';
import { useState } from 'react';

import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


export const Review = () => {

  // Empezamos con 0 porque sera la primer persona del array de `data.js` la que se mostrará
  const [ index, setIndex ] = useState( 0 );
  
  // desestructuramos la data mediante el state para hacer dinamico el cambio persona
  const { name, job, image, text} = people[ index ];

  // fn que válida que el `index` al tomar un valor mayor al último indice del array de la data, regrese el valor del primer indice de la data y si el index toma un valor menor a 0 entonces regrese el úlimo indice del array de la data.
  const validateIndex = ( num ) => {

    if( num > people.length - 1) return 0;

    if( num < 0 ) return people.length - 1;

    return num;
  }

  // fn que mustra las personas 'previas' al cliquear en el botón flecha izquierdo <
  const prevPerson = () => {

    let newIndex;
    setIndex( index => validateIndex( newIndex = index - 1) );

  };
  
  // fn que muestra las personas 'siguientes' al cliquear en en botón flecha derecho >
  const nextPerson = () => {

    let newIndex;
    setIndex( index => validateIndex( newIndex = index + 1 ));

  };

  // fn con la logica para mostrar a la persona de manera random al presionar el botón `sorprendeme`
  const randomPeople = () => {
   let randomIndex = Math.floor( Math.random() * people.length );
    
   // evitamos que se repita el indice
   if( randomIndex === index) randomIndex = index + 1;

   setIndex( validateIndex( randomIndex ) );

  }

  return (
    <article className='review'>
      <div className="img-container">
        <img 
          src={ image } 
          alt={ name } 
          className='person-img' 
        />
        <span className="quote-icon">
         <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{ name }</h4>
      <p className="job">{ job }</p>
      <p className="info">{ text }</p>
      <div className="button-container">
        <button 
          className='prev-btn'
          onClick={ prevPerson }
        >
          <FaChevronLeft />
        </button>
        <button 
          className='next-btn'
          onClick={ nextPerson }
        >
          <FaChevronRight />
        </button>
      <div>
        <button 
          className='random-btn'
          onClick={ randomPeople }
        >
          sorprendeme
        </button>
      </div>  
      </div>
    </article>
  )
}
