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
var Site = new Class({
  initialize: function() {
    this.pre();
    var bdy = document.id(document.body),
        id = bdy.get('id'),
        page,
        page_var = Core.id_to_page(id);
    if (window[page_var]) {
      page = new window[page_var];
      Gv.page = page;
    }
    this.post();
  },
  pre: function(){},
  post: function(){}
});