import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomAgeSelectFieldMaybe = props => {
  const { name, id, ages, intl } = props;
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
  return ages ? (
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
      {ages.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomAgeSelectFieldMaybe;
