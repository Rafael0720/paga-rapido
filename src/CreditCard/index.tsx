import './styles.css'

function CreditCard(){
    return (        
        <div className="credit-form">                 
            <fieldset className="credit-fieldset"> <legend className="fieldset-legend"><strong>Informações do Cartão</strong></legend>
                <p>Valor: <input type="text"/> Código Cartão: <input type="text"/> <br/></p>
               <p>Validade Cartão: <input type="text"/>    Bandeira: <input type="text"/> <br/></p>
                <p>Nome: <input type="text"/>    Nº Cartão: <input type="text"/> <br/></p>
                
            </fieldset>
        </div>        
    )
}

export default CreditCard;