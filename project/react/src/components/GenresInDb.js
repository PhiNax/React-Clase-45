import React, { Component } from 'react';
import Genre from './Genre';

class GenresInDb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genresList: []
        }
    }

    componentDidMount() {
        fetch('/api/genres')
            .then(response => {
                return response.json()
            })
            .then(genres => {
                console.log(genres)
                this.setState({ genresList: genres.data })
            })
            .catch(err => console.log(err))
    }

    changeBackground() {
        document.getElementById("background").classList.toggle('bg-secondary');
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800"
                                onMouseOver={this.changeBackground} onMouseOut={this.changeBackground} >Genres in Data Base</h6>
                        </div>
                        <div id="background" className="card-body">
                            <div className="row">
                                {
                                    this.state.genresList.map((genre, index) => {
                                        return <Genre  {...genre} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default GenresInDb;