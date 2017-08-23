export default (props) => {
	document.body.classList.toggle('blur', props.isBlur);
	return null;
}
