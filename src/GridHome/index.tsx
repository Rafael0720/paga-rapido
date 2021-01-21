import "./styles.css";

function GridHome() {
  return (
    <div className="grid-home-container">
      <h1 className="grid-home-title">Buscar Transações </h1>
      <h3 className="grid-home-subtitle">Preencha os dados da busca:</h3>
      <p className="grid-home-paragraph">
        Escolha a opção de busca: &nbsp;
        <select name="" id="">
          <option value="nul"></option>
          <option value="bol">Boleto</option>
          <option value="card">Cartão Crédito</option>
        </select>
      </p>
      <p className="grid-home-paragraph">
        Digite o ID: <input type="text" name="" id="" />
      </p>
      <p className="grid-home-paragraph-submit">
        <button>Enviar</button>
      </p>
    </div>
  );
}

export default GridHome;
