import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomMilageSelectFieldMaybe = props => {
  const { name, id, brands, intl } = props;
  const milageLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.milageLabel',
  });
  const milagePlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.milagePlaceholder',
  });
  const milageRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.milageRequired',
    })
  );
  return brands ? (
    <FieldSelect
      className={css.milage}
      name={name}
      id={id}
      label={milageLabel}
      validate={milageRequired}
    >
      <option disabled value="">
        {milagePlaceholder}
      </option>
      {brands.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomMilageSelectFieldMaybe;
