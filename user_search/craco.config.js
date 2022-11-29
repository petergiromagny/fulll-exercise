const path = require(`path`);

module.exports = {
    jest: {
        configure: {
            moduleNameMapper: {
                "@components": `<rootDir>/src/components/index/`,
                "@layouts": `<rootDir>/src/layouts/index/`,
                "@utils": `<rootDir>/src/utils/index/`,
                "@mocks/(.+)": `<rootDir>/src/mocks/$1`,
                "@types": `<rootDir>/src/types/index/`,
            },
        },
    },
    webpack: {
        alias: {
            "@layouts": path.resolve(__dirname, "./src/layouts/index"),
            "@components": path.resolve(__dirname, "./src/components/index"),
            "@services": path.resolve(__dirname, "./src/services"),
            "@utils": path.resolve(__dirname, "./src/utils/index"),
            "@mocks": path.resolve(__dirname, "./src/mocks"),
            "@types": path.resolve(__dirname, "./src/types/index"),
        },
    },
};