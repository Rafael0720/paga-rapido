import { useEffect, useState } from "react";
import { fetchCards } from "../api";
import CardsList from "./CardsList";
import "./styles.css";
import { CreditCard } from "./types";

function GridCard() {
  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);

  useEffect(() => {
    fetchCards()
      .then((response) => setCreditCards(response.data))
      .catch();
    console.log(creditCards);
  }, []);

  return (
    <div className="grid-cards-container">
      <CardsList creditCards={creditCards} />
    </div>
  );
}

export default GridCard;
