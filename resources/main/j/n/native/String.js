/*
--- 
description: FED Process
authors: 
- David Chan CK
license:
- MIT-style license
requires: 
- core/1.3.2: '*'
- more/1.3.2.1: [Utilities.Assets]
provides: [LazyLoader]
...
*/
String.implement(
{
  explode: function(delimiter, regexMod)
  {
    var regexMod = (regexMod || ''), string = this+delimiter, regex = new RegExp(regexMod+delimiter, 'g'), results, pieces = [], isEmpty = false, piece;
    
    while (!isEmpty)
    {
      results = string.search(regex);
      if (results == '-1')
        isEmpty = true;
      else
      {
        if (results != 0)
        {
          piece = string.substring(0, results);
          pieces.push(piece);
        }
        
        if (string.length > 1)
        {
          string = string.slice(results+1);
        }
        else
          isEmpty = true;
      }
    }
    return pieces;
  }
});