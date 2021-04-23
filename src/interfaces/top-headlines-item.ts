export interface TopHeadlinesItem {
    title?: string;
    description?:string,
    urlToImage?:string,
    url?:string,
    author?:string,
    articles:any[],
    source:{
        id:number,
        name:string
    }
}
