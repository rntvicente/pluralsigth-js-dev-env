const getBaseUrl = () => {
    const inDevelepment = window.location.hostname === 'localhost';

    return inDevelepment ? 'http://localhost:3001/' : '/';
}

module.exports = { getBaseUrl };