export async function request(path, method, body) {
    return await fetch(path, {
        method,
        body: JSON.stringify(body)
    });
}