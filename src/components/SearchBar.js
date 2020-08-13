import React from "react";
class SearchBar extends React.Component {
  state = { term: "" };
  onChangeHandler = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmitting(this.state.term);
  };
  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Search Videos</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onChangeHandler}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
