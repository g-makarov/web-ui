import clsx from 'clsx';
import React, { ChangeEvent, FC } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { Icon } from '~/components/common/Icon';
import { TextInput } from '~/components/form/TextInput';
import { useCombinedPropsWithKit } from '~/hooks';
import { useAppelloKit } from '~/index';

import styles from './styles.module.scss';

export interface SearchInputProps {
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  debounceDelay?: number;
}

export const SearchInput: FC<SearchInputProps> = props => {
  const kit = useAppelloKit();
  const {
    onChange,
    className,
    placeholder,
    defaultValue,
    debounceDelay = kit.debounceDelay,
  } = useCombinedPropsWithKit({ name: 'SearchInput', props });

  const handleChange = useDebouncedCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    onChange(target.value);
  }, debounceDelay);

  return (
    <div className={clsx('relative', className)}>
      <Icon name="magnifier" className={styles['icon']} />
      <TextInput
        onChange={handleChange}
        placeholder={placeholder}
        inputClassName={styles['input']}
        defaultValue={defaultValue}
      />
    </div>
  );
};