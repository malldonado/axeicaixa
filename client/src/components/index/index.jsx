import React from 'react'
import Container from './container/container';
import Footer from './footer/footer';
import Band from './band/band';

function index() {
  return (
    <div className='h-auto'>
      <Container/>
      <Footer />
      <Band/>
    </div>
  )
}

export default index
