import React, { Component } from "react";
import Item from "./item";
import http from '../services/httpService'



class TitleList extends Component {

  state = { data: [], mounted: false };

  loadContent = async () => {
    const requestUrl = await http.get(`https://api.themoviedb.org/3/${this.props.url}&api_key=87dfa1c669eea853da609d4968d294be`)
    this.setState({data: requestUrl.data})
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url && nextProps.url !== "") {
      this.setState({ mounted: true, url: nextProps.url }, () => {
        this.loadContent();
      });
    }
  }

  componentDidMount() {
    if (this.props.url !== "") {
      this.loadContent();
      this.setState({ mounted: true });
    }
  }

  render() {
    let titles = "";
    if (this.state.data.results) {
      titles = this.state.data.results.map(function(title, i) {
        console.log(title)
        if (i < 5) {
          let name = "";
          const backDrop =
            "http://image.tmdb.org/t/p/original" + title.backdrop_path;
          if (!title.name) {
            name = title.original_title;
          } else {
            name = title.name;
          }

          return (
            <Item
              key={title.id}
              title={name}
              score={title.vote_average}
              overview={title.overview}
              backdrop={backDrop}
            />
          );
        } else {
          return <div key={title.id} />;
        }
      });
    }
    
    return (
      <div
        ref="titlecategory"
        className="TitleList"
        data-loaded={this.state.mounted}
      >
        <div className="Title">
          <h1 className={this.props.title==="Search Results"? "searchQuery":"searchResult"}>{this.props.title}</h1>
          <div className="titles-wrapper">{titles}</div>
        </div>
      </div>
    );
  }
}

export default TitleList;
