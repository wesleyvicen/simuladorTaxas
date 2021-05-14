import React from "react";
import { Container, Row } from "./styles";

import "materialize-css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { Link } from "react-router-dom";

export default function Calculadora() {

    return (
        <>
            <Container>
                <div className={"logo"}>
                    <div class="col l12 s12 m12 xl12 center-align">
                        <img src={require("../../images/logo.png")} width="250" height="87" alt={"Memeu Cell"} />
                    </div>
                </div>
                <div className={"divw"}>
                    <Link className={"whatsapp"} to={"/calculadora"}>
                        <em className="fa fa-credit-card"></em> SIMULADOR DE CARTÕES
                    </Link>
                </div>
            </Container>
            <Row>
                <div class="center-align">
                    <b className="colorWhite">Clique e fale conosco </b>
                </div>
                <Card variant="outlined">
                    <CardContent>
                        <div class="center-align">
                            <a href="https://api.whatsapp.com/send?phone=5581995167878&text=Tenho%20interesse" rel="noopener noreferrer" target="_blank" >
                                <h5 class="black-text">
                                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                    <b> 81 99516-7878</b> - Memeu
                                </h5>
                            </a>

                            <h6>Todos os dias, todos os horários</h6>
                        </div>
                    </CardContent>
                </Card>

                <Card variant="outlined">
                    <CardContent>
                        <div class="center-align">
                            <a href="https://api.whatsapp.com/send?phone=5581995167878&text=Tenho%20interesse" rel="noopener noreferrer" target="_blank" >
                                <h5 class="black-text">
                                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                    <b> 81 99516-7878</b> - Loja
                                </h5>
                            </a>

                            <h6>Todos os dias das 09:30h às 18:30h</h6>
                        </div>
                    </CardContent>
                </Card>
            </Row>
        </>
    );
}
