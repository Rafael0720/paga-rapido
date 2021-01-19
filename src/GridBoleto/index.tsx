import { useEffect, useState } from 'react';
import BoletosReturn from './BoletosReturn';
import './styles.css';
import { PaymentBoleto } from './types';

function GridBoleto() {
    const [boletos, setBoleto] = useState<PaymentBoleto>()

    useEffect(() => {

    }, [])

    return (
        <div className="boleto-return-container">
            <BoletosReturn />
        </div>
    )
}

export default GridBoleto;