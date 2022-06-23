import { useEffect, useRef } from "react";

const isEmtyObject = (obj) =>  Object.keys(obj).length === 0

const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);
   
    useEffect(() => {
      if (didMount.current) {
        func();
      } else {
        didMount.current = true;
      }
    }, deps);
  };

module.exports = { isEmtyObject,useDidMountEffect }