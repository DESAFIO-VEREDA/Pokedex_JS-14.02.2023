import imgHeader from "../../assets/top-pokedex.png"
import imgPokedex from "../../assets/pokeball.png"
import { ImgBg, ImgPokedex } from "./style"

export const Header = () => {

    return (
        <>
            <ImgBg src={imgHeader}/>
            <ImgPokedex src={imgPokedex}/>
        </>
    )
}