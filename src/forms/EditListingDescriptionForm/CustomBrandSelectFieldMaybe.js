import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomBrandSelectFieldMaybe = props => {
  const { name, id, brands, intl } = props;
  const brandLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.brandLabel',
  });
  const brandPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.brandPlaceholder',
  });
  const brandRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.brandRequired',
    })
  );
  return brands ? (
    <FieldSelect
      className={css.brand}
      name={name}
      id={id}
      label={brandLabel}
      validate={brandRequired}
    >
      <option disabled value="">
        {brandPlaceholder}
      </option>
      {brands.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomBrandSelectFieldMaybe;
