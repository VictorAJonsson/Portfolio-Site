const Input = ({ value, onChange, placeholder }: { value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, placeholder: string }) => {
    return (
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
    );
  };
  
  export default Input;