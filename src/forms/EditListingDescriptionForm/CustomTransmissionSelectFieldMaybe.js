import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomTransmissionSelectFieldMaybe = props => {
  const { name, id, categories, intl } = props;
  const transmissionLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.transmissionLabel',
  });
  const transmissionPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.transmissionPlaceholder',
  });
  const transmissionRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.transmissionRequired',
    })
  );
  return categories ? (
    <FieldSelect
      className={css.transmission}
      name={name}
      id={id}
      label={transmissionLabel}
      validate={transmissionRequired}
    >
      <option disabled value="">
        {transmissionPlaceholder}
      </option>
      {categories.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomTransmissionSelectFieldMaybe;
