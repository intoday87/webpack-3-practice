module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/style-mock.js',
    '\\.(hbs|handlebars)$': '<rootDir>/__mocks__/hbs-mock.js',
  },
  setupTestFrameworkScriptFile: './setup.js',
  testEnvironmentOptions: {
    beforeParse(window) {
      window.document.childNodes.length === 0;
      window.alert = (msg) => {
        console.log('alert messsage', msg);
      };
      window.matchMedia = () => ({});
      window.scrollTo = () => {
      };
    },
  },
};
