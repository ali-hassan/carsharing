import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomAgeSelectFieldMaybe = props => {
  const { name, id, brands, intl } = props;
  const ageLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.ageLabel',
  });
  const agePlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.agePlaceholder',
  });
  const ageRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.ageRequired',
    })
  );
  return brands ? (
    <FieldSelect
      className={css.age}
      name={name}
      id={id}
      label={ageLabel}
      validate={ageRequired}
    >
      <option disabled value="">
        {agePlaceholder}
      </option>
      {brands.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomAgeSelectFieldMaybe;
