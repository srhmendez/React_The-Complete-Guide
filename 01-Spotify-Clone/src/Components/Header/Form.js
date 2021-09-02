import DropDown from './Dropdown';


const Form = () => {

    return(
    <div className="nav-bar">
        <form className='filter-genres'>
            <DropDown></DropDown>
            <DropDown></DropDown>

        </form>
      </div>
    );
}

export default Form;