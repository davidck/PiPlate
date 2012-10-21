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
PageHom = new Class
({
  Extends: Page,
  initialize: function()
  {
    alert('inside homepage');
  }
});