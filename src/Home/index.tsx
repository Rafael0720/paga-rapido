import { Link } from 'react-router-dom';
import './styles.css';



function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-title">
                        <h1>Efetuar Tansações</h1>
                    </div>
                    <div className="home-options">
                        <h3 className="home-subtitle">Escolha a forma de pagamento:</h3>                       
                        <Link to="/boleto">Boleto</Link> <br /> <br /> 
                        <Link to="/card">Cartão Crédito</ Link>  <br /> <br /> 
                        <Link to="/gridBoleto">gridBoleto</ Link> <br /> <br />
                        <Link to="/gridCard">gridCartão</ Link>                     
                    </div>
                    <div className="home-grid">
                        
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home;