import avionsito from '../assets/avionsito-06.png';

export const Form = ()=>{
    return (
        <section id="formulario">
            <img src={avionsito} alt='Contacta a un desarrollador web' />
            <form  action="../procesar.php" method="post" encType="application/x-www-form-urlencoded">
        <div>
            <label htmlFor="nombreInput">Nombre</label>
            <input type="Text" className="form-control" id="nombreInput" placeholder="Escriba aqui su nombre o el de la compania" name="nombre"/>
        </div>
        <div>
            <label htmlFor="emailInput">Email</label>
            <input type="email" className="form-control" id="emailInput" placeholder="Escriba aqui su email" name="email"/>
        </div>
        <div>
            <label htmlFor="textArea">Dejanos un mensaje</label>
            <textarea name="mensaje" cols="20" rows="10" id="textArea" className="form-control" placeholder="Escriba aqui el mensaje que desea enviar"></textarea>
        </div>
        <div>
            <input type="submit" value="Contactame" id="btn-contacto"/>
        </div>
    </form>
        </section>
    )
}