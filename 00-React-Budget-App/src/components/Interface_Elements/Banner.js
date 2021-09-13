import './Banner.css';

const Banner = (props) => {
    const bannerClass = "banner";
    return <div className={bannerClass}>
        {props.children}
        <h5>Create A New Expense</h5>
    </div>
}

export default Banner;