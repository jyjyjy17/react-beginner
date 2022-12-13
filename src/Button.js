import PropTypes from "prop-types" ;
import styles from "./Button.module.css"

function Button(props){
    return <button onClick = {props.onClick} className={styles.btn}>{props.text}</button>;
}

Button.propTypes = {
    text:PropTypes.string.isRequired
}
export default Button;