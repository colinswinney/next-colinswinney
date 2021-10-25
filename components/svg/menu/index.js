import { MenuEl } from "./styles/menu";

const Menu = () => {
	return (
		<MenuEl
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 0 24 24"
			width="24px"
		>
			<path d="M0 0h24v24H0z" style={{ fill: "none" }} />
			<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
		</MenuEl>
	);
};

export default Menu;
