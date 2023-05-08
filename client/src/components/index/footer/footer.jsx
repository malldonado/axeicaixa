import React from 'react';
import footerSVG from './footer.svg';

function footer() {
  return (
    <div>
      <img src={footerSVG} alt="" />
        <div className="h-20 bg-indigo-600">
            <div className="flex text-white justify-center items-center">
                <a href="http://localhost:3000/" className="mx-1">Axeicaixa - </a>
                <a href="http://localhost:3000/terms" className="mx-1">Termos de Uso e Política de Privacidade - </a>
                <a href="http://localhost:3000/doubts" className="mx-1">Problemas com sua encomenda?</a>
            </div>
        </div>
    </div>
  )
}

export default footer
