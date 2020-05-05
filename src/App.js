import React from 'react'

import * as BooksAPI from './BooksAPI';

import './App.css'
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';
import SearchBooks from './SearchBooks';
import OpenSearch from './OpenSearch';
import {Route} from 'react-router-dom';
import Header from './Header';


class BooksApp extends React.Component {
  state = {
    books : [],
    
  };

  componentDidMount(){
    BooksAPI.getAll()
    .then((books)=>{
      this.setState(()=>({
        books
      }));
    })
  }

  resetSearch = () => {
    BooksAPI.getAll()

    .then((books) => {

        this.setState(() => ({

            books:books,
            

        }));
    })
  };

  onShelfChange = (book, shelf) => {

    BooksAPI.update(book, shelf)

    .then(
        this.setState((state) => ({

            books: state.books.map(b => {

                if(b.title  === book.title){

                    b.shelf = shelf;
                    return b
                }
                else{

                    return b
                }
            }),
        }))
    )
}


  render() {
    
    // const currentlyReading = this.state.books.filter((book) => book.shelf === 'currentlyReading')
    // const wantToRead = this.state.books.filter((book) => book.shelf === 'wantToRead')
    // const read = this.state.books.filter((book) => book.shelf === 'read')
    
    return (
      <div className="app">
        
        {/* {JSON.stringify(this.state.books)} */}
        <Route path='/search' render={()=>(
          <SearchBooks 
          books={this.state.books}
          reset={this.resetSearch}
          onShelfChange={this.onShelfChange}
          />
        )}/>
          
        <Route exact path='/' render={()=>(
          <div className="list-books">

            <Header/>

            <div className="list-books-content">

              <div>
                <CurrentlyReading books={this.state.books} onShelfChange={this.onShelfChange} />
                <WantToRead books={this.state.books} onShelfChange={this.onShelfChange}/>
                <Read books={this.state.books} onShelfChange={this.onShelfChange}/>
              </div>

            </div>

            <OpenSearch/>

          </div>
        )}/>
          
      
      </div>
    )
  }
}

export default BooksApp;

