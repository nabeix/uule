const table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
export function uule(name: string): string {
    const len = name.length;
    const key = table[len];
    return "w+CAIQICI" + key + (Buffer.from(name, "ascii")).toString("base64");
}
