
export const Tarjeta = (props)=>{
    return(
        <div className="tarjeta">
            <div>
            <img src={props.img} alt={props.alt} />
            </div>
            <div>
                <h3>{props.titulo}</h3>
                <p>{props.descripcion}</p>
                <a href={props.link} target='_blank' id="btn-contacto">Ver proyecto</a>
            </div>
        </div>
    )
}