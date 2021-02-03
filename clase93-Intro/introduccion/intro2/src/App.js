import { Button } from "./Button";

const App = () => {
  return (
    <div className="App">
      App
      
      <Button adrian="argentina" className="button-primary" type="button">
        Contacto
      </Button>

      <Button text="Enviar" />

      <Button text="Agregar al carrito" />

      <a className="prueba" href="http://ada.com.ar">
        Link
      </a>

      <table className="prueba">
        ...
      </table>
    </div>
  );
}

export default App;
