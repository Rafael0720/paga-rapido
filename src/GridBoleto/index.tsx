import './styles.css'

function GridBoleto() {    
        return (        
            <div className="boleto-form">                 
                <fieldset className="boleto-fieldset"> <legend className="fieldset-legend"><strong>Informações do boleto</strong></legend>
                <p>Valor: <input type="text"/></p>
                <p className="boleto-btn-enviar"><button>Enviar</button></p>
                </fieldset>
            </div>        
        )    
}

export default GridBoleto;