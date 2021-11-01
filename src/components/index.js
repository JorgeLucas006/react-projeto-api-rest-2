import './style.css'

const Card = ({ children })=> {
  return (
    <div>
      <h2>CEP - {children.cep}</h2>
      <p className="small"><small>{children.localidade} - {children.uf}</small></p>
      
      <fieldset>
        <div className="left">
          <p>Logradouro: <span>{children.logradouro}</span></p>
          <p>CEP: <span>{children.cep}</span></p>
          <p>Bairro: <span>{children.bairro}</span></p>
        </div>
        <div className="right">
          <p>Cidade: <span>{children.localidade}</span></p>
          <p>UF: <span>{children.uf}</span></p>
          <p>Código DDD: <span>{children.ddd}</span></p>
        </div>
      </fieldset>
    </div>
  );
}

export default Card;
