import React from 'react';
import Faker from 'faker';
import SearchBar from './SearchBar';
import UserDetail from './UserDetail';
import FlagCard from './FlagCard';
import Spinner from './Spinner';

class App extends React.Component {
    userList = [];
    state = {results: [], isLoading: false};

    //React events
    componentDidMount() {
        let itr;
        for(itr = 0; itr < 10; itr++){
            let user = {
                email: Faker.internet.email(),
                jobTitle: Faker.name.jobTitle(),
                avatar: Faker.image.avatar(),
                content: Faker.lorem.sentence(),
                countryCode: Faker.address.countryCode()
            }
            
            this.userList.push(user);
        }

        console.log(this.userList);
    }

    //Event handlers
    onSearchSubmit = (searchTerm) => {
        let searchResults = this.userList.filter(user => user.email === searchTerm);
        this.setState({isLoading: true});
        
        //Simulate async call that takes some time
        setTimeout(() => {
            this.setState({results: searchResults, isLoading: false});
        }, 500);
    }
    
    //Renderers    
    generateUserDetailResults(){
        var userDetails = [];

        this.state.results.forEach(function(result, idx){
            userDetails.push(
                <FlagCard content={result.content} countryCode={result.countryCode} key={idx}>
                    <UserDetail email={result.email} jobTitle={result.jobTitle} avatar={result.avatar} key={idx} />
                </FlagCard>
            );
        });

        return userDetails;
    }

    renderSearchResult(){
        if(this.state.results.length <= 0){
            return (
                <div>No results!</div>
            );
        }
        else{
            return (
                <div className="ui cards">
                    {this.generateUserDetailResults()}
                </div>
            );
        }
    }

    renderSpinner(){
        if(this.state.isLoading){
            return (
                <div>
                    <Spinner />
                </div>
            );
        }
        
        return;
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: "15px"}}>
                {this.renderSpinner()}
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div>
                    {this.renderSearchResult()}
                </div>
            </div>
        );
    };
}

export default App;