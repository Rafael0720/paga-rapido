import { Link } from "react-router-dom";
import { Boleto } from "./types";

type Props = {
  boleto: Boleto;
};

function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatter.format(price);
}

function BoletoItem({ boleto }: Props) {
  return (
    <div className="boleto-item-container">
      <h1 className="boleto-item-title">Transação no Boleto Encontrada</h1>

      <p className="boleto-item-paragraph">
        Data de Vencimento: {boleto.dueDate}
      </p>
      <p className="boleto-item-paragraph">Nome do Banco: {boleto.bankName}</p>
      <p className="boleto-item-paragraph">
        Código Bancário: {boleto.bankCode}
      </p>
      <p className="boleto-item-paragraph">Agência: {boleto.agency}</p>
      <p className="boleto-item-paragraph">
        Dígito da Agência: {boleto.agencyDigit}
      </p>
      <p className="boleto-item-paragraph">Conta: {boleto.account}</p>
      <p className="boleto-item-paragraph">
        Dígito da Conta: {boleto.accountDigit}
      </p>
      <p className="boleto-item-paragraph">Aceito: {boleto.accept}</p>
      <p className="boleto-item-paragraph">Espécie: {boleto.specie}</p>
      <p className="boleto-item-paragraph">Espécie Doc: {boleto.specieDoc}</p>
      <p className="boleto-item-paragraph">Recebedor: {boleto.recipient}</p>
      <p className="boleto-item-paragraph">Beneficiário: {boleto.payee}</p>
      <p className="boleto-item-paragraph">
        Título Espécies: {boleto.titleSpecies}
      </p>
      <p className="boleto-item-paragraph">
        Valor: {formatPrice(boleto.amount)}
      </p>
      <p className="boleto-item-paragraph">Prestação: {boleto.installment}</p>
      <p className="boleto-item-paragraph">Interesse: {boleto.interest}</p>
      <p className="boleto-item-paragraph">Taxa de Atraso: {boleto.lateFee}</p>
      <p className="boleto-item-paragraph">Metadados: {boleto.metadata}</p>
      <Link to="/">
        <button className="grid-boleto-btn">Voltar ao Menu Inicial</button>
      </Link>
    </div>
  );
}

export default BoletoItem;
