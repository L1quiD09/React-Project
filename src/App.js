import { divide, isEmpty } from "lodash";
import React, { useState } from "react";
import $ from "jquery";

function App() {
  const [valores, setValores] = useState({
    lista: [],
    distancia: "",
    tiempo: "",
    score: 1,
  });

  const handleInput = function (e) {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    const { distancia, tiempo, lista, score } = valores;

    console.log(valores);

    if (distancia && tiempo) {
      const id = lista.length + 1;
      let velocidad = Number(distancia) / Number(tiempo);
      let velocidadC = velocidad.toFixed(2);

      setValores({
        lista: [...lista, { id, distancia, tiempo, velocidadC, score }],
        distancia: "",
        tiempo: "",
        score: ++valores.score,
      });
    } else {
      console.log("Por favor llene los campos solicitados");
    }
    event.preventDefault();
  };
  const deleteRow = () => {
    $("#tabla tbody > tr").empty();
    valores.score = 1;
  };

  let { distancia, tiempo, velocidad, lista, score } = valores;
  velocidad = Number(distancia) / Number(tiempo);

  return (
    <>
      <div class="bg-black p-4 flex justify-between items-center">
        <div class="flex items-center">
          <img
            src="./img/galaxy.png"
            width="50"
            alt="Logo"
            class="mr-2"
          />
          <h1 href="index.html"
            class="text-5xl inline-block p-2 text-indigo-200 hover:text-indigo-100 mr-2"> 
            Física
          </h1>

        </div>

        <div class="hidden md:block">
          <a
            href="https://infolibros.org/libros-pdf-gratis/fisica/fisica-general/"
            class="inline-block p-2 text-indigo-200 hover:text-indigo-100 mr-2"
            target="_blank"
          >
            +Info
          </a>
          <a
            href="http://www.sc.ehu.es/sbweb/fisica3/problemas/portada.html"
            class="inline-block py-2 px-4 pl-4 text-yellow-700 bg-yellow-400 hover:bg-yellow-300 hover:text-yellow-800 rounded transition ease-in duration-150"
            target="_blank"
          >
            Ejercicios
          </a>
        </div>
      </div>
      <div class="md:flex justify-between py-10 px-10 bg-gray-900 text-indigo-100">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h2 class="text-2xl md:text-4xl lg:text-6xl">
            Movimiento Rectilineo Uniforme
          </h2>
          <p class="mt-5 pb-3 pt-3 mb-6 text-justify px-4 mr-2">
            En física, un movimiento es rectilíneo uniforme cuando un «objeto»
            (por ejemplo) viaja en una trayectoria recta a una velocidad
            constante,​ dado que su aceleración es nula. El movimiento
            rectilíneo uniforme se designa frecuentemente con el acrónimo MRU,
            aunque en algunos países es MRC, por movimiento rectilíneo
            constante. Para este tipo de movimiento, la distancia recorrida se
            calcula multiplicando la magnitud de la velocidad por el tiempo
            transcurrido. Esta relación también es aplicable si la trayectoria
            no es rectilínea, con tal que la rapidez o módulo de la velocidad
            sea constante.
          </p>

          <h3 class="text-2xl md:text-4xl lg:text-6xl">
            VELOCIDAD
          </h3>
          <div class="mt-5 max-w-md mx-auto rounded-xl bg-black shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:shrink-0">
                <img
                  class="h-48 w-full object-cover md:h-full md:w-48"
                  src="./img/e.png"
                  alt=""
                />
              </div>
              <div class="p-8 ">
                <p>
                  Imagina que eres un astronauta en la Estación Espacial
                  Internacional. Estás arreglando unos paneles solares
                  averiados, cuando de pronto, al presionar, tu destornillador
                  sale disparado de tus manos. Si no lo atrapas a tiempo, el
                  destornillador estará viajando por el espacio en{" "}
                  <b>línea recta</b> y a <b>velocidad constante</b> , a menos
                  que algo se interponga en su camino. Esto sucede porque la
                  herramienta se mueve con movimiento rectilíneo uniforme, o
                  MRU.
                </p>
              </div>
            </div>
          </div>
          <br />
          <h3 class="text-2xl md:text-4xl lg:text-6xl">
            FÓRMULA
          </h3>
          <div class="mt-5 max-w-md mx-auto rounded-xl bg-black shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:shrink-0">
                <img
                  class="h-48 w-full object-cover md:h-full md:w-48"
                  src="./img/ejemplosdecomocalcularvelocidad.jpg"
                  alt=""
                />
              </div>
              <div class="p-8">
                <p> Velocidad es igual a la distancia sobre el tiempo</p>
              </div>
            </div>
          </div>
          <br></br>
          <h1 className="backdrop:font-mono text-2xl md:text-4xl lg:text-6xl">Prueba la fórmula !!!</h1>
          <div className="mt-10 flex ">
            
            <div className="wt-5 w-2/5 rounded-sm w">
              <form onSubmit={handleSubmit}>
                <div className="rounded-lg form-group mx-2  bg-zinc-900 shadow-md overflow ">
                  <label
                    for="first_name"
                    className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Distancia (m)
                  </label>
                  <input
                    onChange={handleInput}
                    type="text"
                    id="distancia"
                    name="distancia"
                    value={valores.distancia}
                    className=" form-control bg-gray-50 border border-gray-300
                             text-gray-900 text-sm rounded-lg focus:ring-blue-500
                             focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                             dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                             dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="m"
                    required
                  />
                </div>
                <div className="mt-3 rounded-lg form-group mx-2  bg-zinc-900 shadow-md overflow">
                  <label
                    for="first_name"
                    className=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Tiempo (s)
                  </label>
                  <input
                    onChange={handleInput}
                    type="text"
                    id="tiempo"
                    name="tiempo"
                    value={valores.tiempo}
                    className=" form-control bg-gray-50 border border-gray-300
                             text-gray-900 text-sm rounded-lg focus:ring-blue-500
                             focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                             dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                             dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="s"
                    required
                  />
                </div>
                <div className="flex mb-4 mt-5">
                  <div className="px-3">
                    <button
                      className="bg-dark hover:bg-gray-600 text-white font-bold py-2 px-4 border-b-4 border-gray-600 hover:border-gray-600  rounded-md"
                      id="boton1"
                    >
                      Calcular
                    </button>
                  </div>
                  <div className="px-3">
                    <button
                      className="bg-dark
                                         hover:bg-gray-600 text-white font-bold py-2 px-4 
                                         border-b-4 border-gray-600 hover:border-gray-600 
                                         rounded-md"
                      id="boton1"
                      onClick={() => deleteRow()}
                    >
                      Limpiar
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className='rounded-2xl shadow-full mx-6 class="relative overflow-x-auto  "'>
              <table
                className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                id="tabla"
              >
                <thead className=" text-center text-sm text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      n
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Velocidad (m/s)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Distancia (m)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tiempo (s)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {lista.map((item) => (
                    <tr key={item.id}>
                      <td className="text-center">{item.score}</td>
                      <td className="text-center">{item.velocidadC}</td>
                      <td className="text-center">{item.distancia}</td>
                      <td className="text-center">{item.tiempo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 wx-2">
          <img
            src="./img/cohete.jpg"
            alt="Cohete"
            class=" w-full  rounded-2xl shadow-3xl"
          />
        </div>
        
      </div>
      <div class="md:flex py-3 px-5 bg-black text-indigo-200 text-center ">
      <img
            src="./img/galaxy.png"
            width="50"
            alt="Logo"
            class="mr-2"
          />
    <h2 href="index.html" class="px-3 text-4xl  inline-block py-2 text-indigo-200 hover:text-indigo-100 mr-2">Aplicaciones</h2>
  </div>
  <div class="pt-5 md:flex py-2 px-10 bg-black text-indigo-200 text-center">
    <div class="mr-2 text-center">
      <img src="./img/criminalistica.jpg" class="text-base w-full mb-4 rounded border-solid border-2 border-indigo-400"/>
      <p>Criminalística</p>
    </div>
  
    <div class="mr-2 mt-8 text-center">
      <img src="./img/astronomia.jpg" class="text-base w-full mb-4 rounded border-solid border-2 border-indigo-400"/>
      <p>Astronomía</p>
    </div>

  
    <div class="mr-2 mt-8 text-center">
      <img src="./img/dinamica.jpg" class="text-base w-full mb-4 rounded border-solid border-2 border-indigo-400"/>
      <p>Dinámica Simple</p>
    </div>
  </div>
  
 
  <div class="p-10 bg-black text-indigo-400 flex justify-between">
  
 
    <div class="md:w-1/2">
  
      <h3 class="text-lg mb-2">MRU Web Site</h3>

    </div>
  
    <div class="flex items-center">
      Creado por: Andrés Rodríguez
    </div>
  </div>
  
    </>
  );
}

export default App;
