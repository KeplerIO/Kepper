import Config from "./Config.json" with {type: "json"};

class CommandParser {
    #message;
    #baseCommand;
    #baseArgs;
    #cmdOptions;
    
    constructor(message, cmdInput) {
        this.#message = message;
        
        cmdInput = this.#formatToArray(cmdInput);
        this.#baseCommand = this.#extractBaseCommand(cmdInput);
        this.#baseArgs = Array.from(cmdInput);
        cmdInput = undefined;

        this.#createCommandOptions(this.#baseArgs);
    }

    get message    () { return this.#message } 
    get baseCommand() { return this.#baseCommand }
    get baseArgs   () { return this.#baseArgs }
    get cmdOptions () { return this.#cmdOptions }

    #trimPrefix(s) {
        return s.trim().slice(Config.Commands.PREFIX.length);
    }
    
    #formatToArray(i) {
        i.toLowerCase();
        i = this.#trimPrefix(i);
        i = i.split(" ");
        return i;
    }

    #extractBaseCommand(i) {
        return i.shift();
    }

    #createCommandOptions(args) { 
        let options = [];
        
        for(let [index, arg] of args.entries()) {
            if(arg.startsWith(Config.Commands.OPTION_PREFIX)) {
                let opt = {count: null, name: null, val: ""};
                opt.count = (options.length + 1); //TODO: Possibly use the index to count the command options here...
                opt.name = arg;
                options.push(opt);
            } else {
                options[options.length - 1].val += " " + arg;
            }
        }

        this.#cmdOptions = Array.from(options);
        this.#baseArgs = undefined;
    }

    parse() {
        return { name: this.#baseCommand, options: this.#cmdOptions }
    }
}

export default CommandParser;
