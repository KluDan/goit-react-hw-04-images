import { BsSearch } from 'react-icons/bs';
import {
  SearchbarBlock,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ submitQuery }) => {
  return (
    <SearchbarBlock>
      <SearchForm
        onSubmit={evt => {
          evt.preventDefault();
          submitQuery(evt.target.elements.query.value);
          evt.target.reset();
        }}
      >
        <SearchFormButton type="submit">
          <BsSearch size="32" />
        </SearchFormButton>
        <SearchFormInput
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarBlock>
  );
};
