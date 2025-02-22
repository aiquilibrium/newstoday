//ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za
//const ae = {
//    country : "United Arab Emirates",
//    country_code : "ae",
//    value : "ae",
//}

//Based on the provided country codes, here's the updated code to generate JavaScript objects for each country:

const countryData = {
  stringProvided: 'aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltltlvmamxmynlnonzphplptrorsrusasesgskthtrtwuausveza',
  getCountriesObject: function() {
    const countryObjects = [];
    for (let i = 0; i < this.stringProvided.length; i += 2) {
      const countryCode = this.stringProvided.substr(i, 2);
      const countryName = this.getCountryName(countryCode);
      const countryObject = {
        country: countryName,
        country_code: countryCode.toUpperCase(),
        value: countryCode
      };
      countryObjects.push(countryObject);
    }
    return countryObjects;
  },
  getCountryName: function(countryCode) {
    const countryNames = {
      ae: 'United Arab Emirates',
      ar: 'Argentina',
      at: 'Austria',
      au: 'Australia',
      be: 'Belgium',
      bg: 'Bulgaria',
      br: 'Brazil',
      ca: 'Canada',
      ch: 'Switzerland',
      cn: 'China',
      co: 'Colombia',
      cu: 'Cuba',
      cz: 'Czech Republic',
      de: 'Germany',
      eg: 'Egypt',
      fr: 'France',
      gb: 'United Kingdom',
      gr: 'Greece',
      hk: 'Hong Kong',
      hu: 'Hungary',
      id: 'Indonesia',
      ie: 'Ireland',
      il: 'Israel',
      in: 'India',
      it: 'Italy',
      jp: 'Japan',
      kr: 'South Korea',
      lt: 'Lithuania',
      lv: 'Latvia',
      ma: 'Morocco',
      mx: 'Mexico',
      my: 'Malaysia',
      ng: 'Nigeria',
      nl: 'Netherlands',
      no: 'Norway',
      nz: 'New Zealand',
      ph: 'Philippines',
      pl: 'Poland',
      pt: 'Portugal',
      ro: 'Romania',
      rs: 'Serbia',
      ru: 'Russia',
      sa: 'Saudi Arabia',
      se: 'Sweden',
      sg: 'Singapore',
      si: 'Slovenia',
      sk: 'Slovakia',
      th: 'Thailand',
      tr: 'Turkey',
      tw: 'Taiwan',
      ua: 'Ukraine',
      us: 'United States',
      ve: 'Venezuela',
      za: 'South Africa'
    };
    return countryNames[countryCode] || 'Unknown';
  },
  getCountryList : function (){
    return two_letter_country;
  }
 
};


const test_two_letter_country = ["ar","us"];

const two_letter_country = ["ae","ar","at","au","be","bg","br","ca","ch","cn","co","cu","cz","de","eg",
"fr","gb","gr","hk","hu","id","ie","il","in","it","jp","kr","lt","lv","ma","mx","my","ng","nl","no","nz",
"ph","pl","pt","ro","rs","ru","sa","se","sg","si","sk","th","tr","tw","ua","us","ve","za"];
//const countries = countryData.getCountriesObject();
//console.log(countries);
//When you run this code, the `countries` variable will contain an array of JavaScript objects, with each object representing a country in the format you specified.
//Please note that the country names provided are based on general conventions and may not cover all possible variations or official names. Feel free to adjust the country names as needed.

module.exports = countryData;