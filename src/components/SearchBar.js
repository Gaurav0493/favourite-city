import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

class SearchBar extends React.Component {

  state = {
    searchedText: ''
  }

  handleSearch = (e) =>{
    // debugger
      e.preventDefault();
      this.setState({searchedText:e.target.value})
  }

  render() {
      let { searchFor } = this.props;
    return (
      <div className="App">
        <form>
        <TextField onChange={(e)=>this.handleSearch(e)} label='Search' fullWidth={true} style={{width:'50%', textAlign:"right", marginTop: '5px'}} placeholder="search for the city" />
        <IconButton style={{ marginLeft:'-15px', marginTop:'10px'}}>
        <SearchIcon color="primary" onClick={()=>searchFor(this.state.searchedText)} />
        </IconButton>
        </form>
      </div>
    );
  }
}

export default SearchBar;
