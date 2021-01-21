import { Link } from "react-router-dom";
import { CreditCard } from "./types";

type Props = {
  creditCard: CreditCard;
};

function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatter.format(price);
}

function CardItem({ creditCard }: Props) {
  return (
    <div className="card-item-container">
      <h1 className="grid-card-title">Transação no Cartão Encontrada</h1>
      <p className="card-item-paragraph">
        Chave de Entrada: {creditCard.gatewayKey}
      </p>
      <p className="card-item-paragraph">Url Retorno: {creditCard.returnUrl}</p>
      <p className="card-item-paragraph">
        ID Pedido: {creditCard.foreignOrderId}
      </p>
      <p className="card-item-paragraph">
        Valor: {formatPrice(creditCard.amount)}
      </p>
      <p className="card-item-paragraph">Parcelas: {creditCard.installments}</p>
      <p className="card-item-paragraph">Nº Cartão: {creditCard.cardNumber}</p>
      <p className="card-item-paragraph">Cvv: {creditCard.cardCvv}</p>
      <p className="card-item-paragraph">
        Validade Cartão: {creditCard.cardExpirationDate}
      </p>
      <p className="card-item-paragraph">
        Nome do Titular: {creditCard.cardHolderName}
      </p>
      <p className="card-item-paragraph">Bandeira: {creditCard.cardFlag}</p>
      <p className="card-item-paragraph">
        Tipo Pagamento: {creditCard.paymentType}
      </p>
      <p className="card-item-paragraph">Nome: {creditCard.customer.name}</p>
      <p className="card-item-paragraph">
        Documento: {creditCard.customer.document}
      </p>
      <p className="card-item-paragraph">Tipo: {creditCard.customer.type}</p>
      <p className="card-item-paragraph">email: {creditCard.customer.email}</p>
      <p className="card-item-paragraph">
        Telefones: {creditCard.customer.phoneNumbers}
      </p>
      <p className="card-item-paragraph">
        Endereço: {creditCard.customer.addresses}
      </p>
      <Link to="/">
        <button className="grid-card-btn">Voltar ao Menu Inicial</button>
      </Link>
    </div>
  );
}

export default CardItem;
