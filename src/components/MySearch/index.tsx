import React, { useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

import { ButtonClose, IconSearch, InputContainer, SearchInput } from './styles';

interface SearchProps {
  placeholder: string;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function MySearch({
  placeholder,
  search,
  setSearch,
}: SearchProps): JSX.Element {
  const handleClearInput = useCallback(() => {
    setSearch('');
  }, [setSearch]);

  const handleChangeValue = useCallback(
      (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setSearch(e.target.value);
    },
    [setSearch],
  );

  return (
    <InputContainer>
      <IconSearch>
        <FiSearch
          color={search !== '' ? '#f25d27' : '#c3c4c7'}
        />
      </IconSearch>
      <SearchInput
        placeholder={placeholder}
        onChange={handleChangeValue}
        value={search}
      />
      <ButtonClose onClick={handleClearInput}>
        {search !== '' && <AiOutlineClose />}
      </ButtonClose>
    </InputContainer>
  );
}