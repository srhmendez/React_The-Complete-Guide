import './Dropdown.css';

const DropDown = () => {
    

    return(
            <div className="playlist-genres dropdowns">

                <div className="inner-dropdown-divs"> 
                    <label className='dropdown' for="playlist" id='playlist'><span className="dropdown-label-txt">Choose A Genre</span></label>
                </div>
                
                <div className="inner-dropdown-divs">
                    <select name='playlist'>
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                    <option value="Rap">Rap</option>
                    <option value="Electronic">Electronic</option>
                    </select>
                </div>

            </div>
    );
}

export default DropDown;