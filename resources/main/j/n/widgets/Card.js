var Card = new Class
({
  Implements: [Events, Options],
  options:
  {
    cls: 'w_card',
    is_autorun: true,
    is_preloaded: true,
    first_autorun_duration: 5000,
    autorun_duration: 5500,
    transition_duration: 200
  },
  initialize: function(_element, options)
  {
    this.setOptions(options);
    if (_element)
    {
      this._element = _element;
      this.build();
    }
  },
  build: function()
  {
    var opts  = this.options,
        fcls  = '.'+opts.cls,
        _this = document.id(this);
        
    this.is_first = true;
    this.is_animating = false;
    this.pagination = null;
        
    this._btnprevious = _this.getElement(fcls+'_btnprevious');
    this._btnnext     = _this.getElement(fcls+'_btnnext');
    this._pagination  = _this.getElement(fcls+'_pagination');
    this._stage       = _this.getElement(fcls+'_stage');
    this._items       = _this.getElements(fcls+'_item');
    
    if (this._items.length > 1)
    {
      this.pagination = new Card.Pagination(this._pagination, this);
    }
    this.stage = new Card.Stage(this._stage, this._items, this);
    
    this._btnprevious.addEvent('click', function()
    {
      this.is_clicked = true;
      this.clear_periodical()
          .set_previous_image();
    }.bind(this));

    this._btnnext.addEvent('click', function()
    {
      this.is_clicked = true;
      this.clear_periodical()
          .set_next_image();
    }.bind(this));

    this.set_image(0);
    
    this.periodical = null;
    if (opts.is_autorun)
    {
      this.set_direction('next');
      
      /*
      this.periodical = this.clear_periodical().set_next_image.periodical(opts.autorun_duration, this);  
      */
      (function(){
          if(this.is_clicked == null || this.is_clicked == false){
            this.set_next_image();
            this.periodical = this.clear_periodical().set_next_image.periodical(this.options.autorun_duration, this);  
          }
      }).bind(this).delay(opts.first_autorun_duration);



      /*
      this.stage.addEvent('on_preload', function()
      {
        
      }.bind(this));    
      */
    }
  },
  clear_periodical: function()
  {
    if (this.options.is_autorun && this.periodical)
    {
      this.options.is_autorun = false;
      clearInterval(this.periodical);
    }
    return this;
  },
  get_direction: function()
  {
    return this.direction;
  },
  set_animating: function(is_animating)
  {
    this.is_animating = is_animating;
  },
  set_direction: function(direction)
  {
    this.direction = direction;
    return this;
  },
  set_image: function(index)
  {
    if (!this.is_animating)
    {    
      this.stage.set_image_by_index(index);
      this.pagination.set_current_page_index(index);
    }
  },
  set_next_image: function()
  {
    this.set_direction('next');
    this.set_image(this.pagination.retrieve_next());
  },
  set_previous_image: function()
  {
    this.set_direction('previous');
    this.set_image(this.pagination.retrieve_previous());
  },
  toElement: function()
  {
    return this._element;
  }
});

Card.Pagination = new Class
({
  Implements: [Events, Options],
  options:
  {
    cls: 'w_card_pagination'
  },
  initialize: function(_element, card, options)
  {
    this.setOptions(options);
    if (_element)
    {
      this._element = _element;
      this.card = card;
      this.build();
    }
  },
  build: function()
  {
    var opts  = this.options,
        cls   = opts.cls,
        _this = this._element;
        
    this.items = [];
    this.current_page_index = 0;
    
    this.card._items.length.times(function(i)
    {
      var item = new Element('a',
      {
        'href': '#',
        'html': '&#9632;',
        events:
        {
          click: function(e)
          {
            e.stop();
            var direction = (this.get_current_page_index() < i) ? 'next' : 'previous';
            this.card.is_clicked = true;
            this.card.clear_periodical()
                     .set_direction(direction)
                     .set_image(i);
          }.bind(this)
        }
      }).inject(_this);
      this.items.push(item);
    }.bind(this));
  },
  get_current_page_index: function()
  {
    return this.current_page_index;
  },
  retrieve_next: function()
  {
    var count = this.items.length;
    if (this.current_page_index == count-1)
    {
      return 0;
    }
    return this.current_page_index+1;
  },
  retrieve_previous: function()
  {
    var count = this.items.length;
    if (this.current_page_index == 0)
    {
      return count-1;
    }
    return this.current_page_index-1;
  },
  set_current_page_index: function(index)
  {
    this.items[this.current_page_index].removeClass('selected');
    this.current_page_index = index;
    this.items[index].addClass('selected');
  },
  toElement: function()
  {
    return this._element;
  }
});

Card.Stage = new Class
({
  Implements: [Events, Options],
  options:
  {
    cls: 'w_card_stage'
  },
  initialize: function(_element, _items, card, options)
  {
    this.setOptions(options);
    if (_element)
    {
      this._element = _element;
      this._items = _items;
      this.card = card;
      this.build();
    }
  },
  build: function()
  {
    var opts  = this.options,
        fcls  = '.'+opts.cls,
        _this = document.id(this);
    
    this.active_item = null;
    this.items = [];
    this.times_accessed = 0;

    this._canvas = _this.getElement(fcls+'_canvas');

    this._items.each(function(_item, i)
    {
      var item_options = {};
      
      if (i == 0)
      {
        item_options = {
          preloads: false
        };
      }
      
      this.items.push(new Card.Item(_item, this, this.card, item_options));
    }.bind(this));
    
    if (this.card.options.is_preloaded)
      this.preload();
  },
  manage_z: function(old, current) {
    // document.id(old).grab(document.id(current), 'after');
  },
  preload: function()
  {
    var images = [];
    
    this.items.each(function(itm)
    {
      images.push(itm.get_src());
    }.bind(this));

    Asset.images(images,
    {
      onProgress: function(c, i)
      {
        this.items[i].is_loaded = true;
        this.items[i].set_image();
      }.bind(this),
      onComplete: function()
      {
        this.fireEvent('on_preload');
      }.bind(this)
    });
  },
  get_container: function()
  {
    return this._canvas;
  },
  set_image: function(item)
  {
    if (this.active_item)
    {
      // this.manage_z(this.active_item, item);
      this.active_item.close();
    }
    this.active_item = item;
    item.open();
    item.set_image();
    this.times_accessed++;
  },
  set_image_by_index: function(index)
  {
    this.set_image(this.items[index]);
  },
  toElement: function()
  {
    return this._element;
  }
});

Card.Item = new Class
({
  Implements: [Events, Options],
  options:
  {
    cls: 'w_card_item',
    preloads: true
  },
  initialize: function(_element, stage, card, options)
  {
    this.setOptions(options);
    if (_element)
    {
      this._element = _element;
      this.stage = stage;
      this.card = card;
      this.build();
    }
  },
  build: function()
  {
    var opts  = this.options,
        cls   = opts.cls,
        fcls  = '.'+cls,
        _this = document.id(this);
        
    this.has_image = false;
    this.src = _this.getProperty('data-image');
    this.url = _this.getProperty('data-url') || false;
    if (this.url)
      this.enable_card_click();

    this.is_loaded = false;

    this.width = _this.getSize().x;
    
    var dur = this.card.options.transition_duration || 0;
    this.fx = new Fx.Morph(_this, { link: 'cancel', duration: dur });
  },
  enable_card_click: function()
  {
    document.id(this).set({
      styles: {
        cursor: 'pointer'
      },
      events: {
        click: this.go_to_url.bind(this)
      }
    });
  },
  go_to_url: function()
  {
    location.href=this.url;
  },
  close: function()
  {
    var direction = this.card.get_direction();
    var left_move_range = [0, -this.width];
    switch(direction)
    {
      case 'previous':
        left_move_range = [0, this.width];
      break;
      case 'next':
      default:
    }
    this.card.set_animating(true);
    // document.id(this).removeClass('active').addClass('inactive');
    this.fx.start(
    {
      opacity: 0
      /* left: left_move_range */
    }).chain(function()
    {
      this.card.set_animating(false);
    }.bind(this));
  },
  preload: function()
  {
    if (this.options.preloads)
    {
      Asset.image(this.src);      
    }
  },
  load_image: function()
  {
    (function()
    {
    Asset.image(this.src,
    {
      onLoad: function()
      {
        console.log('Goes here');
        this.is_loaded = true;
        this.set_image();
      }.bind(this)
    });
    }).delay(300, this);
  },
  open: function()
  {
    var direction = this.card.get_direction(),
        _this = document.id(this);
   
    
    _this.removeClass('inactive').addClass('active');
    
    this._element.setStyles
    ({
      visibility: 'visible',
      opacity: 0.1
    });
        
    this.card.set_animating(true);
    this.fx.start(
    {
      opacity: 1
    }).chain(function()
    {
      _this.addClass('post');
      this.card.set_animating(false);
    }.bind(this));
  },
  get_src: function()
  {
    return this.src;
  },
  set_image: function()
  {
    if (!this.is_loaded && !this.card.options.is_preloaded)
      this.load_image();
    else
    {
      if (!this.has_image)
      {
        this.has_image = true;
        var sanitized = this.src.trim();
        document.id(this).setStyle('background-image', 'url('+sanitized+')');
      }
    }
  },
  toElement: function()
  {
    return this._element;
  }
});
