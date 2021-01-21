import { useEffect, useState } from "react";
import { fetchBoletos } from "../api";
import BoletosList from "./BoletosList";
import "./styles.css";
import { Boleto } from "./types";

function GridBoleto() {
  const [boletos, setBoletos] = useState<Boleto[]>([]);

  useEffect(() => {
    fetchBoletos()
      .then((response) => setBoletos(response.data))
      .catch();
    console.log(boletos);
  }, []);

  return (
    <div className="grid-boleto-container">
      <BoletosList boletos={boletos} />
    </div>
  );
}

export default GridBoleto;
