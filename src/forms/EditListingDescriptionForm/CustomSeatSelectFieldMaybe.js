import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomSeatSelectFieldMaybe = props => {
  const { name, id, brands, intl } = props;
  const seatLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.seatLabel',
  });
  const seatPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.seatPlaceholder',
  });
  const seatRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.seatRequired',
    })
  );
  return brands ? (
    <FieldSelect
      className={css.seat}
      name={name}
      id={id}
      label={seatLabel}
      validate={seatRequired}
    >
      <option disabled value="">
        {seatPlaceholder}
      </option>
      {brands.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomSeatSelectFieldMaybe;
