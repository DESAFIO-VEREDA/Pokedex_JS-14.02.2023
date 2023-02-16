import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    background-color: ${(props) => props.color};
    border-radius: 16px;
    width: 150px;
    height: 110px;
    padding: 10px;
    cursor: pointer;
    :hover {
        width: 160px;
        height: 120px;
    }
`;

export const PokemonName = styled.p`
width: 100px;
    font-size: 15px;
  font-weight: 700;
  text-align: left;
  color: white;
`;

export const DivNameType = styled.div`
    display: flex;
    flex-direction: column;
    width: 80px;

`;

export const BgPokeball = styled.img`
    align-self: center;
    position: relative;
    width: 60px;
    height: 60px;
    `;

export const ImgPokemon = styled.img`
    position: absolute;
    top: 0px;
    right: -8px;
    z-index: 2;
`;

export const Type = styled.div`
    margin-top: 10px;
    border-radius: 16px;
    width: 60px;
    text-align: center;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.color};
    color: white;
    opacity: 0.7;
`;
