import "./App.css";

import { useState, useEffect } from "react";

const url = "http://127.0.0.1:8000/itens/";

//1 - Get data from API
function App() {
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }
    fetchData();
  }, []);

  //2 - Add data to API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      item,
      status,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    //3 - Dynamic load
    const addProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addProduct]);

    setItem("")
    setStatus("")

  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.item} - {product.status}
          </li>
        ))}
      </ul>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Item: </span>
            <input
              type="text"
              value={item}
              name="item"
              onChange={(e) => setItem(e.target.value)}
            />
          </label>  
          <label>
            <span>Status: </span>
            <input
              type="text"
              value={status}
              name="status"
              onChange={(e) => setStatus(e.target.value)}
            />
          </label>         
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;