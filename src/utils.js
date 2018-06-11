// API URL

const API_SPACEX = 'https://api.spacexdata.com/v2/launches/';
const API_APOD   = 'https://api.nasa.gov/planetary/apod?api_key=V65BwUbnnGSdBX3NwNCc9vR3kIZrJE1I2wE0k3Td';
const API_ISS    = 'http://api.open-notify.org/';

export const NextLaunch = `${API_SPACEX}next`;
export const LastLaunch = `${API_SPACEX}latest`;

// APOD

export const LastPicture = API_APOD;

// ISS

export const IssLocation = `${API_ISS}iss-now.json`;
export const IssMembers  = `${API_ISS}astros.json`;