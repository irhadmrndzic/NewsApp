export interface TopHeadlinesItem {
    id?:number,
    title?: string;
    description?:string,
    urlToImage?:string,
    url?:string,
    author?:string,
    articles:any[],
    content:string,
    source:{
        id:number,
        name:string
    },
    publishedAt:string,
    totalResults:number;
}
