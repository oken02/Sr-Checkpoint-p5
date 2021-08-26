
Promise.map = (paths, func) => {
    const isPromiseHandler = (ins, rejMain, handler) => {
      return new Promise((res) => {
        ins = handler ? handler(ins) : ins;
   
        if (ins instanceof Promise) {
          ins.then(res, rejMain);
        } else {
          res(ins);
        }
      });
    };
  
    return new Promise((res, rej) => {
      let actualCant = 1;
      const contents = [];
  
      paths.map((pathNoRes, idx) => {
        isPromiseHandler(pathNoRes, rej).then((path) => {
          isPromiseHandler(path, rej, func)
            .then((data) => {
              contents[idx] = data;
  
              if (actualCant++ == paths.length) {
                console.log("CONTENT", contents);
                res(contents);
              }
            })
  
            .catch(rej);
        });
      });
    });
  };
  