import Button from '../atoms/Button';
import Input from '../atoms/Input';
import React from 'react';

const Form = () => {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form>
      <Input value={inputValue} onChange={handleChange} placeholder="Enter text" />
      <Button label="Submit" onClick={() => alert('Form submitted')} />
    </form>
  );
};

export default Form;