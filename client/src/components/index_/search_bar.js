import { Component } from 'react';

class Search extends Component {
    render() {
      if (this.props.page ==="main") {
        return (
          <div class="top-search" value="영화">
            <select>
              <option value="united">영화</option>
              <option value="saab">극장</option>
            </select>
            <input type="text" placeholder="원하시는 영화를 검색해주세요" />
          </div>
        );
      }
      else {
        return (<div class="top-search"></div>);
      }
    }
  }
  
  export default Search;
  