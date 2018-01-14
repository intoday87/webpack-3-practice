module.exports = {
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "es6": true
  },
  "rules": {
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true,
      "optionalDependencies": true,
      "peerDependencies": true
    }],
    "no-console": ["error", {"allow": ["log"]}],
    "class-methods-use-this": ["warn"],
    "no-unused-vars": ["warn"]
  },
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ]
};
