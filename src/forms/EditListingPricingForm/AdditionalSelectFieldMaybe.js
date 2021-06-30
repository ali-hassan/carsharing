import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingPricingForm.css';
import FieldCheckboxGroup from "../../components/FieldCheckboxGroup/FieldCheckboxGroup";

const AdditionalSelectFieldMaybe = props => {
  const { name, id, brands, intl } = props;
  const ageLabel = intl.formatMessage({
    id: 'Additional Options',
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
    <FieldCheckboxGroup
      className={css.additional}
      name={name}
      id={id}
      label={ageLabel}
      validate={ageRequired}
    >
      {brands.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldCheckboxGroup>
  ) : null;
};

export default AdditionalSelectFieldMaybe;
