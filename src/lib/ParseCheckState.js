export function parseCheckState(state) {
    if (state === "true") {
        return true;
    }
    else if (state === "false") {
        return false;
    }
    else if (state === "on") {
        return true;
    }
    else if (state === "off") {
        return false;
    }
    else {
        return false;
    }
}