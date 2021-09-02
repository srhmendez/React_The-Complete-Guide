

const DropDown = () => {
    

    return(
            <div className="playlist-genres dropdowns">

                <div className="inner-dropdown-divs"> 
                    <label className='dropdown' for="playlist" id='playlist'>Choose A Genre</label>
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