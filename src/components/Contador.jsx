import { useState} from "react";

const Contador = () => {
    const [numero, setNumero] = useState(0)
  //let numero = 0;
  const incrementar = () => {
    //numero = numero + 1;
    setNumero(numero + 1)
    console.log(numero);
  };
  return (
    <section className="border rounded-3 text-center py-3">
      <h2>Contador</h2>
      <p className="lead ">{numero}</p>
      <button className="btn btn-primary me-3" onClick={incrementar}>
        +
      </button>
      <button className="btn btn-danger">-</button>
    </section>
  );
};

export default Contador;
