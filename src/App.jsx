import { useState } from 'react'
import './App.css'

const PRODUCTOS = [
  { id: 1, nombre: 'Mate de calabaza', precio: 8500 },
  { id: 2, nombre: 'Yerba 1 kg', precio: 6200 },
  { id: 3, nombre: 'Termo 1 litro', precio: 24000 },
  { id: 4, nombre: 'Bombilla de acero', precio: 3500 },
]

function App() {
  const [carrito, setCarrito] = useState([])

  const agregar = (producto) => setCarrito([...carrito, producto])
  const total = carrito.reduce((suma, p) => suma + p.precio, 0)

  return (
    <div className="app">
      <header>
        <h1>Mi Tienda</h1>
        <p className="carrito">
          Carrito: {carrito.length} producto(s) – Total: ${total.toLocaleString('es-AR')}
        </p>
      </header>

      <main className="grilla">
        {PRODUCTOS.map((p) => (
          <article key={p.id} className="tarjeta">
            <h2>{p.nombre}</h2>
            <p>${p.precio.toLocaleString('es-AR')}</p>
            <button onClick={() => agregar(p)}>Agregar al carrito</button>
          </article>
        ))}
      </main>

      <footer>Versión 1.0.1 – proyecto de práctica</footer>
    </div>
  )
}

export default App
