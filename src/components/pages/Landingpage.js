/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Landing = ( ) =>{
    return(

        
        <div className="container">
             <div className="row">
                <div className="col md-4">
                 <h1>
                     Mundo Left4Dead
                 </h1>
                </div>    
            <div className="container">
                <div className="row">
                  <div className="col md-4">
                      <div className="text-center">
                         <h2>Universidad Veracruzana</h2>
                         <p>
                             <h3>
                                 Ingenieria de Software
                             </h3>
                         </p>
                      </div>
                      <div className="text-left">
                           <h4>
                               Paradigmas de Programacion 4to Semestre
                       </h4>      
                      </div>
                  </div>
                </div>
            </div>
            <div className="row">
                    <div className="col md-4">
                        <img src="./tank.png" className="d-block w-100"   alt="..." />
                    </div>
                    <p>
                      By Mabel Perez Garibay Matricula: S18003216
                    </p>
                 </div>
        </div>
    </div>
        
       
      

    );
}
export default Landing;