import React from 'react';

const Contador = () => {
    let numero = 0
    const incrementar = () {
        numero++
    }
  return (
    <section className='border rounded-3 text-center py-3'>
        <h2 >Contador</h2>
      <p className='lead '>1</p>
      <button className='btn btn-primary me-3' onClick={incrementar}>+</button>
      <button className='btn btn-danger'>-</button>
    </section>
  ); 
};

export default Contador;