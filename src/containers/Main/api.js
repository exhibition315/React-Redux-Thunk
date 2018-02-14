export const login = (text) => {
    const p = new Promise((resolve) => {
        setTimeout(() => {
            const token = `${text}_token`;
            resolve(token);
        }, 1000);
    });
    return p;
};
