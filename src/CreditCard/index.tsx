import "./styles.css";

function CreditCard() {
  return (
    <div className="credit-form">
      <fieldset className="credit-fieldset">
        <legend className="fieldset-legend">
          <strong>Informações do Cartão</strong>
        </legend>
        <p>
          Valor: <input type="text" /> Código: <input type="text" /> <br />
        </p>
        <p>
          Validade: <input type="text" /> Bandeira: <input type="text" /> <br />
        </p>
        <p>
          Nome: <input type="text" /> Número: <input type="text" /> <br />
        </p>
        <p className="credit-btn-enviar">
          <button>Enviar</button>
        </p>
      </fieldset>
    </div>
  );
}

export default CreditCard;
