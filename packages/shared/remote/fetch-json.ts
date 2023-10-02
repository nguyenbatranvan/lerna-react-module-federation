export const FetchJson = (url:string) => fetch(url).then(res => res.json())
