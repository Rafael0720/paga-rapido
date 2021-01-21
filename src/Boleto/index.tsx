import "./styles.css";

function Boleto() {
  return (
    <div className="boleto-form">
      <fieldset className="boleto-fieldset">        
        <legend className="fieldset-legend">
          <strong>Informações do Boleto</strong>
        </legend>
        <p>
          Valor: <input type="text" id="txtValor" />
        </p>
        <p className="boleto-btn-enviar">
          <button>Enviar</button>
        </p>
      </fieldset>
    </div>
  );
}

export default Boleto;
