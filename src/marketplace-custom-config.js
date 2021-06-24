/*
 * Marketplace specific configuration.
 *
 * Every filter needs to have following keys:
 * - id:     Unique id of the filter.
 * - label:  The default label of the filter.
 * - type:   String that represents one of the existing filter components:
 *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
 *           SelectSingleFilter, SelectMultipleFilter.
 * - group:  Is this 'primary' or 'secondary' filter?
 *           Primary filters are visible on desktop layout by default.
 *           Secondary filters are behind "More filters" button.
 *           Read more from src/containers/SearchPage/README.md
 * - queryParamNames: Describes parameters to be used with queries
 *                    (e.g. 'price' or 'pub_amenities'). Most of these are
 *                    the same between webapp URLs and API query params.
 *                    You can't change 'dates', 'price', or 'keywords'
 *                    since those filters are fixed to a specific attribute.
 * - config: Extra configuration that the filter component needs.
 *
 * Note 1: Labels could be tied to translation file
 *         by importing FormattedMessage:
 *         <FormattedMessage id="some.translation.key.here" />
 *
 * Note 2: If you need to add new custom filter components,
 *         you need to take those into use in:
 *         src/containers/SearchPage/FilterComponent.js
 *
 * Note 3: If you just want to create more enum filters
 *         (i.e. SelectSingleFilter, SelectMultipleFilter),
 *         you can just add more configurations with those filter types
 *         and tie them with correct extended data key
 *         (i.e. pub_<key> or meta_<key>).
 */

export const filters = [
  {
    id: 'dates',
    label: 'Dates',
    type: 'BookingDateRangeFilter',
    group: 'primary',
    // Note: BookingDateRangeFilter is fixed filter,
    // you can't change "queryParamNames: ['dates'],"
    queryParamNames: ['dates'],
    config: {},
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 1000,
      step: 5,
    },
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
  {
    id: 'category',
    label: 'Category',
    type: 'SelectSingleFilter',
    group: 'secondary',
    queryParamNames: ['pub_category'],
    config: {
      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'small_car', label: 'Small car' },
        { key: 'compact_car', label: 'Compact car' },
        { key: 'suv', label: 'SUV / off-road vehicle'},
        { key: 'vans', label: 'Vans / minivans' },
        { key: 'commercial', label: 'Commercial vehicle' },
        { key: 'sports', label: 'Sports car' },
      ],
    },
  },
  {
    id: 'transmission',
    label: 'Transmission',
    type: 'SelectSingleFilter',
    group: 'secondary',
    queryParamNames: ['pub_transmission'],
    config: {
      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'select_transmission', label: 'Select Transmission' },
        { key: 'automatic', label: 'Automatic' },
        { key: 'manual', label: 'Manual' },
      ],
    },
  },
  {
    id: 'horsepower',
    label: 'Horsepower',
    type: 'SelectSingleFilter',
    group: 'secondary',
    queryParamNames: ['pub_horsepower'],
    config: {
      options: [
        { key: '1_to_1000', label: '1 to 1000 Horsepower' },
      ],
    },
  },
  {
    id: 'seat',
    label: 'seat',
    type: 'SelectSingleFilter',
    group: 'secondary',
    queryParamNames: ['pub_seat'],
    config: {
      options: [
        { key: '1', label: '1' },
        { key: '2', label: '2' },
        { key: '3', label: '3' },
        { key: '4', label: '4' },
        { key: '5', label: '5' },
        { key: '6', label: '6' },
        { key: '7', label: '7' },
        { key: '8', label: '8' },
        { key: '9', label: '9' },
        { key: '10', label: '10' },
      ],
    },
  },
  {
    id: 'door',
    label: 'door',
    type: 'SelectSingleFilter',
    group: 'secondary',
    queryParamNames: ['pub_door'],
    config: {
      options: [
        { key: '1', label: '1' },
        { key: '2', label: '2' },
        { key: '3', label: '3' },
        { key: '4', label: '4' },
        { key: '5', label: '5' },
        { key: '6', label: '6' },
        { key: '7', label: '7' },
        { key: '8', label: '8' },
        { key: '9', label: '9' },
        { key: '10', label: '10' },
      ],
    },
  },
  {
    id: 'age',
    label: 'age',
    type: 'SelectSingleFilter',
    group: 'secondary',
    queryParamNames: ['pub_age'],
    config: {
      options: [
        { key: '18', label: '18' },
        { key: '19', label: '19' },
        { key: '20', label: '20' },
        { key: '21', label: '21' },
        { key: '22', label: '22' },
        { key: '23', label: '23' },
        { key: '24', label: '24' },
        { key: '25', label: '25' },
        { key: '26', label: '26' },
        { key: '27', label: '27' },
        { key: '28', label: '28' },
        { key: '29', label: '29' },
        { key: '30', label: '30' },
        { key: '31', label: '31' },
        { key: '32', label: '32' },
        { key: '33', label: '33' },
        { key: '34', label: '34' },
        { key: '35', label: '35' },
        { key: '36', label: '36' },
        { key: '37', label: '37' },
        { key: '38', label: '38' },
        { key: '39', label: '39' },
        { key: '40', label: '40' },
        { key: '41', label: '41' },
        { key: '42', label: '42' },
        { key: '43', label: '43' },
        { key: '44', label: '44' },
        { key: '45', label: '45' },
        { key: '46', label: '46' },
        { key: '47', label: '47' },
        { key: '48', label: '48' },
        { key: '49', label: '49' },
        { key: '50', label: '50' },
        { key: '51', label: '51' },
        { key: '52', label: '52' },
        { key: '53', label: '53' },
        { key: '54', label: '54' },
        { key: '55', label: '55' },
        { key: '56', label: '56' },
        { key: '57', label: '57' },
        { key: '58', label: '58' },
        { key: '59', label: '59' },
        { key: '60', label: '60' },
        { key: '61', label: '61' },
        { key: '62', label: '62' },
        { key: '63', label: '63' },
        { key: '64', label: '64' },
        { key: '65', label: '65' },
        { key: '66', label: '66' },
        { key: '67', label: '67' },
        { key: '68', label: '68' },
        { key: '69', label: '69' },
        { key: '60', label: '70' },
        { key: '71', label: '71' },
        { key: '72', label: '72' },
        { key: '73', label: '73' },
        { key: '74', label: '74' },
        { key: '75', label: '75' },
        { key: '76', label: '76' },
        { key: '77', label: '77' },
        { key: '78', label: '78' },
        { key: '79', label: '79' },
        { key: '80', label: '80' },
        { key: '81', label: '81' },
        { key: '82', label: '82' },
        { key: '83', label: '83' },
        { key: '84', label: '84' },
        { key: '85', label: '85' },
        { key: '86', label: '86' },
        { key: '87', label: '87' },
        { key: '88', label: '88' },
        { key: '89', label: '89' },
        { key: '90', label: '90' },
        { key: '91', label: '91' },
        { key: '92', label: '92' },
        { key: '93', label: '93' },
        { key: '94', label: '94' },
        { key: '95', label: '95' },
        { key: '96', label: '96' },
        { key: '97', label: '97' },
        { key: '98', label: '98' },
        { key: '99', label: '99' },
      ],
    },
  },
  {
    id: 'brand',
    label: 'Brand',
    type: 'SelectSingleFilter',
    group: 'secondary',
    queryParamNames: ['pub_brands '],
    config: {
      options: [
        { key: 'acura', label: 'Acura' },
        { key: 'alfa_romeo', label: 'Alfa Romeo' },
        { key: 'aston_martin', label: 'Aston Martin' },
        { key: 'audi', label: 'Audi' },
        { key: 'bentley', label: 'Bentley' },
        { key: 'bmw', label: 'BMW' },
        { key: 'bmw_i', label: 'BMW i' },
        { key: 'bugatti', label: 'Bugatti' },
        { key: 'buick', label: 'Buick' },
        { key: 'byton', label: 'Byton' },
        { key: 'cadillac', label: 'Cadillac' },
        { key: 'chevrolet', label: 'Chevrolet' },
        { key: 'chrysler', label: 'Chrysler' },
        { key: 'citroen', label: 'Citroen' },
        { key: 'cupra', label: 'Cupra' },
        { key: 'dacia', label: 'Dacia' },
        { key: 'daihatsu', label: 'Daihatsu' },
        { key: 'dodge', label: 'Dodge' },
        { key: 'ds_automobiles', label: 'DS Automobiles' },
        { key: 'faraday_future', label: 'Faraday Future' },
        { key: 'ferrari', label: 'Ferrari' },
        { key: 'fiat', label: 'Fiat' },
        { key: 'fisker', label: 'Fisker' },
        { key: 'ford', label: 'Ford' },
        { key: 'gmc', label: 'GMC' },
        { key: 'holden', label: 'Holden' },
        { key: 'honda', label: 'Honda' },
        { key: 'hyundai', label: 'Hyundai' },
        { key: 'infiniti', label: 'Infiniti' },
        { key: 'isuzu', label: 'Isuzu' },
        { key: 'jaguar', label: 'Jaguar' },
        { key: 'jeep', label: 'Jeep' },
        { key: 'kia', label: 'Kia' },
        { key: 'koenigsegg', label: 'Koenigsegg' },
        { key: 'lada', label: 'Lada' },
        { key: 'lamborghini', label: 'Lamborghini' },
        { key: 'lancia', label: 'Lancia' },
        { key: 'land_rover', label: 'Land Rover' },
        { key: 'lexus', label: 'Lexus' },
        { key: 'ligier', label: 'Ligier' },
        { key: 'lincoln', label: 'Lincoln' },
        { key: 'lotus', label: 'Lotus' },
        { key: 'mahindra', label: 'Mahindra' },
        { key: 'maserati', label: 'Maserati' },
        { key: 'maybach', label: 'Maybach' },
        { key: 'mazda', label: 'Mazda' },
        { key: 'mercedes_benz', label: 'Mercedes-Benz' },
        { key: 'mini', label: 'Mini' },
        { key: 'mitsubishi', label: 'Mitsubishi' },
        { key: 'morgan', label: 'Morgan' },
        { key: 'nissan', label: 'Nissan' },
        { key: 'opel', label: 'Opel' },
        { key: 'pagani', label: 'Pagani' },
        { key: 'peugeot', label: 'Peugeot' },
        { key: 'pg', label: 'PG' },
        { key: 'piaggio', label: 'Piaggio' },
        { key: 'porsche', label: 'Porsche' },
        { key: 'renault', label: 'Renault' },
        { key: 'rolls_royce', label: 'Rolls-Royce' },
        { key: 'saab', label: 'Saab' },
        { key: 'seat', label: 'Seat' },
        { key: 'skoda', label: 'Skoda' },
        { key: 'smart', label: 'Smart' },
        { key: 's_sang_yong', label: 'SsangYong' },
        { key: 'street_scooter', label: 'StreetScooter' },
        { key: 'subaru', label: 'Subaru' },
        { key: 'suzuki', label: 'Suzuki' },
        { key: 'tesla', label: 'Tesla' },
        { key: 'toyota', label: 'Toyota' },
        { key: 'triumph', label: 'Triumph' },
        { key: 'tvr', label: 'TVR' },
        { key: 'vauxhall', label: 'Vauxhall' },
        { key: 'volvo', label: 'Volvo' },
        { key: 'vw', label: 'VW' },
        { key: 'wiesmann', label: 'Wiesmann' },
        { key: 'rover', label: 'Rover' },
      ],
    },
  },
  {
    id: 'view',
    label: 'View',
    type: 'SelectSingleFilter',
    group: 'secondary',
    queryParamNames: ['pub_view'],
    config: {
      options: [
        { key: '1_to_1000', label: '1 to 1000 Horsepower' },
      ],
    },
  },
  {
    id: 'amenities',
    label: 'Amenities',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_amenities'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',

      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        {
          key: 'ac',
          label: 'AC',
        },
        {
          key: 'air_bags',
          label: 'Air Bags',
        },
        {
          key: 'multimedia',
          label: 'Multimedia',
        },
        {
          key: 'sunroof',
          label: 'Sunroof',
        },
        {
          key: 'child_lock',
          label: 'Child Lock',
        },
        {
          key: 'back_camera',
          label: 'Back Camera',
        },
        {
          key: 'led',
          label: 'LED Lights',
        },
        {
          key: 'automatic',
          label: 'Automatic Transmission',
        },
        {
          key: 'manual',
          label: 'Manual Transmission',
        },
        {
          key: 'steering',
          label: 'Multimedia Steering',
        },
      ],
    },
  },
];

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Flex API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Keyword filter is sorting the results already by relevance.
  // If keyword filter is active, we need to disable sorting.
  conflictingFilters: ['keyword'],

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};
