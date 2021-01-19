import './styles.css'

function Boleto(){
    return (        
        <div className="boleto-form">                 
            <fieldset className="boleto-fieldset"> <legend className="fieldset-legend"><strong>Informações do boleto</strong></legend>
            <p>Valor: <input type="text"/></p>

            </fieldset>
        </div>        
    )
}

export default Boleto;