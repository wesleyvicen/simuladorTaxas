import React, { useState, useEffect } from "react";

import "./styles.css";

function Home() {
  let [taxa] = useState([
    4.54,
    6.01,
    7.01,
    8.01,
    8.99,
    10.31,
    11.84,
    12.94,
    13.94,
    14.44,
    15.74,
    16.04,
  ]);

  let [valorCompra, setValor] = useState(0);
  let [valoEntrada, setValorEntrada] = useState(0);

  let [taxaDebito, setTaxaDebito] = useState(2);
  let [percentualDebito, setPercentualDebito] = useState(0);
  let [debitoTotal, setDebitoTotal] = useState(0);

  let [valorParcelas, setValorParcelas] = useState([]);
  let [valorTotal, setValorTotal] = useState([]);
  let [percentual, setPercentual] = useState([]);

  function calcCredito() {
    let i = 0;
    for (let i = 0; i < taxa.length; i++) {
      setPercentual((vt) => [...vt, (taxa[i] * valorCompra) / 100]);
      setValorTotal((vt) => [...vt, valorCompra + percentual]);

      setValorParcelas((vt) => [...vt, (valorCompra + percentual) / (i + 1)]);
    }
  }
  function calcDebito() {
    setPercentualDebito((taxaDebito * valorCompra) / 100);
    setDebitoTotal(valorCompra + percentualDebito);
  }

  async function handleChangeInput(value) {
    setValor(value);
    calcDebito();
  }

  return (
    <>
      <div className={"container"}>
        <div className={"boxImage"}>
          <img className={"image"} src={require("../../images/logo.png")} />
        </div>
        <form>
          <div className="group">
            <label>Valor da compra:</label>
            <input
              type="number"
              required
              value={valorCompra}
              onChange={(e) => handleChangeInput(parseInt(e.target.value))}
            />
          </div>

          <div className="group">
            <label>Entrada em dinheiro:</label>
            <input
              type="text"
              required
              value={valoEntrada}
              onChange={(e) => handleChangeInput(parseInt(e.target.value))}
            />
          </div>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>PARCELAS</th>
            <th>VALOR PARCELAS</th>
            <th>VALOR TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Débito </td>
            <td>R$&nbsp;{debitoTotal}</td>
            <td>R$&nbsp;{debitoTotal}</td>
          </tr>
          {taxa.map((item, key) => (
            <tr>
              <td>{key + 1} x</td>
              <td>R$&nbsp;{valorParcelas}</td>
              <td>R$&nbsp;{valorTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
