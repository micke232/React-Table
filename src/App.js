import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';

const columns = [
  { key: 'selected', label: 'Selected Person' },
  { key: 'id', label: 'Id' },
  { key: 'first_name', label: 'First Name' },
  { key: 'last_name', label: 'Last Name' },
  { key: 'city', label: 'City' },
  { key: 'born', label: 'Born' },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { "id": 1, "first_name": "Arlyne", "last_name": "Marchbank", "cirty": "Shizuishan", "born": "10/20/2017" },
        { "id": 2, "first_name": "Myron", "last_name": "Taffurelli", "cirty": "Néa Palátia", "born": "4/27/2017" },
        { "id": 3, "first_name": "Rriocard", "last_name": "Thackeray", "cirty": "Heidelberg", "born": "3/8/2017" },
        { "id": 4, "first_name": "Daniella", "last_name": "Marcone", "cirty": "Étampes", "born": "4/10/2017" },
        { "id": 5, "first_name": "Damita", "last_name": "Tousy", "cirty": "Nueva Esperanza", "born": "2/22/2017" },
        { "id": 6, "first_name": "Ware", "last_name": "Kislingbury", "cirty": "Noveleta", "born": "11/27/2016" },
        { "id": 7, "first_name": "Hillier", "last_name": "Matuskiewicz", "cirty": "Al Mawşil al Jadīdah", "born": "11/27/2016" },
        { "id": 8, "first_name": "Aloisia", "last_name": "Westgarth", "cirty": "Granada", "born": "4/7/2017" },
        { "id": 9, "first_name": "Ashely", "last_name": "Linnemann", "cirty": "Aleysk", "born": "9/11/2017" },
        { "id": 10, "first_name": "Garfield", "last_name": "Backwell", "cirty": "Västerås", "born": "12/18/2016" },
        { "id": 11, "first_name": "Forrest", "last_name": "Weetch", "cirty": "Queniquea", "born": "7/11/2017" },
        { "id": 12, "first_name": "Loree", "last_name": "Ronald", "cirty": "Conception Bay South", "born": "9/23/2017" },
        { "id": 13, "first_name": "Harrison", "last_name": "Shailer", "cirty": "Kalbugan", "born": "2/18/2017" },
        { "id": 14, "first_name": "Clea", "last_name": "Wabersich", "cirty": "Nakhon Si Thammarat", "born": "1/3/2017" },
        { "id": 15, "first_name": "Loren", "last_name": "Esterbrook", "cirty": "Vaughan", "born": "12/23/2016" },
        { "id": 16, "first_name": "Vasili", "last_name": "Casseldine", "cirty": "Sungi Liput", "born": "8/5/2017" },
        { "id": 17, "first_name": "Ev", "last_name": "Shine", "cirty": "Colorado Springs", "born": "1/11/2017" },
        { "id": 18, "first_name": "Lita", "last_name": "Ballantyne", "cirty": "Anchorage", "born": "9/14/2017" },
        { "id": 19, "first_name": "Anet", "last_name": "Payley", "cirty": "‘Alīābād-e Katūl", "born": "1/14/2017" },
        { "id": 20, "first_name": "Aggy", "last_name": "Bigg", "cirty": "Nyahururu", "born": "9/25/2017" },
      ],
      selectedData: [],
    }
  }

  onSelect = (data, checked) => {
    const row = this.state.data.map(row => ({
      ...row,
      isSelected: data.id === row.id ? checked : row.isSelected,
    }));
    const selectedData = row.filter((d) =>
      d.isSelected === true,
    );
    this.setState({ data: row, selectedData });
  }

  renderSelected() {
    return this.state.selectedData.map((item) => {
      return <li key={item.id}>{item.first_name} {item.last_name}</li>  
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dynamic Table with Checkboxes</h1>
          <h2>By: Mikael Modig</h2>
        </header>
        <Table
          onSelect={this.onSelect}
          columns={columns}
          data={this.state.data} width={'100%'}
        />
        <div className="selected-box">
          <ul>
            {this.renderSelected()}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
