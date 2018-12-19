export class Article {
  constructor(
    public id: number,
    public by: string,
    public descendants: number,
    public score: number,
    public time: number,
    public title: string,
    public type: string,
    public url: string) {
  }
}


