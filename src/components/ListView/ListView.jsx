import '../../bulma.css';

export const ListView = (props) => {
  const { items } = props;
  return (
    <>    
      {items.map((item, index) => (
        <div className="box">
          <div className="columns is-vcentered">
            <div className="column">
              <figure className="image is-128x128">
                <img src={item.img}></img>
              </figure>           
            </div>
            <div className="column">
              <h1 className="title">{item.name.toUpperCase()}</h1>
            </div>
            <div className="column">
              <h3 className="title is-3">{item.color}</h3>
            </div>            
            <div className="column">
              <h4 className="title has-text-danger">${item.price}</h4>
            </div>            
            <div className="column">
              <button class="button is-danger is-rounded is-outlined">ADD TO CARD</button>
            </div>            
          </div>
        </div>
      ))}
    </>
  )
}
