import React,{ Component } from "react";
import Books from "./Books";

class CurrentlyReading extends Component{
    
    onBookShelfChange = (book,shelf) => {
        
        this.props.onShelfChange(book, shelf);
    };
    

    render(){
        
        
        const currentlyReading = this.props.books.filter((book) => book.shelf === 'currentlyReading');

        return(
            <div className="bookshelf">
                
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                    {currentlyReading.map(book=>{
                        return(
                            
                            <li key={book.id}>
                                
                            <Books book={book} onBookChange={this.onBookShelfChange}/>
                            </li>
                        );
                       
                    })}

                    </ol>
                </div>
            </div>
        );
    }
} 

export default CurrentlyReading;