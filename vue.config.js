module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/nitka-test/'
        : '/'
};