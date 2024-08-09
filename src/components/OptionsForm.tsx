import React, { useState } from 'react'
import styled from 'styled-components'
import optionsJSON from '../assets/json/options.json'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    max-width: 80%;
    font-size: 3vh;
    color: #3036b2
  }
`;

const OptionsList = styled.div`
  width: 80%;
`;

const Option = styled.div`
  border: 0.2vh solid grey;
  border-radius: 1vh;
  padding: 2%;
  margin: 1% 0;
  font-size: 3vh;
  background-color: #83a4e8;
  color: white;
`;

const BackButton = styled.button`
  position: relative;
  right: 34%;
  padding: 1% 4%;
  border-radius: 1vh;
  background-color: grey;
  color: white;
`;

const OptionsForm = () => {
  const [selectedOption, setSelectedOption] = useState<string>();
  const [selectedSubOption, setSelectedSubOption] = useState<string>();

  const handleOptionClick = (optionName:string, event:React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (!selectedOption) {
      setSelectedOption(optionName);
      return;
    }
    if (!selectedSubOption) {
      setSelectedSubOption(optionName);
    }
  };

  const handleBackButtonClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!selectedSubOption) {
      setSelectedOption(undefined);
      return;
    }
    setSelectedSubOption(undefined);
  };

  return (
    <FormContainer>
      <h4>《どこに・何を相談したら良いか分からない方》</h4>
      <OptionsList>
        {!selectedOption && optionsJSON.map(({ name }, index) => (
          <Option key={index} onClick={(e) => handleOptionClick(name, e)}>
            {name}
          </Option>
        ))}
        {(selectedOption && !selectedSubOption) && optionsJSON.find(option => option.name === selectedOption)!.subOptions.map(({ name }, index) => (
          <Option key={index} onClick={(e) => handleOptionClick(name, e)}>
            {name}
          </Option>
        ))}
        {(selectedOption && selectedSubOption) && optionsJSON.find(option => option.name === selectedOption)!.subOptions.find(option => option.name === selectedSubOption)!.subOptions!.map(({ name }, index) => (
          <Option key={index} onClick={(e) => handleOptionClick(name, e)}>
            {name}
          </Option>
        ))}
      </OptionsList>
      {selectedOption && <BackButton onClick={(e) => handleBackButtonClick(e)}>Back</BackButton>}
    </FormContainer>
  )
}

export default OptionsForm
