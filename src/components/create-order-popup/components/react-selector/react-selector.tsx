import { useId } from "react";
import Select, { Options, OnChangeValue, StylesConfig } from "react-select";

const selectStyle: StylesConfig<ReactSelectOption | ReactSelectOption[] | string, boolean> = {
  control: (styles) => {
    return {
      ...styles,
      background: "#fff",
      padding: "unset",
      margin: "unset",
      border: "unset",
      minHeight: "24px",
      height: "auto",
      boxShadow: "none",
      cursor: "pointer",
      fontWeight: 500,
      fontSize: "16px",
    };
  },
  option: (styles, { isSelected }) => {
    return {
      ...styles,
      color: isSelected ? "#fff" : "#273443",
      cursor: "pointer",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#273443",
    };
  },
  singleValue: (styles) => {
    return {
      ...styles,
      color: "#273443",
    };
  },
  placeholder: (styles, { isDisabled }) => {
    return {
      ...styles,
      color: isDisabled ? "#2734438c" : "#B3B3B3",
      fontSize: "14px",
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      borderColor: "#273444",
      borderRadius: 8,
    };
  },
  menuList: (styles) => {
    return {
      ...styles,
      borderRadius: 8,
      padding: "unset",
    };
  },
};

interface CustomSelectProps {
  options: Options<ReactSelectOption>;
  name?: string;
  isMulti?: boolean;
  isSearchable?: boolean;
  className?: string;
  filterOption?: () => boolean;
  onItemSelected?: (item: string) => void;
  onInputChange?: (e: string) => void;
  placeholder?: string;
  borderRadius?: number;
  disabled?: boolean;
  item: string | null;
  noOptionsMessage?: string;
  maxHeight?: number;
}

export const ReactSelector = ({
  className,
  name,
  placeholder,
  borderRadius = 8,
  options,
  isSearchable = true,
  disabled = false,
  filterOption,
  onItemSelected,
  onInputChange,
  item,
  noOptionsMessage,
  maxHeight,
}: CustomSelectProps) => {
  const getValue = () => {
    if (item) {
      if (options) {
        return options.find((option) => option.value === item);
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  const onChange = (option: OnChangeValue<ReactSelectOption | ReactSelectOption[] | string, boolean>) => {
    if (onItemSelected) {
      onItemSelected((option as ReactSelectOption).value);
    }
  };
  return (
    <Select
      className={className}
      name={name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      theme={(theme) => ({
        ...theme,
        borderRadius,
        borderColor: "transparent",
        borderWidth: 0,
        fontFamily: "Montserrat",
        fontSize: "16px",
      })}
      components={{
        IndicatorSeparator: () => null,
      }}
      instanceId={useId()}
      styles={selectStyle}
      maxMenuHeight={maxHeight ?? 400}
      isSearchable={isSearchable}
      noOptionsMessage={noOptionsMessage ? ({ inputValue }) => (!inputValue ? "" : noOptionsMessage) : undefined}
      filterOption={filterOption}
      onInputChange={onInputChange}
      isDisabled={disabled}
    />
  );
};
