export function ObjFactory (x: number) {
  const obj = {
    x,
    make: function() {
      return 5;
    }
  }

  return obj;
}

/**
 * const myObj = Object.assign ({}, new ObjFactory(), new ObjFactory2());
 */
