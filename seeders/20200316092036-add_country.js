'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'Countries',
      [
        {
          name: 'China',
          cases: 80860,
          deaths: 3213,
          recovered: 67758,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Italy',
          cases: 24747,
          deaths: 1809,
          recovered: 2335,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Iran',
          cases: 13938,
          deaths: 724,
          recovered: 4590,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'S. Korea',
          cases: 8236,
          deaths: 75,
          recovered: 1137,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Spain',
          cases: 7845,
          deaths: 292,
          recovered: 517,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Germany',
          cases: 5813,
          deaths: 13,
          recovered: 46,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'France',
          cases: 5423,
          deaths: 127,
          recovered: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'USA',
          cases: 3782,
          deaths: 69,
          recovered: 73,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Switzerland',
          cases: 2217,
          deaths: 14,
          recovered: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'UK',
          cases: 1391,
          deaths: 35,
          recovered: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Norway',
          cases: 1256,
          deaths: 3,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Netherlands',
          cases: 1135,
          deaths: 20,
          recovered: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sweden',
          cases: 1040,
          deaths: 3,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Belgium',
          cases: 886,
          deaths: 4,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Denmark',
          cases: 864,
          deaths: 2,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Austria',
          cases: 860,
          deaths: 1,
          recovered: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Japan',
          cases: 839,
          deaths: 24,
          recovered: 144,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Diamond Princess',
          cases: 696,
          deaths: 7,
          recovered: 456,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Malaysia',
          cases: 428,
          deaths: 0,
          recovered: 42,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Qatar',
          cases: 401,
          deaths: 0,
          recovered: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Canada',
          cases: 341,
          deaths: 1,
          recovered: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Greece',
          cases: 331,
          deaths: 4,
          recovered: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Australia',
          cases: 300,
          deaths: 5,
          recovered: 27,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Czechia',
          cases: 293,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Portugal',
          cases: 245,
          deaths: 0,
          recovered: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Finland',
          cases: 244,
          deaths: 0,
          recovered: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Singapore',
          cases: 226,
          deaths: 0,
          recovered: 105,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Slovenia',
          cases: 219,
          deaths: 1,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bahrain',
          cases: 214,
          deaths: 0,
          recovered: 77,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Israel',
          cases: 213,
          deaths: 0,
          recovered: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Brazil',
          cases: 203,
          deaths: 0,
          recovered: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Iceland',
          cases: 180,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Estonia',
          cases: 171,
          deaths: 0,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ireland',
          cases: 170,
          deaths: 2,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hong Kong',
          cases: 149,
          deaths: 4,
          recovered: 81,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Philippines',
          cases: 140,
          deaths: 12,
          recovered: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Romania',
          cases: 139,
          deaths: 0,
          recovered: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Egypt',
          cases: 126,
          deaths: 2,
          recovered: 32,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Poland',
          cases: 125,
          deaths: 3,
          recovered: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Iraq',
          cases: 124,
          deaths: 10,
          recovered: 26,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Saudi Arabia',
          cases: 118,
          deaths: 0,
          recovered: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Indonesia',
          cases: 117,
          deaths: 5,
          recovered: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'India',
          cases: 114,
          deaths: 2,
          recovered: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Thailand',
          cases: 114,
          deaths: 1,
          recovered: 35,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kuwait',
          cases: 112,
          deaths: 0,
          recovered: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Lebanon',
          cases: 110,
          deaths: 3,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'San Marino',
          cases: 109,
          deaths: 7,
          recovered: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'UAE',
          cases: 98,
          deaths: 0,
          recovered: 23,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Luxembourg',
          cases: 77,
          deaths: 1,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Chile',
          cases: 75,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Peru',
          cases: 71,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Russia',
          cases: 63,
          deaths: 0,
          recovered: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Slovakia',
          cases: 61,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'South Africa',
          cases: 61,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Taiwan',
          cases: 59,
          deaths: 1,
          recovered: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Vietnam',
          cases: 57,
          deaths: 0,
          recovered: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Argentina',
          cases: 56,
          deaths: 2,
          recovered: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Panama',
          cases: 55,
          deaths: 1,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Algeria',
          cases: 54,
          deaths: 4,
          recovered: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pakistan',
          cases: 53,
          deaths: 0,
          recovered: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bulgaria',
          cases: 51,
          deaths: 2,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Brunei',
          cases: 50,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Croatia',
          cases: 49,
          deaths: 0,
          recovered: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Serbia',
          cases: 48,
          deaths: 0,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mexico',
          cases: 43,
          deaths: 0,
          recovered: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Albania',
          cases: 42,
          deaths: 1,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Palestine',
          cases: 38,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ecuador',
          cases: 37,
          deaths: 2,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Costa Rica',
          cases: 35,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Colombia',
          cases: 34,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Georgia',
          cases: 33,
          deaths: 0,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cyprus',
          cases: 33,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hungary',
          cases: 32,
          deaths: 1,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Latvia',
          cases: 30,
          deaths: 0,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Morocco',
          cases: 28,
          deaths: 1,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Armenia',
          cases: 28,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Belarus',
          cases: 27,
          deaths: 0,
          recovered: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Senegal',
          cases: 24,
          deaths: 0,
          recovered: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bosnia and Herzegovina',
          cases: 24,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Azerbaijan',
          cases: 23,
          deaths: 1,
          recovered: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Moldova',
          cases: 23,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Oman',
          cases: 22,
          deaths: 0,
          recovered: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Malta',
          cases: 21,
          deaths: 0,
          recovered: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tunisia',
          cases: 20,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'North Macedonia',
          cases: 19,
          deaths: 0,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sri Lanka',
          cases: 18,
          deaths: 0,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Turkey',
          cases: 18,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Venezuela',
          cases: 17,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Afghanistan',
          cases: 16,
          deaths: 0,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Lithuania',
          cases: 14,
          deaths: 0,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Maldives',
          cases: 13,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cambodia',
          cases: 12,
          deaths: 0,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jordan',
          cases: 12,
          deaths: 0,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Macao',
          cases: 11,
          deaths: 0,
          recovered: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Dominican Republic',
          cases: 11,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Faeroe Islands',
          cases: 11,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bolivia',
          cases: 10,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jamaica',
          cases: 10,
          deaths: 0,
          recovered: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Martinique',
          cases: 10,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kazakhstan',
          cases: 9,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'New Zealand',
          cases: 8,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Paraguay',
          cases: 8,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'French Guiana',
          cases: 7,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Liechtenstein',
          cases: 7,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Réunion',
          cases: 7,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ghana',
          cases: 6,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Uruguay',
          cases: 6,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Andorra',
          cases: 5,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bangladesh',
          cases: 5,
          deaths: 0,
          recovered: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Guadeloupe',
          cases: 5,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Puerto Rico',
          cases: 5,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Rwanda',
          cases: 5,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Guyana',
          cases: 4,
          deaths: 1,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cameroon',
          cases: 4,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ivory Coast',
          cases: 4,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cuba',
          cases: 4,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ethiopia',
          cases: 4,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Trinidad and Tobago',
          cases: 4,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Uzbekistan',
          cases: 4,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ukraine',
          cases: 3,
          deaths: 1,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Burkina Faso',
          cases: 3,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Channel Islands',
          cases: 3,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'French Polynesia',
          cases: 3,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Guam',
          cases: 3,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Honduras',
          cases: 3,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kenya',
          cases: 3,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Seychelles',
          cases: 3,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Monaco',
          cases: 2,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Nigeria',
          cases: 2,
          deaths: 0,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Aruba',
          cases: 2,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Curaçao',
          cases: 2,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'DRC',
          cases: 2,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Namibia',
          cases: 2,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Saint Lucia',
          cases: 2,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Saint Martin',
          cases: 2,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Guatemala',
          cases: 1,
          deaths: 1,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sudan',
          cases: 1,
          deaths: 1,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Nepal',
          cases: 1,
          deaths: 0,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Antigua and Barbuda',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bahamas',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bhutan',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cayman Islands',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'CAR',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Congo',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Equatorial Guinea',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Gabon',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Gibraltar',
          cases: 1,
          deaths: 0,
          recovered: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Guinea',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Vatican City',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mauritania',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mayotte',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mongolia',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'St. Barth',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'St. Vincent Grenadines',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Suriname',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Eswatini',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Togo',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'U.S. Virgin Islands',
          cases: 1,
          deaths: 0,
          recovered: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Countries', null, {});
  }
};
