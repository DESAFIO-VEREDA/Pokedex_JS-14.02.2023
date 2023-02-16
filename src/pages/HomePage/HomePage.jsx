import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";
import { URL_DETAILS } from "../../constants/url";
import { Header } from "../../components/Header/Header";
import { DivHomepage, DivTitleInput, Input, InputIcon } from "./styled";
import searchIcon from "../../assets/search-icon.png"

export const HomePage = () => {
    const context = useContext(GlobalContext);
    const { pokemonList} = context;

    return (
        <>
        <Header/>
        <DivTitleInput>
            <div>
                <Input></Input>
                <InputIcon src={searchIcon}/>
            </div>
            <h1>Pokedéx</h1>
        </DivTitleInput>
        <DivHomepage>
            {pokemonList.map((pokemon) => {
                return <CardPokemon pokemon={pokemon} key={pokemon.url} pokemonUrl={`${URL_DETAILS}/${pokemon.name}`}/>
        })}
        </DivHomepage>
        </>
    )
}