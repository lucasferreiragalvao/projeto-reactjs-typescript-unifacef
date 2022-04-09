export const configs = {
    apis: {
        correios: process.env.REACT_APP_CORREIOS_URL,
        starWars: process.env.REACT_APP_STAR_WARS_URL,
        github: process.env.REACT_APP_GITHUB_URL,
    },
    sentry: process.env.REACT_APP_SENTRY_DSN,
};

export default configs;