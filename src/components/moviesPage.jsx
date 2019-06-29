import React, { Component } from "react";
import "../App.css";
import Navigation from "./navigation";
import TitleList from "./titleList";
import Slider from "./slider";
import SinglePage from './clickPage';

class MoviesPage extends Component {
  state = { searchTerm: "", searchUrl: "" };

  handleKeyUp = e => {
    e.preventDefault();
    if (e.key === "Enter" && this.state.searchTerm !== "") {
      const searchUrl = `search/multi?query=${
        this.state.searchTerm
      }&api_key=87dfa1c669eea853da609d4968d294be`;
      this.setState({ searchUrl: searchUrl });
    }
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div style={{ color: "white", backgroundColor: "black" }}>
        <header className="Header">
          <Navigation type="search" placeholder="Search for a title..." keyUp={this.handleKeyUp} searchTerm={this.state.searchTerm} onChange={this.handleChange}/>    
        </header>
        <Slider />
        <TitleList title="Search Results" url={this.state.searchUrl} />
        <TitleList
          title="Top TV picks"
          url="discover/tv?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Trending now"
          url="discover/movie?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Most watched in Horror"
          url="genre/27/movies?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Sci-Fi greats"
          url="genre/878/movies?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Comedy magic"
          url="genre/35/movies?sort_by=popularity.desc&page=1"
        />
      </div>
    );
  }
}

export default MoviesPage;
