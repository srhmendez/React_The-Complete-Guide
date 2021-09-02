import DropDown from './Dropdown';
import Search from './Search';
import './Form.css';

const Form = () => {

    return(
    <div className="nav-bar">
        <form className='filter-genres'>
            <DropDown></DropDown>
            <DropDown></DropDown>
            <Search></Search>
        </form>
      </div>
    );
}

export default Form;