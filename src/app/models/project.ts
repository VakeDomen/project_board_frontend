export class Project {

    id?: string;
    name: string;
    description: string;
    git: string;
    url: string;
    private: boolean;
    owner: string;

    constructor(data: any) {
        this.id          = data.id
        this.name        = data.name;
        this.description = data.description;
        this.git         = data.git;
        this.url         = data.url;
        this.private     = data.private;
        this.owner       = data.owner;
    }
}
