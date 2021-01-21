import BoletoItem from "./BoletoItem";
import { Boleto } from "./types";

type Props = {
  boletos: Boleto[];
};

function BoletosList({ boletos }: Props) {
  return (
    <div className="boletos-list-container">
      <div className="boletos-list-items">
        {boletos.map((boleto) => (
          <BoletoItem key={boleto.id} boleto={boleto} />
        ))}
      </div>
    </div>
  );
}

export default BoletosList;
