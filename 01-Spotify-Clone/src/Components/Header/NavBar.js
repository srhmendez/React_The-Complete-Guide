

const NavBar = () => {

    return(
        <div className="nav-bar">
        <form className='filter-genres'>

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

          <div className="playlist-genres dropdowns">
            <div className="inner-dropdown-divs"> 
              <label className='dropdown' for="playlist" id='playlist'>Choose A Playlist</label>
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

        </form>
      </div>
    );
}

export default NavBar;