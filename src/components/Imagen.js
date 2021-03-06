import React from 'react';

const Imagen = ({imagen}) => {

  const {largeImageURL, likes, previewURL, tags, views} = imagen;
  
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
     
        <div className="card">
          <img src={previewURL} alt={tags} className="card-img-top"/>
          <div className="card-body">
            <p className="cardtext">{likes} Me gusta</p>
            <p className="cardtext">{views} Visitas</p>
          </div>
          <div className="card-footer">
            <a href={largeImageURL} target="_blank" className=" btn btn-primary btn-block" rel="noopener noreferrer">Ver Imagen</a>
          </div>

        </div>
      
    </div>
  );
};

export default Imagen;

