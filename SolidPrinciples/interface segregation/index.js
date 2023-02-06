// Clients should not be forced to depend upon interfaces that they do not use
//A large interface should be split into smaller and relevant interfaces that are relevant to them.

// BAD

class DOMTraverser {
    constructor(settings) {
        this.settings = settings;
        this.setup();
    }

    setup() {
        this.rootNode = this.settings.rootNode; //always necessary
        this.animationModule.setup(); //not necessary
    }

    traverse() {
        // ...
    }
}

const $ = new DOMTraverser({
    rootNode: document.getElementsByTagName('body'),
    animationModule() {} // Most of the time, we won't need to animate when traversing.
    // ...
});

// GOOD

class DOMTraverser {
    constructor(settings) {
        this.settings = settings;
        this.options = settings.options;
        this.setup();
    }

    setup() {
        this.rootNode = this.settings.rootNode;
        this.setupOptions();
    }

    setupOptions() {
        if (this.options.animationModule) {
            // ...
        }
    }

    traverse() {
        // ...
    }
}

const $ = new DOMTraverser({
    rootNode: document.getElementsByTagName('body'),
    options: {
        animationModule() {}
    }
});