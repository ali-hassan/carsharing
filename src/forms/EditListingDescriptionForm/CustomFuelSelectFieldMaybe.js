import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomFuelSelectFieldMaybe = props => {
  const { name, id, brands, intl } = props;
  const fuelLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.fuelLabel',
  });
  const fuelPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.fuelPlaceholder',
  });
  const fuelRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.fuelRequired',
    })
  );
  return brands ? (
    <FieldSelect
      className={css.fuel}
      name={name}
      id={id}
      label={fuelLabel}
      validate={fuelRequired}
    >
      <option disabled value="">
        {fuelPlaceholder}
      </option>
      {brands.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomFuelSelectFieldMaybe;
