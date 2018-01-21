module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    /**
     * 테스트 파일에서 describe, it과 같은 테스트 함수들을 직접적으로 require하지 않고 mocha로 실행하는데 eslint에게 그 사실을 알려줘야한다
     */
    "plugins": [
        "mocha"
    ],
    "rules": {
        "mocha/no-exclusive-tests": "error",
        "no-unused-vars": "off"
    },
    /**
     * for no-undef.
     * @see http://eslint.org/docs/user-guide/configuring#specifying-globals
     */
    "globals": {}
};