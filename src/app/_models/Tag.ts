export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'primary' );
    static readonly RxJS = new Tag('RxJS', 'primary');
    static readonly TailwindCSS = new Tag('TailwindCSS', 'primary');
    static readonly Typescript = new Tag('Typescript', 'primary');
    static readonly JAVA = new Tag('Java', 'primary');
    static readonly NGZORRO = new Tag('NGZORRO', 'primary');
    static readonly Bootstrap = new Tag('Bootstrap', 'primary');
    static readonly JAVASCRIPT = new Tag('Javascript', 'primary');
    static readonly REACT = new Tag('React', 'primary');
    
    private constructor(private readonly key: string, readonly color: string){

    }
    toString(){
        return this.key;
    }
}