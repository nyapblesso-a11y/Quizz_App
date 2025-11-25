import Api from "./api";

export const fetchQuestion = async () => {
    const resp = await Api.get('questions')
    return resp.json()
}