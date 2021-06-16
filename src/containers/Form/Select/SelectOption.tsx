import React, { useState } from 'react'
import { DownArrowIconSvg, CheckIconSvg } from '../../../components/Icon/Icon';
import { Main, DropDownHeader, DropDownListContainer, ListItem } from './Select.style';

interface IProps {
  handleSelectRole:(role: string) => void
}

const SelectOption:React.FC<IProps> = ({handleSelectRole}:IProps) => {
  const options = [
    { id: 0, value: 'Developer', key: 'developer' },
    { id: 1, value: 'Graphics', key: 'graphics' },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    handleSelectRole(value);
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <Main>
      <DropDownHeader onClick={toggling}>
        {selectedOption || 'I would describe my user type as'}
        <DownArrowIconSvg />
      </DropDownHeader>

      {isOpen && (
        <DropDownListContainer>
          <ul>
            {options.map(option => (
              <ListItem onClick={onOptionClicked(option.value)} key={option.id}>
                {option.value}
                <CheckIconSvg />
              </ListItem>
            ))}
          </ul>
        </DropDownListContainer>
      )}
    </Main>
  );
}

export default SelectOption
