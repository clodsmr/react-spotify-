import React from "react";



class AlbumPage extends React.Component {

    state = {
        
        album: []
    }

    /* fetchMovie = async () => {
        // let movie = "superman"
        const id = this.props.match.params.asin

        let url = `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`;
        try {
          const response = await fetch(url);
    
          const movie = await response.json();
          
          console.log("right after the fetch", movie);
    
          if (response.ok) {
            this.setState({
              movies: movie
              /* {
                movies: movie,
              } ,*/
           /*  });
            console.log("from the fetch", this.state.movies);
          } else {
            console.log("inside the else of Fetch");
          }
        } catch (e) {
          console.log(e);
          console.log("outside the try block");
        }
      };
    


    componentDidMount = async () => {
        console.log(this.props)
        console.log(this.props.match.params.asin)
        this.fetchMovie()
      
    } */ 
    render () {
        return (
            <div>ciao</div>
        )
    }

}

export default AlbumPage