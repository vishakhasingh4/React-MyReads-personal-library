import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Books from './Books';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component{
    
    constructor(args) {
        super(args);
        this.state = {
            searchResults: []
        }
    }

    search = (e) => {
        const query = e.target.value;
        if (!query) {
            this.setState({searchResults: []});
            return;
        }
        BooksAPI.search(query).then(searchResults => {
            if (searchResults.error) {
                searchResults = [];
            }
            searchResults = searchResults.map((book) => {
                const bookInShelf = this.props.books.find(b => b.id === book.id);
                if (bookInShelf) {
                    book.shelf = bookInShelf.shelf;
                }
                if(book.shelf===undefined){
                    book.shelf='none';
                }
                return book;
            });
            this.setState({searchResults });
        });
    };

    onBookShelfChange = (book,shelf) => {
        
        this.props.onShelfChange(book, shelf);
    };
    
    render(){

        return(

            <div className="search-books">
                <div className="search-books-bar">

                    <Link 
                       to='/' 
                       className="close-search"
                       onClick={this.props.reset}
                    >Close</Link>
                    
                    <div className="search-books-input-wrapper">
                        <input 
                        type="text" 
                        placeholder="Search by title or author" 
                        onChange={this.search}
                        />
                    </div>

                </div>

                <div className="search-books-results">
                    
                    <ol className="books-grid">

                        {this.state.searchResults && this.state.searchResults.map((book)=>(
                            
                            <li key={book.id}>
                                
                                <Books book={book} onBookChange={this.onBookShelfChange}/>
                            
                            </li>
                        ))}
                    </ol>
                </div>

            </div>
        );
    }
}

export default SearchBooks;