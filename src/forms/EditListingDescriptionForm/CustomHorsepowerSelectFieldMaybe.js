import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomHorsepowerSelectFieldMaybe = props => {
  const { name, id, horsepowers, intl } = props;
  const horsepowerLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.horsepowerLabel',
  });
  const horsepowerPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.horsepowerPlaceholder',
  });
  const horsepowerRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.horsepowerRequired',
    })
  );
  return horsepowers ? (
    <FieldSelect
      className={css.horsepower}
      name={name}
      id={id}
      label={horsepowerLabel}
      validate={horsepowerRequired}
    >
      <option disabled value="">
        {horsepowerPlaceholder}
      </option>
      {horsepowers.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomHorsepowerSelectFieldMaybe;
