import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomDoorSelectFieldMaybe = props => {
  const { name, id, doors, intl } = props;
  const doorLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.doorLabel',
  });
  const doorPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.doorPlaceholder',
  });
  const doorRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.doorRequired',
    })
  );
  return doors ? (
    <FieldSelect
      className={css.door}
      name={name}
      id={id}
      label={doorLabel}
      validate={doorRequired}
    >
      <option disabled value="">
        {doorPlaceholder}
      </option>
      {doors.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomDoorSelectFieldMaybe;
