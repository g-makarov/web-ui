import type { Meta } from '@storybook/react';
import React, { FC, useState } from 'react';
import { components, OptionProps } from 'react-select';

import { NewSelectOption, Select, SelectOption } from '.';

const meta = {
  title: 'Components/Inputs/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

export const Standard: React.FC = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select
      options={[
        { label: 'Option 1', value: 'option-1' },
        { label: 'Option 2', value: 'option-2' },
        { label: 'Option 3', value: 'option-3' },
      ]}
      value={value}
      onChange={setValue}
      isClearable
    />
  );
};

const UserOption: FC<OptionProps<SelectOption<string>, true>> = ({ children, ...props }) => (
  <components.Option {...props}>
    <div style={{ display: 'flex' }}>
      <img src={props.data.photo} alt="" style={{ width: 20 }} />
      {children}
    </div>
  </components.Option>
);

export const Multi: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Select
      options={[
        { label: 'Option 1', value: 'option-1', photo: 'https://picsum.photos/188' },
        { label: 'Option 2', value: 'option-2', photo: 'https://picsum.photos/199' },
        { label: 'Option 3', value: 'option-3', photo: 'https://picsum.photos/200' },
      ]}
      value={value}
      onChange={setValue}
      isClearable
      isMulti
      components={{ Option: UserOption }}
    />
  );
};

export const Creatable: React.FC = () => {
  const [value, setValue] = useState<number | NewSelectOption | null>(null);

  return (
    <Select
      options={[
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
      ]}
      value={value}
      onChange={setValue}
      isClearable
      isCreatable
    />
  );
};

export const MultiCreatable: React.FC = () => {
  const [value, setValue] = useState<(string | NewSelectOption)[]>([]);

  return (
    <Select
      options={[
        { label: 'Option 1', value: 'option-1' },
        { label: 'Option 2', value: 'option-2' },
        { label: 'Option 3', value: 'option-3' },
      ]}
      value={value}
      onChange={setValue}
      isCreatable
      isMulti
    />
  );
};
