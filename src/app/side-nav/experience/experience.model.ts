export class Experience {
    public role: string;
    public duration: string;
    public company: string;
    public location: string;

    constructor(role: string, duration: string, company: string, location: string){
        this.role = role;
        this.duration = duration;
        this.company = company;
        this.location = location;
    }
}