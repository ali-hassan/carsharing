import React from 'react';
import { bool, func, object, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { ensureOwnListing } from '../../util/data';
import { findOptionsForSelectFilter } from '../../util/search';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ListingLink, FieldSelect } from '../../components';
import { EditListingDescriptionForm } from '../../forms';
import config from '../../config';

import css from './EditListingDescriptionPanel.css';

const EditListingDescriptionPanel = props => {
  const {
    className,
    rootClassName,
    listing,
    disabled,
    ready,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { description, title, publicData } = currentListing.attributes;

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingDescriptionPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingDescriptionPanel.createListingTitle" />
  );

  const categoryOptions = findOptionsForSelectFilter('category', config.custom.filters);
  // const transmissionKey = 'transmission';
  // const horsepowerKey = 'horsepower';
  // const transmissionKey = publicData && publicData.transmission;
  const transmissionOptions = findOptionsForSelectFilter('transmission', config.custom.filters);
  const horsepowerOptions = findOptionsForSelectFilter('horsepower', config.custom.filters);
  const brandsOptions = findOptionsForSelectFilter('brand', config.custom.filters);
  const fuelOptions = findOptionsForSelectFilter('fuel', config.custom.filters);
  const seatsOptions = findOptionsForSelectFilter('seat', config.custom.filters);
  const doorsOptions = findOptionsForSelectFilter('door', config.custom.filters);
  const agesOptions = findOptionsForSelectFilter('age', config.custom.filters);
  const milageOptions = findOptionsForSelectFilter('milage', config.custom.filters);
  const colorOptions = findOptionsForSelectFilter('color', config.custom.filters);

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingDescriptionForm
        className={css.form}
        initialValues={{ title, description, category: publicData.category, transmission: publicData.transmission, horsepower: publicData.horsepower, brand: publicData.brand, fuel: publicData.fuel,
          seat: publicData.seat, door: publicData.door, age: publicData.age, color: publicData.color, milage: publicData.milage }}
        saveActionMsg={submitButtonText}
        onSubmit={values => {
          const { title, description, category, transmission, horsepower, brand, fuel, seat, door, age, color, milage } = values;
          const updateValues = {
            title: title.trim(),
            description,
            publicData: { category, transmission, horsepower, brand, fuel, seat, door, age, color, milage },
          };

          onSubmit(updateValues);
        }}
        onChange={onChange}
        disabled={disabled}
        ready={ready}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
        categories={categoryOptions}
        transmissions={transmissionOptions}
        horsepowers={horsepowerOptions}
        brands={brandsOptions}
        fuels={fuelOptions}
        seats={seatsOptions}
        doors={doorsOptions}
        ages={agesOptions}
        colors={colorOptions}
        milages={milageOptions}
      />
    </div>
  );
};

EditListingDescriptionPanel.defaultProps = {
  className: null,
  rootClassName: null,
  errors: null,
  listing: null,
};

EditListingDescriptionPanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  disabled: bool.isRequired,
  ready: bool.isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingDescriptionPanel;
