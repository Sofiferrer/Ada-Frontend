import { Header } from "./components";

const App = () => {
  const navItems = [
    {
      text: 'Inicio',
      link: '/'
    },
    {
      text: 'Servicios',
      link: '/servicios'
    },
    {
      text: 'Contacto',
      link: '/contacto'
    }
  ]
  return (
    <div className="mi app" id="mi app">
      <Header menuItems={navItems} />
      <h1>Mi primera app REACT</h1>
    </div>
  );
}

export default App;
