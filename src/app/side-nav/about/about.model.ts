export class About {
    public name: string;
    public image: string;
    public contact: string;
    public email: string;
    public address: string;
    public role: string;

    constructor(name: string, image: string, contact: string, email:string, address: string, role: string) {
        this.name = name;
        this.image = image;
        this.contact = contact;
        this.email = email;
        this.address = address;
        this.role = role;
    }
}