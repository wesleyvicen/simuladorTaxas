import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [taxa] = useState({
    master: [
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
    ],
    visa: [
      1.54,
      2.01,
      3.01,
      10.01,
      8.99,
      10.31,
      11.84,
      12.94,
      13.94,
      14.44,
      15.74,
      16.04,
    ],
    elo: [
      15.54,
      20.01,
      30.01,
      10.01,
      8.99,
      10.31,
      11.84,
      12.94,
      13.94,
      14.44,
      15.74,
      16.04,
    ],
  });

  const [valorCompra, setValorCompra] = useState(0);
  const [valorEntrada, setValorEntrada] = useState(0);
  const [parcelas, setParcelas] = useState([]);
  const [taxaDebito] = useState(2);
  const [debitoTotal, setDebitoTotal] = useState(0);
  const [cartao, setCartao] = useState("0");

  useEffect(() => {
    console.log(typeof cartao);
    function handleChangeInput() {
      if (!valorCompra) {
        setParcelas([]);
        return;
      }
      if (isNaN(valorEntrada)) {
        setValorEntrada(0);
      }
      if (cartao === "0") {
        const parcelas = taxa.master.map((item, index) => {
          const valor = valorCompra - valorEntrada;
          const percentual = (item * valor) / 100;
          const valueReturn = valor + percentual;
          const valorParcelas = (valor + percentual) / (index + 1);

          return {
            parcela: index + 1,
            valorTotal: valueReturn.toLocaleString("pt-BR", {
              currency: "BRL",
              currencyDisplay: "symbol",
              style: "currency",
            }),
            percentual: percentual,
            valorParcelas: valorParcelas.toLocaleString("pt-BR", {
              currency: "BRL",
              currencyDisplay: "symbol",
              style: "currency",
            }),
          };
        });
        setParcelas(parcelas);
      }
      if (cartao === "1") {
        const parcelas = taxa.visa.map((item, index) => {
          const valor = valorCompra - valorEntrada;
          const percentual = (item * valor) / 100;
          const valueReturn = valor + percentual;
          const valorParcelas = (valor + percentual) / (index + 1);

          return {
            parcela: index + 1,
            valorTotal: valueReturn.toLocaleString("pt-BR", {
              currency: "BRL",
              currencyDisplay: "symbol",
              style: "currency",
            }),
            percentual: percentual,
            valorParcelas: valorParcelas.toLocaleString("pt-BR", {
              currency: "BRL",
              currencyDisplay: "symbol",
              style: "currency",
            }),
          };
        });
        setParcelas(parcelas);
      }
      if (cartao === "2") {
        const parcelas = taxa.elo.map((item, index) => {
          const valor = valorCompra - valorEntrada;
          const percentual = (item * valor) / 100;
          const valueReturn = valor + percentual;
          const valorParcelas = (valor + percentual) / (index + 1);

          return {
            parcela: index + 1,
            valorTotal: valueReturn.toLocaleString("pt-BR", {
              currency: "BRL",
              currencyDisplay: "symbol",
              style: "currency",
            }),
            percentual: percentual,
            valorParcelas: valorParcelas.toLocaleString("pt-BR", {
              currency: "BRL",
              currencyDisplay: "symbol",
              style: "currency",
            }),
          };
        });
        setParcelas(parcelas);
      }

      const valor = valorCompra - valorEntrada;
      const percentualDeb = (taxaDebito * valor) / 100;
      const debTotal = (valor + percentualDeb).toLocaleString("pt-BR", {
        currency: "BRL",
        currencyDisplay: "symbol",
        style: "currency",
      });
      setDebitoTotal(debTotal);
    }
    handleChangeInput();
  }, [valorCompra, valorEntrada, taxa, taxaDebito, cartao]);

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
                autoFocus={true}
                onChange={(e) => setValorCompra(e.target.value)}
              />
            </div>

            <div className="group">
              <label>Entrada em dinheiro:</label>
              <input
                type="number"
                required
                onChange={(e) => setValorEntrada(e.target.value)}
              />
            </div>
            <div className="group">
              <label>Bandeira do Cartão:</label>
              <select name="select" onChange={(e) => setCartao(e.target.value)}>
                <option value={"0"}>Mastercard</option>
                <option value={"1"}>Visa</option>
                <option value={"2"}>Elo</option>
              </select>
            </div>
          </form>
        </div>
        <div className={"boxTable"}>
          <table>
            <thead>
              <tr>
                <th>PARCELAS</th>
                <th>VALOR PARCELAS</th>
                <th>VALOR TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {debitoTotal === 0 ? (
                <tr></tr>
              ) : (
                <tr>
                  <td>Débito </td>
                  <td>{debitoTotal}</td>
                  <td>{debitoTotal}</td>
                </tr>
              )}

              {parcelas.map((item) => (
                <tr key={item.parcela.toString()}>
                  <td>{item.parcela} x</td>
                  <td>{item.valorParcelas}</td>
                  <td>{item.valorTotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={"divw"}>
            <a
              className={"whatsapp"}
              href={
                "https://api.whatsapp.com/send?phone=5581995167878&text=Tenho%20interesse"
              }
              target={"_blank"}
            >
              <em class="fab fa-whatsapp"></em> ENTRE EM CONTATO PELO WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
