class Command {
    #name;
    #options;
    
    constructor(args) {
        this.#name = args.name;
        this.#options = args.options;
    }

    get name        () { return this.#name }
    get options     () { return this.#options }
}

export default Command;