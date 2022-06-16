import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col md-4">
           <div className=" text-center" >
             <br/>
             <br/>
             <h2>
              Comiditas
             </h2>
          </div>
          <br />
          <br />
          <div className="container">
            <div className="col md-4">
              <div className="text-center">
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="100000">
      <img src="./1.png" className="d-block w-90" alt="50px"/>
    </div>
    <div className="carousel-item" data-bs-interval="200000">
      <img src="./2.png" className="d-block w-90" alt="50px"/>
    </div>
    <div className="carousel-item">
      <img src="./3.png" className="d-block w-90" alt="50px"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  </div>
  </div>
</div>
<br/>
<br/>
<div className="container">
  <div className="row">
  <div className="col md-4">
           <div className=" text-center" >
           <Link to="/comidasC">
            <div className="d-grid gap-2">
              <button className="btn btn-outline-success" type="button">Comidas chidas ya creadas</button>
            </div>
          </Link>
          <br/>
          <br/>
          <Link to="/crealas">
             <div className="d-grid gap-2">
               <button className="btn btn-outline-success" type="button">Create el link</button>
             </div>
          </Link>

        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Header;