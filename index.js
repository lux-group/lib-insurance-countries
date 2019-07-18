﻿var countries = [
  {
    code: "AF",
    country_code: "AFG",
    name: "Afghanistan",
    region: "Middle East"
  },
  {
    code: "AL",
    country_code: "ALB",
    name: "Albania",
    region: "Europe (Eastern)"
  },
  { code: "DZ", country_code: "DZA", name: "Algeria", region: "Africa" },
  {
    code: "AS",
    country_code: "ASM",
    name: "American Samoa",
    region: "Fiji/Pacific Islands"
  },
  {
    code: "AD",
    country_code: "AND",
    name: "Andorra",
    region: "Europe (Eastern)"
  },
  { code: "AO", country_code: "AGO", name: "Angola", region: "Africa" },
  {
    code: "AI",
    country_code: "AIA",
    name: "Anguilla",
    region: "Central America"
  },
  { code: "AQ", country_code: "ATA", name: "Antarctica", region: "Antarctica" },
  {
    code: "AG",
    country_code: "ATG",
    name: "Antigua and Barbuda",
    region: "Central America"
  },
  {
    code: "AR",
    country_code: "ARG",
    name: "Argentina",
    region: "South America"
  },
  {
    code: "AM",
    country_code: "ARM",
    name: "Armenia",
    region: "Europe (Eastern)"
  },
  { code: "AU", country_code: "AUS", name: "Australia", region: "Australia" },
  {
    code: "AT",
    country_code: "AUT",
    name: "Austria",
    region: "Europe (Central and Western)"
  },
  {
    code: "AZ",
    country_code: "AZE",
    name: "Azerbaijan",
    region: "Middle East"
  },
  {
    code: "BS",
    country_code: "BHS",
    name: "Bahamas",
    region: "Central America"
  },
  { code: "BH", country_code: "BHR", name: "Bahrain", region: "Middle East" },
  { code: "BD", country_code: "BGD", name: "Bangladesh", region: "Other Asia" },
  { code: "BL", country_code: "BLI", name: "Bali", region: "Bali" },
  {
    code: "BB",
    country_code: "BRB",
    name: "Barbados",
    region: "Central America"
  },
  {
    code: "BY",
    country_code: "BLR",
    name: "Belarus",
    region: "Europe (Eastern)"
  },
  {
    code: "BE",
    country_code: "BEL",
    name: "Belgium",
    region: "Europe (Eastern)"
  },
  {
    code: "BZ",
    country_code: "BLZ",
    name: "Belize",
    region: "Central America"
  },
  { code: "BJ", country_code: "BEN", name: "Benin", region: "Africa" },
  { code: "BM", country_code: "BMU", name: "Bermuda", region: "USA" },
  { code: "BT", country_code: "BTN", name: "Bhutan", region: "Other Asia" },
  { code: "BO", country_code: "BOL", name: "Bolivia", region: "South America" },
  {
    code: "BA",
    country_code: "BIH",
    name: "Bosnia and Herzegovina",
    region: "Europe (Eastern)"
  },
  { code: "BW", country_code: "BWA", name: "Botswana", region: "Africa" },
  { code: "BR", country_code: "BRA", name: "Brazil", region: "South America" },
  {
    code: "BN",
    country_code: "BRN",
    name: "Brunei Darussalam",
    region: "Other Asia"
  },
  {
    code: "BG",
    country_code: "BGR",
    name: "Bulgaria",
    region: "Europe (Eastern)"
  },
  { code: "BF", country_code: "BFA", name: "Burkina Faso", region: "Africa" },
  { code: "BI", country_code: "BDI", name: "Burundi", region: "Africa" },
  { code: "KH", country_code: "KHM", name: "Cambodia", region: "Cambodia" },
  { code: "CM", country_code: "CMR", name: "Cameroon", region: "Africa" },
  { code: "CA", country_code: "CAN", name: "Canada", region: "Canada" },
  { code: "CV", country_code: "CPV", name: "Cape Verde", region: "USA" },
  {
    code: "KY",
    country_code: "CYM",
    name: "Cayman Islands",
    region: "Central America"
  },
  {
    code: "CF",
    country_code: "CAF",
    name: "Central African Republic",
    region: "Africa"
  },
  { code: "TD", country_code: "TCD", name: "Chad", region: "Africa" },
  { code: "CL", country_code: "CHL", name: "Chile", region: "South America" },
  { code: "CN", country_code: "CHN", name: "China", region: "China" },
  {
    code: "CX",
    country_code: "CXR",
    name: "Christmas Island",
    region: "Australia"
  },
  {
    code: "CC",
    country_code: "CCK",
    name: "Cocos (keeling) Islands",
    region: "Australia"
  },
  {
    code: "CO",
    country_code: "COL",
    name: "Colombia",
    region: "South America"
  },
  { code: "KM", country_code: "COM", name: "Comoros", region: "Africa" },
  { code: "CG", country_code: "COG", name: "Congo", region: "Africa" },
  {
    code: "CD",
    country_code: "CD",
    name: "Congo, Democratic Rep",
    region: "Africa"
  },
  {
    code: "CK",
    country_code: "COK",
    name: "Cook Islands",
    region: "Fiji/Pacific Islands"
  },
  {
    code: "CR",
    country_code: "CRI",
    name: "Costa Rica",
    region: "Central America"
  },
  { code: "CI", country_code: "CI", name: "Cote D'ivoire", region: "Africa" },
  {
    code: "HR",
    country_code: "HRV",
    name: "Croatia",
    region: "Europe (Eastern)"
  },
  { code: "CU", country_code: "CUB", name: "Cuba", region: "Central America" },
  {
    code: "CY",
    country_code: "CYP",
    name: "Cyprus",
    region: "Europe (Central and Western)"
  },
  {
    code: "CZ",
    country_code: "CZE",
    name: "Czech Republic",
    region: "Europe (Eastern)"
  },
  { code: "DK", country_code: "DNK", name: "Denmark", region: "Scandinavia" },
  { code: "DJ", country_code: "DJI", name: "Djibouti", region: "Africa" },
  {
    code: "DM",
    country_code: "DMA",
    name: "Dominica",
    region: "Central America"
  },
  {
    code: "DO",
    country_code: "DOM",
    name: "Dominican Republic",
    region: "Central America"
  },
  { code: "EC", country_code: "ECU", name: "Ecuador", region: "South America" },
  { code: "EG", country_code: "EGY", name: "Egypt", region: "Africa" },
  {
    code: "SV",
    country_code: "SLV",
    name: "El Salvador",
    region: "Central America"
  },
  {
    code: "GQ",
    country_code: "GNQ",
    name: "Equatorial Guinea",
    region: "Africa"
  },
  { code: "ER", country_code: "ERI", name: "Eritrea", region: "Africa" },
  {
    code: "EE",
    country_code: "EST",
    name: "Estonia",
    region: "Europe (Eastern)"
  },
  { code: "ET", country_code: "ETH", name: "Ethiopia", region: "Africa" },
  {
    code: "FK",
    country_code: "FLK",
    name: "Falkland Islands (malvinas)",
    region: "UK/Ireland"
  },
  {
    code: "FO",
    country_code: "FRO",
    name: "Faroe Islands",
    region: "Europe (Eastern)"
  },
  {
    code: "FJ",
    country_code: "FJI",
    name: "Fiji",
    region: "Fiji/Pacific Islands"
  },
  { code: "FI", country_code: "FIN", name: "Finland", region: "Scandinavia" },
  {
    code: "FR",
    country_code: "FRA",
    name: "France",
    region: "Europe (Central and Western)"
  },
  {
    code: "GF",
    country_code: "GUF",
    name: "French Guiana",
    region: "South America"
  },
  {
    code: "PF",
    country_code: "PYF",
    name: "French Polynesia",
    region: "Fiji/Pacific Islands"
  },
  {
    code: "TF",
    country_code: "ATF",
    name: "French Southern Territories",
    region: "Africa"
  },
  { code: "GA", country_code: "GAB", name: "Gabon", region: "Africa" },
  { code: "GM", country_code: "GMB", name: "Gambia", region: "Africa" },
  {
    code: "GE",
    country_code: "GEO",
    name: "Georgia",
    region: "Europe (Eastern)"
  },
  {
    code: "DE",
    country_code: "DEU",
    name: "Germany",
    region: "Europe (Central and Western)"
  },
  { code: "GH", country_code: "GHA", name: "Ghana", region: "Africa" },
  {
    code: "GI",
    country_code: "GIB",
    name: "Gibraltar",
    region: "Europe (Eastern)"
  },
  {
    code: "GR",
    country_code: "GRC",
    name: "Greece",
    region: "Europe (Eastern)"
  },
  {
    code: "GL",
    country_code: "GRL",
    name: "Greenland",
    region: "Europe (Eastern)"
  },
  {
    code: "GD",
    country_code: "GRD",
    name: "Grenada",
    region: "Central America"
  },
  {
    code: "GU",
    country_code: "GUM",
    name: "Guam",
    region: "Fiji/Pacific Islands"
  },
  {
    code: "GT",
    country_code: "GTM",
    name: "Guatemala",
    region: "Central America"
  },
  { code: "GG", country_code: "GGY", name: "Guernsey", region: "UK/Ireland" },
  { code: "GN", country_code: "GIN", name: "Guinea", region: "Africa" },
  { code: "GW", country_code: "GNB", name: "Guinea-bissau", region: "Africa" },
  { code: "GY", country_code: "GUY", name: "Guyana", region: "South America" },
  { code: "HT", country_code: "HTI", name: "Haiti", region: "Central America" },
  {
    code: "HM",
    country_code: "HMD",
    name: "Heard Island & Mcdonald Island",
    region: "Africa"
  },
  {
    code: "VA",
    country_code: "VAT",
    name: "Holy See (vatican City State)",
    region: "Europe (Central and Western)"
  },
  {
    code: "HN",
    country_code: "HND",
    name: "Honduras",
    region: "Central America"
  },
  { code: "HK", country_code: "HKG", name: "Hong Kong", region: "Hong Kong" },
  {
    code: "HU",
    country_code: "HUN",
    name: "Hungary",
    region: "Europe (Eastern)"
  },
  { code: "IS", country_code: "ISL", name: "Iceland", region: "Scandinavia" },
  { code: "IN", country_code: "IND", name: "India", region: "India/Sri Lanka" },
  {
    code: "ID",
    country_code: "IDN",
    name: "Indonesia (excl. Bali)",
    region: "Indonesia (excl. Bali)"
  },
  {
    code: "IR",
    country_code: "IRN",
    name: "Iran, Islamic Republic of",
    region: "Middle East"
  },
  { code: "IQ", country_code: "IRQ", name: "Iraq", region: "Middle East" },
  { code: "IE", country_code: "IRL", name: "Ireland", region: "UK/Ireland" },
  {
    code: "IM",
    country_code: "IMN",
    name: "Isle Of Man",
    region: "UK/Ireland"
  },
  { code: "IL", country_code: "ISR", name: "Israel", region: "Middle East" },
  {
    code: "IT",
    country_code: "ITA",
    name: "Italy",
    region: "Europe (Central and Western)"
  },
  {
    code: "JM",
    country_code: "JAM",
    name: "Jamaica",
    region: "Central America"
  },
  { code: "JP", country_code: "JPN", name: "Japan", region: "Japan" },
  { code: "JE", country_code: "JEY", name: "Jersey", region: "UK/Ireland" },
  { code: "JO", country_code: "JOR", name: "Jordan", region: "Middle East" },
  {
    code: "KZ",
    country_code: "KAZ",
    name: "Kazakhstan",
    region: "Europe (Eastern)"
  },
  { code: "KE", country_code: "KEN", name: "Kenya", region: "Africa" },
  {
    code: "KI",
    country_code: "KIR",
    name: "Kiribati",
    region: "Fiji/Pacific Islands"
  },
  { code: "KW", country_code: "KWT", name: "Kuwait", region: "Middle East" },
  {
    code: "KG",
    country_code: "KGZ",
    name: "Kyrgyzstan",
    region: "Middle East"
  },
  {
    code: "LV",
    country_code: "LVA",
    name: "Latvia",
    region: "Europe (Eastern)"
  },
  { code: "LB", country_code: "LBN", name: "Lebanon", region: "Middle East" },
  { code: "LS", country_code: "LSO", name: "Lesotho", region: "Africa" },
  { code: "LR", country_code: "LBR", name: "Liberia", region: "Africa" },
  { code: "LY", country_code: "LBY", name: "Libya", region: "Africa" },
  {
    code: "LI",
    country_code: "LIE",
    name: "Liechtenstein",
    region: "Europe (Eastern)"
  },
  {
    code: "LT",
    country_code: "LTU",
    name: "Lithuania",
    region: "Europe (Eastern)"
  },
  {
    code: "LU",
    country_code: "LUX",
    name: "Luxembourg",
    region: "Europe (Central and Western)"
  },
  { code: "MO", country_code: "MAC", name: "Macao", region: "Other Asia" },
  {
    code: "MK",
    country_code: "MKD",
    name: "Macedonia",
    region: "Europe (Eastern)"
  },
  { code: "MG", country_code: "MDG", name: "Madagascar", region: "Africa" },
  { code: "MW", country_code: "MWI", name: "Malawi", region: "Africa" },
  { code: "MY", country_code: "MYS", name: "Malaysia", region: "Malaysia" },
  { code: "MV", country_code: "MDV", name: "Maldives", region: "Other Asia" },
  { code: "ML", country_code: "MLI", name: "Mali", region: "Africa" },
  {
    code: "MT",
    country_code: "MLT",
    name: "Malta",
    region: "Europe (Central and Western)"
  },
  {
    code: "MH",
    country_code: "MHL",
    name: "Marshall Islands",
    region: "Fiji/Pacific Islands"
  },
  {
    code: "MQ",
    country_code: "MTQ",
    name: "Martinique",
    region: "Central America"
  },
  { code: "MR", country_code: "MRT", name: "Mauritania", region: "Africa" },
  { code: "MU", country_code: "MUS", name: "Mauritius", region: "Africa" },
  {
    code: "YT",
    country_code: "MYT",
    name: "Mayotte",
    region: "Europe (Eastern)"
  },
  {
    code: "MX",
    country_code: "MEX",
    name: "Mexico",
    region: "Central America"
  },
  {
    code: "FM",
    country_code: "FSM",
    name: "Micronesia",
    region: "Fiji/Pacific Islands"
  },
  {
    code: "MD",
    country_code: "MDA",
    name: "Moldova, Republic of",
    region: "Europe (Eastern)"
  },
  {
    code: "MC",
    country_code: "MCO",
    name: "Monaco",
    region: "Europe (Eastern)"
  },
  { code: "MN", country_code: "MNG", name: "Mongolia", region: "Other Asia" },
  {
    code: "MS",
    country_code: "MSR",
    name: "Montserrat",
    region: "Central America"
  },
  { code: "MA", country_code: "MAR", name: "Morocco", region: "Africa" },
  { code: "MZ", country_code: "MOZ", name: "Mozambique", region: "Africa" },
  { code: "NA", country_code: "NAM", name: "Namibia", region: "Africa" },
  {
    code: "NR",
    country_code: "NRU",
    name: "Nauru",
    region: "Fiji/Pacific Islands"
  },
  { code: "NP", country_code: "NPL", name: "Nepal", region: "Nepal" },
  {
    code: "NL",
    country_code: "NLD",
    name: "Netherlands",
    region: "Europe (Central and Western)"
  },
  {
    code: "NC",
    country_code: "NCL",
    name: "New Caledonia",
    region: "Fiji/Pacific Islands"
  },
  {
    code: "NZ",
    country_code: "NZL",
    name: "New Zealand",
    region: "New Zealand"
  },
  {
    code: "NI",
    country_code: "NIC",
    name: "Nicaragua",
    region: "Central America"
  },
  { code: "NE", country_code: "NER", name: "Niger", region: "Africa" },
  { code: "NG", country_code: "NGA", name: "Nigeria", region: "Africa" },
  {
    code: "NU",
    country_code: "NIU",
    name: "Niue",
    region: "Fiji/Pacific Islands"
  },
  {
    code: "NF",
    country_code: "NFK",
    name: "Norfolk Island",
    region: "Australia"
  },
  {
    code: "KP",
    country_code: "PRK",
    name: "North Korea",
    region: "Other Asia"
  },
  {
    code: "MP",
    country_code: "MNP",
    name: "Northern Mariana Islands",
    region: "Fiji/Pacific Islands"
  },
  { code: "NO", country_code: "NOR", name: "Norway", region: "Scandinavia" },
  { code: "OM", country_code: "OMN", name: "Oman", region: "Middle East" },
  { code: "PK", country_code: "PAK", name: "Pakistan", region: "Middle East" },
  {
    code: "PW",
    country_code: "PLW",
    name: "Palau",
    region: "Fiji/Pacific Islands"
  },
  {
    code: "PA",
    country_code: "PAN",
    name: "Panama",
    region: "Central America"
  },
  {
    code: "PG",
    country_code: "PNG",
    name: "Papua New Guinea",
    region: "Fiji/Pacific Islands"
  },
  {
    code: "PY",
    country_code: "PRY",
    name: "Paraguay",
    region: "South America"
  },
  { code: "PE", country_code: "PER", name: "Peru", region: "South America" },
  {
    code: "PH",
    country_code: "PHL",
    name: "Philippines",
    region: "Philippines"
  },
  {
    code: "PN",
    country_code: "PN",
    name: "Pitcairn",
    region: "Fiji/Pacific Islands"
  },
  {
    code: "PL",
    country_code: "POL",
    name: "Poland",
    region: "Europe (Eastern)"
  },
  {
    code: "PT",
    country_code: "PRT",
    name: "Portugal",
    region: "Europe (Central and Western)"
  },
  {
    code: "PR",
    country_code: "PRI",
    name: "Puerto Rico",
    region: "Central America"
  },
  { code: "QA", country_code: "QAT", name: "Qatar", region: "Middle East" },
  { code: "RE", country_code: "REU", name: "Reunion", region: "Africa" },
  {
    code: "RO",
    country_code: "ROU",
    name: "Romania",
    region: "Europe (Eastern)"
  },
  {
    code: "RU",
    country_code: "RUS",
    name: "Russian Federation",
    region: "Europe (Eastern)"
  },
  { code: "RW", country_code: "RWA", name: "Rwanda", region: "Africa" },
  { code: "SH", country_code: "SHN", name: "Saint Helena", region: "Africa" },
  {
    code: "KN",
    country_code: "KNA",
    name: "Saint Kitts and Nevis",
    region: "Central America"
  },
  {
    code: "LC",
    country_code: "LCA",
    name: "Saint Lucia",
    region: "Central America"
  },
  {
    code: "PM",
    country_code: "SPM",
    name: "Saint Pierre and Miquelon",
    region: "USA"
  },
  {
    code: "VC",
    country_code: "VCT",
    name: "Saint Vincent",
    region: "Central America"
  },
  {
    code: "WS",
    country_code: "WSM",
    name: "Samoa",
    region: "Fiji/Pacific Islands"
  },
  {
    code: "SM",
    country_code: "SMR",
    name: "San Marino",
    region: "Europe (Eastern)"
  },
  {
    code: "ST",
    country_code: "STP",
    name: "Sao Tome and Principe",
    region: "Africa"
  },
  {
    code: "SA",
    country_code: "SAU",
    name: "Saudi Arabia",
    region: "Middle East"
  },
  { code: "SN", country_code: "SEN", name: "Senegal", region: "Africa" },
  { code: "SC", country_code: "SYC", name: "Seychelles", region: "Africa" },
  { code: "SL", country_code: "SLE", name: "Sierra Leone", region: "Africa" },
  { code: "SG", country_code: "SGP", name: "Singapore", region: "Singapore" },
  {
    code: "SK",
    country_code: "SVK",
    name: "Slovakia",
    region: "Europe (Eastern)"
  },
  {
    code: "SI",
    country_code: "SVN",
    name: "Slovenia",
    region: "Europe (Eastern)"
  },
  {
    code: "SB",
    country_code: "SLB",
    name: "Solomon Islands",
    region: "Fiji/Pacific Islands"
  },
  { code: "SO", country_code: "SOM", name: "Somalia", region: "Africa" },
  { code: "ZA", country_code: "ZAF", name: "South Africa", region: "Africa" },
  {
    code: "KR",
    country_code: "KOR",
    name: "South Korea",
    region: "Other Asia"
  },
  { code: "SS", country_code: "SSD", name: "South Sudan", region: "Africa" },
  {
    code: "ES",
    country_code: "ESP",
    name: "Spain",
    region: "Europe (Central and Western)"
  },
  {
    code: "LK",
    country_code: "LKA",
    name: "Sri Lanka",
    region: "India/Sri Lanka"
  },
  {
    code: "GS",
    country_code: "SGS",
    name: "Sth Georgia & Sth Sandwich Isl",
    region: "Africa"
  },
  { code: "SD", country_code: "SDN", name: "Sudan", region: "Africa" },
  {
    code: "SR",
    country_code: "SUR",
    name: "Suriname",
    region: "South America"
  },
  { code: "SZ", country_code: "SWZ", name: "Swaziland", region: "Africa" },
  { code: "SE", country_code: "SWE", name: "Sweden", region: "Scandinavia" },
  {
    code: "CH",
    country_code: "CHE",
    name: "Switzerland",
    region: "Europe (Central and Western)"
  },
  {
    code: "SY",
    country_code: "SYR",
    name: "Syrian Arab Republic",
    region: "Middle East"
  },
  {
    code: "TW",
    country_code: "TWN",
    name: "Taiwan, Province of China",
    region: "China"
  },
  {
    code: "TJ",
    country_code: "TJK",
    name: "Tajikistan",
    region: "Middle East"
  },
  {
    code: "TZ",
    country_code: "TZA",
    name: "Tanzania, United Republic of",
    region: "Africa"
  },
  { code: "TH", country_code: "THA", name: "Thailand", region: "Other Asia" },
  { code: "TG", country_code: "TGO", name: "Togo", region: "Africa" },
  {
    code: "TK",
    country_code: "TKL",
    name: "Tokelau",
    region: "Fiji/Pacific Islands"
  },
  {
    code: "TO",
    country_code: "TON",
    name: "Tonga",
    region: "Fiji/Pacific Islands"
  },
  {
    code: "TT",
    country_code: "TTO",
    name: "Trinidad and Tobago",
    region: "Central America"
  },
  { code: "TN", country_code: "TUN", name: "Tunisia", region: "Africa" },
  { code: "TR", country_code: "TUR", name: "Turkey", region: "Middle East" },
  {
    code: "TM",
    country_code: "TKM",
    name: "Turkmenistan",
    region: "Middle East"
  },
  {
    code: "TC",
    country_code: "TCA",
    name: "Turks and Caicos Islands",
    region: "Central America"
  },
  {
    code: "TV",
    country_code: "TUV",
    name: "Tuvalu",
    region: "Fiji/Pacific Islands"
  },
  { code: "UG", country_code: "UGA", name: "Uganda", region: "Africa" },
  {
    code: "UA",
    country_code: "UKR",
    name: "Ukraine",
    region: "Europe (Eastern)"
  },
  {
    code: "AE",
    country_code: "ARE",
    name: "United Arab Emirates",
    region: "Middle East"
  },
  {
    code: "GB",
    country_code: "GBR",
    name: "United Kingdom",
    region: "UK/Ireland"
  },
  {
    code: "US",
    country_code: "USA",
    name: "United States Of America",
    region: "USA"
  },
  { code: "UY", country_code: "URY", name: "Uruguay", region: "South America" },
  {
    code: "UZ",
    country_code: "UZB",
    name: "Uzbekistan",
    region: "Middle East"
  },
  {
    code: "VU",
    country_code: "VUT",
    name: "Vanuatu",
    region: "Fiji/Pacific Islands"
  },
  {
    code: "VE",
    country_code: "VEN",
    name: "Venezuela",
    region: "South America"
  },
  { code: "VN", country_code: "VNM", name: "Vietnam", region: "Vietnam" },
  {
    code: "VG",
    country_code: "VGB",
    name: "Virgin Islands, British",
    region: "USA"
  },
  {
    code: "VI",
    country_code: "VIR",
    name: "Virgin Islands, U.S.",
    region: "Central America"
  },
  {
    code: "WF",
    country_code: "WF",
    name: "Wallis and Futuna",
    region: "Fiji/Pacific Islands"
  },
  { code: "EH", country_code: "EH", name: "Western Sahara", region: "Africa" },
  { code: "YE", country_code: "YEM", name: "Yemen", region: "Middle East" },
  { code: "ZM", country_code: "ZMB", name: "Zambia", region: "Africa" },
  { code: "ZW", country_code: "ZWE", name: "Zimbabwe", region: "Africa" }
]
var getNames = function() {
  return countries.map(function(country) {
    return country.name
  })
}

var getCodes = function() {
  return countries.map(function(country) {
    return country.code
  })
}

var findByCode = function(code) {
  return countries.find(function(country) {
    return country.code.toLowerCase() === code.toLowerCase()
  })
}

var findByName = function(name) {
  return countries.find(function(country) {
    return country.name.toLowerCase() === name.toLowerCase()
  })
}

module.exports = {
  countries: countries,
  getNames: getNames,
  getCodes: getCodes,
  findByCode: findByCode,
  findByName: findByName
}
