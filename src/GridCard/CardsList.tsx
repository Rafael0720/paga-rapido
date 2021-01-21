import CardItem from "./CardItem";
import { CreditCard } from "./types";

type Props = {
  creditCards: CreditCard[];
};

function CardsList({ creditCards }: Props) {
  return (
    <div className="cards-list-container">
      <div className="cards-list-items">
        {creditCards.map((creditCard) => (
          <CardItem key={creditCard.id} creditCard={creditCard} />
        ))}
      </div>
    </div>
  );
}

export default CardsList;
