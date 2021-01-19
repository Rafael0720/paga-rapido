import { useEffect, useState } from 'react';
import { fetchBoletos } from '../api';
import BoletosReturn from './BoletosReturn';
import './styles.css';
import { PaymentBoleto } from './types';

function GridBoleto() {
    const [boletos, setBoleto] = useState<PaymentBoleto>()
    console.log(boletos)

    useEffect(() => {
        fetchBoletos().then(response => setBoleto(response.data)).catch()
    }, [])

    return (
        <div className="boleto-return-container">
            <BoletosReturn />
        </div>
    )
}

export default GridBoleto;