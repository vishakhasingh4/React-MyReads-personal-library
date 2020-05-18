import React, {Component} from 'react';

class Books extends Component{

    onBookShelfChange = (e) => {
        const shelf = e.target.value;
        this.props.onBookChange(this.props.book, shelf);
    };

    render(){

        
         
        return(
            
            
                    <div className="book">
                        
                        <div className="book-top">
                            
                            <div className="book-cover" 
                                 style={{ 
                                     width: 128, 
                                     height: 193, 
                                     backgroundImage: `url("${ this.props.book.imageLinks && this.props.book.imageLinks.thumbnail }")`
                                      }}/>
                            <div className="book-shelf-changer">
                                <select onChange={this.onBookShelfChange} defaultValue={this.props.book.shelf}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{this.props.book.title}</div>
                        <div className="book-authors">{this.props.book.authors}</div>
                    </div>       
           
        );
    }
}

export default Books;
