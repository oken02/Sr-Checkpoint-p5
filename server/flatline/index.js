export const groupBy = (collection, iterator) => {
    const users = {};
    if (typeof iterator != 'function') {
        collection.forEach(user => {
            const state = user.state
            users[state] = users[state] || [];
            users[state].push(user);
        });
        return users;
    }
    collection.forEach(user => {
        var key = iterator(user)
        users[key] = users[key] || [];
        users[key].push(user);
    });
    return users;
};



export const flowRight = (fn, ...rest) =>
    rest.length === 0 ?
        fn :
        (...args) => fn(flowRight(...rest)(...args));