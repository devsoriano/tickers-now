import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import "./styles.scss";

export const GoBack = () => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate("/");

  return (
    <MdArrowBack
      className="goBack"
      size={36}
      onClick={() => navigateToHome()}
      data-testid="goBack"
    />
  );
};
