// File: box.js

class LockBox {
    constructor() {
        this._content = [];
        this._locked = true;
    }

    unlock() {
        this._locked = false;
    }

    lock() {
        this._locked = true;
    }

    isLocked() {
        return this._locked;
    }

    get content() {
        if (this.isLocked()) {
            throw new Error('Locked!!');
        }
        return this._content;
    }
}

const box = new LockBox();

function withBoxUnlocked(f) {
    try {
        box.unlock();
        f.call(null, box);
    }
    finally {
        box.lock();
    }
}

withBoxUnlocked(b => {
    b.content.push("gold piece");
    console.log(b.content);
});

try {
    withBoxUnlocked(b => {
        throw new Error("Pirates on the horizon");
    });
} catch(e) {
    console.log(`Error raised: ${e}`);
}
console.log(`box.isLocked: ${box.isLocked()}`);