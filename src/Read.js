import React, { Component } from "react";
import Books from "./Books";

class Read extends Component{

    onBookShelfChange = (book,shelf) => {
        
        this.props.onShelfChange(book, shelf);
    };

    render(){

        const read = this.props.books.filter((book) => book.shelf === 'read')

        return(
            <div className="bookshelf">
                
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                        {read.map(book => {
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

export default Read;