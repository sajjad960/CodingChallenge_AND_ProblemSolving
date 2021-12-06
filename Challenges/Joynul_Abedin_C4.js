const isTwin = (first, second) => {
    // Impelement this function

    let boleanArray = first.toLowerCase().split('').map((el) => {
        if(el !== undefined) {
            return second.toLowerCase().includes(el);
        }
    })

    const s = new Set(boleanArray)
   
    if(s.size === 1) {
        return true
    } else {
        return false;
    }
     
  };
  

  isTwin('Hello', 'World'); // false
  isTwin('Silent', 'Listen'); // true
  isTwin("Good", "OODG"); // true