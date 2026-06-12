// import Api from "./api";
export const fetchQuestion = async () => {
    const resp = await fetch('https://opentdb.com/api.php?amount=10&type=boolean')
    const data = await resp.json()
    return data.results
}