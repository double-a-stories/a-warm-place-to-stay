/** Story Constants */
story.version = "v0.3.2";

window.setup = window.setup || {};

// Warm Place to Stay Message
console.log(`
========================================================

Hi there! Thanks for reading A Warm Place to Stay.

If you're snooping around in the dev console, it probably
means you're looking for some secret goodies or easter
eggs.

There's not really much hidden content to speak of yet,
but you can execute this command to enable debug commands.

storyFlags.assign({showDebug: true}); location.reload();

Those commands are mostly just for testing, but they'll
let you switch Zasha's gender, warp to any passage, and
spawn with 200 HP and all weapons.

Maybe not that last one, actually.

-AA

=========================================================
`)

/** setup.rerender
 * Rerenders the current passage, perserving focus.
 * Snowman doesn't support watched "live" variables, so this is useful
 * if you need a link to update a variable on the current page.
 */
setup.rerender = () => {
    const focusIndex = controls.getFocusables()
        .index(document.activeElement);
    renderToSelector("tw-passage", passage.id);
    controls.getFocusables().eq(focusIndex).focus();
}

/**
 * A simple helper class, for storing arbitrary serialized objects and arrays in LocalStorage
 * Data is JSON encoded, and stored as base64 on the localStorage object.
 * Utilizes caching to minimize the number of encoding and decoding operations.
 * Full decode/encode is only performed when initializing, and when setting.
 */
window.BunnyStorage = class {
    constructor(id, defaultData = {}) {
        this.storageKey = id;
        // if no data exists, set the default
        if (this.get() == undefined) {
            this.set(defaultData);
        }
    }
    get() {
        if (!this._cached) {
            const raw = localStorage.getItem(this.storageKey);
            if (raw) {
                this._cached = JSON.parse(atob(raw));
            } else {
                this._cached = undefined;
            }
            return this._cached;
        }
        return this._cached;
    }
    set(data) {
        const json_encoded = JSON.stringify(data);
        this._cached = JSON.parse(json_encoded);
        const b64_encoded = btoa(json_encoded);
        localStorage.setItem(this.storageKey, b64_encoded);
    }
    add(...items) {
        if (Array.isArray(this.get())) {
            this.set([...this.get(), ...items])
        } else {
            throw Error("BunnyStorage.prototype.add can only be used if the stored object is an Array ");
        }
    }
    assign(obj) {
        if (!Array.isArray(this.get())) {
            this.set({
                ...this.get(),
                ...obj
            })
        }
    }
    clear() {
        localStorage.removeItem(this.storageKey);
        this._cached = undefined;
    }
}

window.storyFlags = new BunnyStorage("WP_flags", {});

console.debug("Initialized storyFlags")

// Sync history with storyflags
$(window).one("sm.story.started", () => {
    if (!Array.isArray(storyFlags.get().seenPassages)) {
        storyFlags.assign({
            seenPassages: []
        });
    }
    $(window).on("sm.passage.shown", (event, {passage}) => {
        let seen = storyFlags.get().seenPassages || [];
        if (!seen.includes(passage.id)) {
            storyFlags.assign({
                seenPassages: [...seen, passage.id]
            })
            if (passage.tags.includes("checkpoint")) {
                console.debug(`Visited checkpoint "${passage.name}" for the first time.`)
            }
        }
    });
});
// If Twine "test", enable the debug menu
if ($("tw-storydata").attr("options").includes("debug")) {
  storyFlags.assign({showDebug: true})
}