import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    onInputChange(event){
        console.log(event.target.value);
    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label htmlFor="searchText">Search by Email</label>
                        <input id="searchText" type="text" value={this.state.term} onChange={(e) => {
                            this.setState({term: e.target.value});
                        }} />
                    </div>
                </form>
            </div>            
        );
    };
};

export default SearchBar;