import React, { useState, useEffect, useRef } from 'react';

import searchIcon from '../../images/search-icon.svg';

import { Wrapper, Content } from './SearchBar.styles';

type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}


const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

// class SearchBar extends Component {
//   state = { value: '' };
//   timeout = null;

//   componentDidUpdate(_prevProps, prevState) {
//     if (this.state.value !== prevState.value) {
//       const { setSearchTerm } = _prevProps; //this.props
//       clearTimeout(this.timeout);
//       this.timeout = setTimeout(() => {
//         const { value } = this.state;
//         setSearchTerm(value);
//       }, 500);
//     }
//   }
//   render() {
//     const { value } = this.state;
//     return (
//       <Wrapper>
//         <Content>
//           <img src={searchIcon} alt="search-icon" />
//           <input
//             type="text"
//             placeholder="Search Movie"
//             onChange={(event) =>
//               this.setState({ value: event.currentTarget.value })
//             }
//             value={value}
//           />
//         </Content>
//       </Wrapper>
//     );
//   }
// }



export default SearchBar;
