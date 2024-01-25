export const compare_fn_create = function (sort_by_value) {
  return function (a, b) {
    if (sort_by_value === 'packed') {
      if (a.packed < b.packed) {
        return 1;
      } else if (a.packed > b.packed) {
        return -1;
      }  
  
      return 0;
    } else if (sort_by_value === 'unpacked') {
      if (a.packed < b.packed) {
        return -1;
      } else if (a.packed > b.packed) {
        return 1;
      }
  
      return 0;
    }
  
    if (a.id < b.id) {
      return -1;
    } else if (a.id > b.id) {
      return 1;
    }              
  
    return 0;
  };
};