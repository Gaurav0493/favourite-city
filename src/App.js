import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import SearchResult from './components/SearchResult'
import SearchBar from './components/SearchBar';

class App extends React.Component {

  state = {
    searchedCity: '',
    recievedData: null
  }


   debounce = (func, wait)=> {
    let timeout;
    return function(...args) {
      const context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  }

   getCities = async (value) => {
    // this.searchedCity = value;
    this.setState({searchedCity:value})
    // const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=delhi,india&appid=6284c467c9da284a4433decb33fb7ba4&units=metric`);
    // console.log(api_call);
    // const data = await api_call.json();
    // const status = data.cod;
    // console.log(status);
    console.log(this.state.searchedCity);
    console.log('search button clicked',value);
  }

  render() {
    const debounceOnChange = e => this.debounce(this.getCities(e), 400);
    return (
      <div className="App">
        <SearchBar searchFor={this.getCities}/>
        <div style={{backgroundColor:"aqua", height:'600px', marginTop: '30px'}}>
        </div>
        {/* <SearchResult/> */}
      </div>
    );
  }
}

export default App;
