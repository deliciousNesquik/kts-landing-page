import { useState, type ChangeEvent, type FormEvent, type FormHTMLAttributes } from 'react';
import Icon from '../components/Icon';
import '../assets/search.css';

interface SearchBoxProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onChange'> {
  placeholder?: string;
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
  className?: string;
}

const SearchBox = ({
  placeholder = 'Поиск микроавтобусов...',
  onSearch,
  onChange,
  value,
  disabled = false,
  className = '',
  ...props
}: SearchBoxProps) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(inputValue);
  };

  const handleClear = () => {
    setInputValue('');
    onChange?.('');
    onSearch?.('');
  };

  return (
    <form className={`search-box ${className}`} onSubmit={handleSubmit} {...props}>
      <div className="search-box__container">
        <Icon name="search" color="#999999" />
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className="search-box__input"
        />
        {inputValue && (
          <button type="button" onClick={handleClear} className="search-box__clear" aria-label="Очистить поиск">
            <Icon name="close" />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBox;
