export const getPokemonColors = (type) => {
    switch (type) {
      case "bug":
        return "#729f3f";
      case "dark":
        return "#707070";
      case "dragon":
        return "#fc801e";
      case "electric":
        return "#eed535";
      case "fairy":
        return "#fdb9e9";
      case "fighting":
        return "#d56723";
      case "fire":
        return "#fd7d24";
      case "flying":
        return "#7ecdf7";
      case "ghost":
        return "#7b62a3";
      case "grass":
        return "#9bcc50";
      case "ground":
        return "#906727";
      case "ice":
        return "#51c4e7";
      case "normal":
        return "#a4acaf";
      case "poison":
        return "#6f55af";
      case "psychic":
        return "#f355b9";
      case "rock":
        return "#a38c21";
      case "shadow":
        return "#3b3b3b";
      case "steel":
        return "#9eb7b8";
      case "water":
        return "#4592c4";
      default:
        return "#666666";
    }
  };