import $$$ from "tripledollar";
import './style.less';

export default {
	name: 'unstrap-card',
	selectors: ['.unstrap-card'],
	extend: () => {},
	render: (props) => {
		props = props || {};
		let elem = $$$('div.unstrap-card');
		if (props.children) {
			elem.ins(props.children);
		}
		return elem;
	}
}
