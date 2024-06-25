export function printChar(char, count) {
    const chars = [];
    for (let i = 1; i < count; i++) {
        chars.push(char.repeat(i));
    }

    return chars;
}
