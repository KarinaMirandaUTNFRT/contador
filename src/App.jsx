import Contador from "./components/Contador";
import Teoria from "./components/Teoria";
function App() {
   const comision =23
   const modulo ="modulo 2"
  return (
    <main className="comtainer my-3">
      <h1 className="text-center">Hola Mundo con Reak</h1>
      <Teoria comisionProps={comision} moduloProps={modulo}/>
      <Contador></Contador>
    </main>
  );
}

export default App;
