module.exports = function reverse (n) {
  
        let result = '';
        let m = n;
        if (n < 0) {
            m = -1 * n;
        }
        let i = 0;
        while (i < String(m).length) {
            result = String(m)[i] + result;
          i += 1;
        }
        return Number(result);
      
      }
