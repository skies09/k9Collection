import { useNavigate } from "react-router-dom";
import "./button.scss";

export default function Button({buttonText, buttonNavigation}) {
    const navigate = useNavigate();

	return (
		<button
				className="button"
				onClick={() => {
					navigate(buttonNavigation);
				}}
			>
				{buttonText}
			</button>
	);
}
