export interface ITranslation {
    language: string,
    name: string,
    content: { 
        [key:string]:string
    }
}