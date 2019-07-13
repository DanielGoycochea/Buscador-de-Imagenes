import React,{useState, useEffect} from 'react';
import Buscador from './components/Buscador'
import ListaImagenes from './components/ListaImagenes'

function App() {

  const [busqueda, setBusqueda] = useState ('');
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState (1);
  const [totalPaginas, setTotal] = useState(1)



  useEffect(()=>{
    
      const consultarApi = async ()=>{

        if(busqueda === '' ) return

        const imgxpagina = 30;
        const key = process.env.REACT_APP_API_KEY

        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgxpagina}&page=${paginaActual}`

        const respuesta = await fetch(url)
        const resultados = await respuesta.json();

        setImagenes(resultados.hits)

        //Calcular el total de paginas
        const calcularPaginas = Math.ceil(resultados.totalHits / imgxpagina)

        setTotal (calcularPaginas)

        //mover pantalla hasta arriba

        const jumbotron = document.querySelector ('.jumbotron');

        jumbotron.scrollIntoView({behavior:"smooth", block:'end'})

      }
      consultarApi()


  }, [busqueda, paginaActual]);

  const paginaAnterior = ()=>{

    let nuevaPaginaAnterior = paginaActual -1

    //colocar en el state
     setPaginaActual(nuevaPaginaAnterior)

  }

  const paginaSiguinte = () =>{

    let nuevaPaguinaSiguiente = paginaActual + 1

    setPaginaActual(nuevaPaguinaSiguiente)
  }


  return (
    <div className="app container">
     <div className="jumbotron">
       <p className="lead text-center">Buscador de Imagenes</p>

        <Buscador 
        
        setBusqueda = {setBusqueda}
        />

     </div>

      <div className="row justify-content-center">
        <ListaImagenes
          
          imagenes= {imagenes}
        />
        {(paginaActual === 1)? null:(
           <button onClick={paginaAnterior} type="button" className="btn btn-info mr-1">&laquo;Anterior</button>

        )}

        {(paginaActual === totalPaginas)? null: 
        (<button onClick={paginaSiguinte} type="button" className="btn btn-info">Siguiente&raquo;</button>
        )}
       
        

      </div>
    </div>
  );
}

export default App;
