import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { BgPokeball, Container, DivNameType, ImgPokemon, PokemonName, Type } from "./style"
import bgPokeball from "../../assets/bg-pokeball.png"
import { getPokemonColors } from "../../functions/cardColor"
import { goToDetailPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

export const CardPokemon = (props) => {
    const [pokemonDetails, setPokemonDetails] = useState([])
    const { pokemon, pokemonUrl } = props
    const navigate = useNavigate();

    useEffect(() => {
        fetchPokemonDetails()
    })

    const fetchPokemonDetails = () => {
        axios
            .get(pokemonUrl)
            .then((resp) => {
                setPokemonDetails(resp.data);
            })
            .catch((error) => {
                console.log("Erro ao buscar informaçöes de pokemon");
                console.log(error.response);
            });
    }

    return (
        <Container
            color={getPokemonColors(
                pokemonDetails.types && pokemonDetails.types[0].type.name
            )}
            onClick={() => {
                goToDetailPage(navigate, pokemonDetails.id);
            }}>
            <DivNameType>
                <PokemonName>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</PokemonName>
                {pokemonDetails.types?.map((type) => {
                    return (
                        <Type key={type.type.name}>
                            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                        </Type>
                    );
                })}
            </DivNameType>
            <ImgPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`} />
            <BgPokeball src={bgPokeball} />
        </Container>
    )
}