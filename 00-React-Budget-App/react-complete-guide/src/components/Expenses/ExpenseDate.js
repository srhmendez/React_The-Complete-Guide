import './ExpenseDate.css';

const ExpenseDate = (props) => {

    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();

    return(
        <div className="dateCard">
          <div className="dateContainer">
            <div>
              <p>{month}</p>
            </div>
            <div>
              <p>{day}</p>
            </div>
            <div>
              <p>{year}</p>
            </div>
          </div>
        </div>
    )
}

export default ExpenseDate;