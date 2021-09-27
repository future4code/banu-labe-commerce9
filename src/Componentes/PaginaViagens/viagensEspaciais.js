import React from "react";

import mercurio from "./images/mercurio.jpg"
import venus from "./images/venus.jpg"
import terra from "./images/terra.jpg"
import marte from "./images/marte.jpg"
import jupiter from "./images/jupiter.jpg"
import saturno from "./images/saturno.jpg"
import urano from "./images/urano.jpg"
import netuno from "./images/netuno.jpg"
import sistemasolar from "./images/sistemasolar.jpg"


class ViagensEspaciais extends React.Component {
    state = {
        viagens: [
            {
                id: 1,
                name: "Viagem em volta do Planeta Mercúrio",
                value: 10000.00,
                image: {mercurio}
            },
            {
                id: 2,
                name: "Viagem em volta do Planeta Vênus",
                value: 15000.00,
                image: {venus}
            },
            {
                id: 3,
                name: "Viagem em volta do Planeta Terra",
                value: 20000.00,
                image: {terra}
            },
            {
                id: 4,
                name: "Viagem em volta do Planeta Marte",
                value: 25000.00,
                image: {marte}
            },
            {
                id: 5,
                name: "Viagem em volta do Planeta Júpiter",
                value: 35000.00,
                image: {jupiter}
            },
            {
                id: 6,
                name: "Viagem em volta do Planeta Saturno",
                value: 45000.00,
                image: {saturno}
            },
            {
                id: 7,
                name: "Viagem em volta do Planeta Urano",
                value: 55000.00,
                image: {urano}
            },
            {
                id: 8,
                name: "Viagem em volta do Planeta Netuno",
                value: 65000.00,
                image: {netuno}
            },
            {
                id: 9,
                name: "Combo Completo! Viagem de Mercúrio até Netuno.",
                value: 250000.00,
                image: {sistemasolar}
            }



        ]
    }
    render() {
        return(
            <div>
                <div>
                    {this.state.viagens.map((iten, indice) => {
                        return (
                            <div key= {indice}>
                                <img src={iten.image} alt= "Planeta"/>
                                <h3>{iten.name}</h3>
                                <p>R$ {iten.value}</p>
                                <button>Adicionar ao Carrinho</button>
                            </div>
                        )
                    })}

                    
                </div>
                
            </div>
        )
    }
}

export default ViagensEspaciais