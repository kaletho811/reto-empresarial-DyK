import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a COONADOC</h1>
        <p>Tu cooperativa de docentes.</p>
      </header>

      <section>
        <h2>Beneficios</h2>
        <ul>
          <li>Créditos para docentes</li>
          <li>Asesorías legales</li>
          <li>Seguro de salud</li>
        </ul>
      </section>

      <footer>
        <p>Contáctanos: <a href="https://wa.me/1234567890">WhatsApp</a></p>
        <p>Síguenos en nuestras redes sociales: Facebook, Instagram, Twitter</p>
      </footer>
    </div>
  );
}

export default App;
