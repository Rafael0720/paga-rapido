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
      <p className="bolet-item-paragraph">dueDate: {boleto.dueDate}</p>
      <p className="bolet-item-paragraph">bankName: {boleto.bankName}</p>
      <p className="bolet-item-paragraph">bankCode: {boleto.bankCode}</p>
      <p className="bolet-item-paragraph">agency: {boleto.agency}</p>
      <p className="bolet-item-paragraph">agencyDigit: {boleto.agencyDigit}</p>
      <p className="bolet-item-paragraph">account: {boleto.account}</p>
      <p className="bolet-item-paragraph">
        accountDigit: {boleto.accountDigit}
      </p>
      <p className="bolet-item-paragraph">accept: {boleto.accept}</p>
      <p className="bolet-item-paragraph">specie: {boleto.specie}</p>
      <p className="bolet-item-paragraph">specieDoc: {boleto.specieDoc}</p>
      <p className="bolet-item-paragraph">recipient: {boleto.recipient}</p>
      <p className="bolet-item-paragraph">payee: {boleto.payee}</p>
      <p className="bolet-item-paragraph">
        titleSpecies: {boleto.titleSpecies}
      </p>
      <p className="bolet-item-paragraph">
        amount: {formatPrice(boleto.amount)}
      </p>
      <p className="bolet-item-paragraph">installment: {boleto.installment}</p>
      <p className="bolet-item-paragraph">interest: {boleto.interest}</p>
      <p className="bolet-item-paragraph">lateFee: {boleto.lateFee}</p>
      <p className="bolet-item-paragraph">metadata: {boleto.metadata}</p>
    </div>
  );
}

export default BoletoItem;
