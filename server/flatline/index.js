export const groupBy = (collection, iterator) => {
    const obj = {}
    collection.forEach(cosa => {
        if (typeof iterator !== 'function') {
            if (!obj[cosa[iterator]]) obj[cosa[iterator]] = [cosa]
            else obj[cosa[iterator]].push(cosa)
        }
        else {
            if (!obj[iterator(cosa)]) obj[iterator(cosa)] = [cosa]
            else obj[iterator(cosa)].push(cosa)
        }
    })

    return obj
};

export const flowRight = (...functions) =>  functions.reduce((val1, val2) => (...results) => val1(val2(...results)))
  

