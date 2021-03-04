export class Education {
    public subject: string;
    public degree: string;
    public year: string;
    public college: string;
    public location: string;

    constructor(sub: string, deg: string, year: string, coll: string, loc: string ){
        this.subject = sub;
        this.degree = deg;
        this.year = year;
        this.college = coll;
        this.location = loc;
    }
}