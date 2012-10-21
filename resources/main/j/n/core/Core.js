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
var Core = new Class();
Core.extend
({
  id_to_page: function(id)
  {
    return 'Page'+id.trim().capitalize();
  }
});