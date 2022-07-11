import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  /* 1st way of getting images: "Promise based syntax"
    onSearchBarSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID f9ve_ynFbBPT_aqqamh-U8g5xYo4bG_JFSCmtQ1ROdM'
            }
        })
        .then(response => {
            console.log(response.data.results);
        });
    }
*/

/* 2nd way of getting images: "Async await syntax"
    async onSearchBarSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID f9ve_ynFbBPT_aqqamh-U8g5xYo4bG_JFSCmtQ1ROdM'
            }
        });
        //console.log(response.data.results);
        //console.log(this);
        this.setState({ images: response.data.results });
    }
*/

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296',
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
