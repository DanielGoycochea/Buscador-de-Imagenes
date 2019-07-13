import React, {useState} from 'react';
import Error from './Error'

const Buscador = ({setBusqueda}) => {

  const [termino, setTermino] = useState('');
  const [error, setError] = useState(false)


  const buscarImagen = (e)=>{
    e.preventDefault();

    // velidar
    if(termino === ''){
      setError(true)
      return
    }
// enviartexto
    setError(false)
    
    setBusqueda(termino)

  }

 
  return (
    <form
      onSubmit={buscarImagen}
    >
      <div className="row">
        <div className="form-group col-md-8">
          <input 
          type="text" 
          className="form-control form-control-lg"
          placeholder="Buscar Imagenes"
          onChange={(e) => setTermino (e.target.value)}
           />
        </div>
        <div className="form-group col-md-4">
          <input 
          type="submit" 
          className="btn btn-lg btn-danger btn-block"
            value="Buscar"
           />
        </div>
      </div>
      {(error)?<Error mensaje="Ingresa los Datos para la busqueda"/>: null}
    </form>
  );
};

export default Buscador;