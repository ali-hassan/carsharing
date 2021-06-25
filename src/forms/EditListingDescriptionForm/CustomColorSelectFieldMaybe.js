import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomColorSelectFieldMaybe = props => {
  const { name, id, brands, intl } = props;
  const colorLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.colorLabel',
  });
  const colorPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.colorPlaceholder',
  });
  const colorRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.colorRequired',
    })
  );
  return brands ? (
    <FieldSelect
      className={css.color}
      name={name}
      id={id}
      label={colorLabel}
      validate={colorRequired}
    >
      <option disabled value="">
        {colorPlaceholder}
      </option>
      {brands.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomColorSelectFieldMaybe;
