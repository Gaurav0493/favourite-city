import React from 'react';
import TextField from '@material-ui/core/TextField';

class SearchResult extends React.Component {

  state = {
    searchedCity: ''
  }

   componentDidMount(){
    const api_call = fetch(`https://api.openweathermap.org/data/2.5/weather?q=delhi,india&appid=6284c467c9da284a4433decb33fb7ba4&units=metric`);
    console.log(api_call);
    const data = api_call.then(res => res.json());
    const status = data.cod;
    console.log(status);
  }

  render() {
    return (
      <div className="App">
        <TextField onChange={(e)=>this.getCities(e)} label='Search' fullWidth={true} style={{width:'50%', textAlign:"right", marginTop: '5px'}} placeholder="search for the city" />
        <div style={{backgroundColor:"aqua", height:'600px', marginTop: '30px'}}>
        </div>
      </div>
    );
  }
}

export default SearchResult;
