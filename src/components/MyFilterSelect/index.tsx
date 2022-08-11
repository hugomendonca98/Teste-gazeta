import React from 'react'

import { OptionFilter, SelectFilter } from './styles';

interface FilterSelectProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  isActive: boolean;
}

export default function MyFilterSelect({
  selected,
  setSelected,
  isActive,
}: FilterSelectProps): JSX.Element {
  return (
    <>
      <SelectFilter
        isActive={isActive}
        name="alphabet"
        defaultValue={selected}
        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSelected(e.target.value)}
      >
        <OptionFilter value="">Filtrar</OptionFilter>
        <OptionFilter value="discountAmount">Desconto</OptionFilter>
      </SelectFilter>
    </>
  );
}
