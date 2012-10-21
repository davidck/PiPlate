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
var Gv = {
  env: 'pro',          // Environment [dev = development, pro = production]
  page: null,          // Page instance, globally referrable.
  hidden: 'hidden',
  ge: new Events(),    // Global event handler
  url:                 // Page Urls
  {
    ext: '/j/y/b/ext'
  }
};