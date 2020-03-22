import $$$ from "tripledollar";
import './style.less';

function card(props) {
	let elem = $$$('div.unstrap-card')
	if (props.children) {
		elem.ins(props.children);
	}
	return elem;
}

export { card };