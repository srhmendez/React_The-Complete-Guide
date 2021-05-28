import "./Card.css";

const Card = (props) => {
    // To carry classnames with components you need to create a const of the classes you want to carry over and then assign the classes const to the div classname in the returned element below.
    // The props.className is telling that any className you set to the returned div element will be added to the classes const names
    //there will be an error if you leave the additional props.className undefined. it will apply a className of "undefined" to the element
    const classes = 'card ' + props.className;

    // To use components as wrappers, you need to use the props.children prop to let the component have "generic children" that will be replaced with different data at a later time.
    return <div className={classes}>{props.children}</div>;
}

export default Card;