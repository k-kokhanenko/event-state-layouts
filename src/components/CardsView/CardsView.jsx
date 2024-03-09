export const CardsView = (props) => {
  const { cards } = props;
  return (
    <>    
      <div class="columns is-3 is-multiline">        
          {cards.map((card, index) => (
            <div class="column is-one-third">
              <div className="box has-text-centered">
                  <h1 className="title">{card.name.toUpperCase()}</h1>
                  <h4 className="title is-4">{card.color}</h4>
                  <div className="card-image has-text-centered">
                    <figure className="image is-256x256 is-inline-block">
                      <img src={card.img}/>
                    </figure>
                  </div>
                  <div class="columns is-2">    
                    <div className="column">
                      <h3 className="title has-text-danger is-3">${card.price}</h3>
                    </div>            
                    <div className="column">
                      <button class="button is-danger is-rounded is-outlined">ADD TO CARD</button>
                    </div> 
                  </div>
              </div>
          </div>              
        ))}  
      </div>
    </>
  )
}
