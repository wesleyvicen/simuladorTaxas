import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [taxa] = useState([
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

  const [valorCompra, setValorCompra] = useState(0);
  const [valorEntrada] = useState(0);
  const [parcelas, setParcelas] = useState([]);

  function handleChangeInput(value = 0) {
    setValorCompra(value);

    const arrayNovo = taxa.map((item, index) => {
      const percentual = (item * valorCompra) / 100;
      const valueReturn = valorCompra + percentual;
      const valorParcelas = (valorCompra + percentual) / (index + 1);

      const percentualDebito = (2 * valorCompra) / 100;
      const debitoTotal = valorCompra + percentualDebito;

      return {
        parcela: index + 1,
        valorTotal: valueReturn,
        percentual: percentual,
        valorParcelas: valorParcelas,
        debitoTotal: debitoTotal,
      };
    });
    setParcelas(arrayNovo);
  }

  return (
    <>
      <div className={"container"}>
        <div className={"boxImage"}>
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
                type="number"
                required
                value={valorEntrada}
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
              <td>R$&nbsp;</td>
              <td>R$&nbsp;</td>
            </tr>
            {parcelas.map((item, key) => (
              <tr key={key}>
                <td>{item.parcela} x</td>
                <td>R$&nbsp;{item.valorParcelas.toLocaleString("pt-BR")}</td>
                <td>R$&nbsp;{item.valorTotal.toLocaleString("pt-BR")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
