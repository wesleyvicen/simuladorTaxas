import React, { useState, useEffect } from "react";
import { Container } from "./styles";

export default function App() {
    const [valorCompra, setValorCompra] = useState(0);
    const [valorEntrada, setValorEntrada] = useState(0);
    const [parcelas, setParcelas] = useState([]);
    const [taxaDebito, setTaxaDebito] = useState(2);
    const [debitoTotal, setDebitoTotal] = useState(0);
    const [cartao, setCartao] = useState("0");

    useEffect(() => {
        const taxa = {
            master: [3.8, 4.9, 5.7, 6.7, 7.3, 7.9, 8.7, 9.5, 10.1, 11, 11.8, 12.7],
            visa: [3.8, 4.9, 5.7, 6.7, 7.3, 7.9, 8.7, 9.5, 10.1, 11, 11.8, 12.7],
            hiper: [3.8, 4.9, 5.7, 6.7, 7.3, 7.9, 8.7, 9.5, 10.1, 11, 11.8, 12.7],
            elo: [4.486, 5.7, 6.6, 7.5, 8.3, 9, 9.9, 10.8, 11.5, 12.2, 13, 13.9],
        };
        function handleChangeInput() {
            if (!valorCompra) {
                setParcelas([]);
                return;
            }
            if (isNaN(valorEntrada)) {
                setValorEntrada(0);
            }
            if (cartao === "0" || cartao === "1") {
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
            if (cartao === "2") {
                const parcelas = taxa.hiper.map((item, index) => {
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
            if (cartao === "3") {
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
            if (cartao === "0" || cartao === "1" || cartao === "2") {
                setTaxaDebito(1.3);
            } else {
                setTaxaDebito(2);
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
    }, [valorCompra, valorEntrada, taxaDebito, cartao]);

    return (
        <>
            <Container>
                <div className={"logo"}>
                    <img src={require("../../images/logo.png")} width="250" height="87" alt={"Memeu Cell"} />
                </div>
                <div className={"boxImage"}>
                    <form>
                        <div className="group">
                            <label>Valor da compra:</label>
                            <input type="number" required autoFocus={true} onChange={(e) => setValorCompra(e.target.value)} placeholder={"R$ 0,00"} />
                        </div>

                        <div className="group">
                            <label>Entrada em dinheiro:</label>
                            <input type="number" required onChange={(e) => setValorEntrada(e.target.value)} placeholder={"R$ 0,00"} />
                        </div>
                        <div className="group">
                            <label>Bandeira do Cartão:</label>
                            <select name="select" onChange={(e) => setCartao(e.target.value)}>
                                <option value={"0"}>Mastercard</option>
                                <option value={"1"}>Visa</option>
                                <option value={"2"}>Hipercard</option>
                                <option value={"3"}>Elo</option>
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
                        <a className={"whatsapp"} href={"https://api.whatsapp.com/send?phone=5581995167878&text=Tenho%20interesse"} target={"blank"}>
                            <em className="fab fa-whatsapp"></em> ENTRE EM CONTATO PELO WHATSAPP
                        </a>
                    </div>
                </div>
            </Container>
        </>
    );
}
