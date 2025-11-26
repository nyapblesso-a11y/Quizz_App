import ky from "ky";

const BaseUrl = 'https://the-trivia-api.com/v2/'
const Api = ky.create({prefixUrl: BaseUrl})

export default Api