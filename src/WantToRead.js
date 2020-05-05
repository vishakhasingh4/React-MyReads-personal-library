import React, { Component } from "react";
import Books from "./Books";

class WantToRead extends Component{

    onBookShelfChange = (book,shelf) => {
        
        this.props.onShelfChange(book, shelf);
    };


    render(){

        const wantToRead = this.props.books.filter((book) => book.shelf === 'wantToRead')

        return(
            <div className="bookshelf">
                
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                        {wantToRead.map(book => {
                            return (

                                <li key={book.id}>

                                    <Books book={book} onBookChange={this.onBookShelfChange} />
                                </li>
                            );

                        })}

                    </ol>
                </div>
            </div>
        );
    }
}

export default WantToRead;