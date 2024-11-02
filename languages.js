
const languageData = {
    stringProvided: 'ardeenesfrheitnlnoptrusvudzh',
    getLanguagesObject: function() {
      const languageObjects = [];
      for (let i = 0; i < this.stringProvided.length; i += 2) {
        const langCode = this.stringProvided.substr(i, 2);
        const language = this.getLanguage(langCode);
        const languageObject = {
          language: language,
          language_code: langCode,
          value: langCode,
        };
        languageObjects.push(languageObject);
      }
      return languageObjects;
    },
    getLanguage: function(code) {
      const languages = {
        ar: 'Arabic',
        de: 'German',
        en: 'English',
        es: 'Spanish',
        fr: 'France',
        he: 'Hebrew',
        it: 'Italian',
        nl: 'Netherlands',
        no: 'Norwegian',
        pt: 'Portuguese',
        ru: 'Russian',
        sv: 'Swedish',
        zh: 'Chinese'        
      };
      return languages[code] || 'Unknown';
    }
  };
  
  //const countries = countryData.getCountriesObject();
  //console.log(countries);
  //When you run this code, the `countries` variable will contain an array of JavaScript objects, with each object representing a country in the format you specified.
  //Please note that the country names provided are based on general conventions and may not cover all possible variations or official names. Feel free to adjust the country names as needed.
  
  module.exports = languageData;
