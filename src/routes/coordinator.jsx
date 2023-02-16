export const goToHomePage = (navigate) => {
    navigate("/");
  };
  
  export const goToDetailPage = (navigate, id) => {
    navigate(`/details/${id}`);
  };