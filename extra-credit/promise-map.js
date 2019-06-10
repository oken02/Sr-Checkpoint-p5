Promise.map = (collection, iterator) => {
    return new Promise(function (resolve, reject) {
        const arr =[] 
        collection.map(element => arr.push(iterator(element)))

        resolve(arr);

    })
};
