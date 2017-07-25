setTimeout(function() {
  // DEOBFUSCATION
  var SPRITE = Lapa13628Mauve;
  var client = Lapa13612Mauve;
  var RECIPES = Lapa13627Mauve;
  var world = Lapa13693Mauve;
  var WORLD = Lapa13574Mauve;
  user.show_spectators = user.Lapa13746Mauve;
  get_mouse_pos = Lapa13745Mauve;
  ctx = Lapa13676Mauve;
  
  var OBFUSCATOR_FN = _0x88d0;
  var USER_INV_VAR_NAME = "inv";
  var USER_INV_DELETE_ITEM_FN_NAME = "delete_item";
  var WORLD_FAST_UNITS_ARR_NAME = OBFUSCATOR_FN("0x495");
  var USER_UID_VAR_NAME = "uid";
  var UPDATE_INV_BUTTONS_FN_NAME = OBFUSCATOR_FN("0x59b");
  var SELECT_CRAFT_FN_NAME = "Lapa13605Mauve" // OLD (JUL 8) OBFUSCATOR_FN("0x59e"); OLD
  var CLIENT_SELECT_INV_FN_NAME = OBFUSCATOR_FN("0x5c3"); 
  var DRAW_UI_INVENTORY_FN_NAME = "Lapa13569Mauve"; //
  var GAME_TRIGGER_KEYUP_FN_NAME = OBFUSCATOR_FN("0x76d");
  var CLIENT_BUILD_STOP_FN_NAME = OBFUSCATOR_FN("0x587"); 
  var CLIENT_DELETE_INV_FN_NAME = "Lapa13586Mauve" // OBFUSCATOR_FN("0x5b5");
  var CLIENT_SOCKET_VAR_NAME = OBFUSCATOR_FN("0x564");
  var GAME_DRAW_UI_FN_NAME = OBFUSCATOR_FN("0x768"); //23907
  var GAME_UPDATE_SCENE_FN_NAME = "Lapa13673Mauve" // just below game draw_UI
  var CLIENT_GET_TIME_FN_NAME = OBFUSCATOR_FN("0x59e")
  var UI_PLAY_GAME_FUNCTION_NAME = "play_game";
  
  var SPRITE_COUNTER_VAR_NAME = "Lapa13536Mauve" // look for "x" + c
  
  var INV_WHEAT_SEEDS_VAR_NAME = "INV_WHEAT_Lapa13797Mauve";
  var INV_SEEDS_VAR_NAME = "INV_Lapa13797Mauve";
  var USER_GAUGES_WATER_METER_VAR_NAME = 't';
  
  var CURRENT_FRAME_RATE_VAR_NAME = 'Lapa13681Mauve'; // under window
  // END DEOBFUSCATION
  
  var unique_index_counter = 500;
  var find_unique_index = function() {
    while(sprite[unique_index_counter] != null) {
      unique_index_counter++;
    }
    return unique_index_counter;
  };
  
  var create_help = function() {
    var title = 'HELP MENU';
    var title_font = "bold 40px Baloo Paaji";
    var letter_font = "bold 35px Baloo Paaji";
    var msg_font = "30px Baloo Paaji";
    
    var title_font_height = 40 * 1.1;
    var letter_font_height = 35 * 1.1;
    var msg_font_height = 30 * 1.1;
    
    var help_messages = [
     [ 'H', 'Open Help - open this help menu' ],
     [ 'Y', 'Open Map - open the larger map' ],
     [ 'R', 'Auto-Feed - auto-eat food when low' ],
     [ 'T', 'Auto-Book - auto-equip book on craft' ],
   [ 'K', 'Auto-Drink - auto-drink water when low' ],
     [ 'P', 'Show Spectators - only in hunger games' ],
     [ 'L', 'Fast-Delete - no warning on deleting items' ],
     [ 'C', 'Clock - toggle the clock' ],
     [ '*', 'Type "-swap 1 2" to swap slots 1 and 2' ],
     [ '*', 'Type "-remap F 1" to have slot 1 bound to F' ],
     [ '*', 'Type "-unmapall" to clear all remaps' ]
    ];
    
    var edge_padding_x = 5;
    var top_edge_padding_y = 15;
    var bot_edge_padding_y = 3;
    var title_padding_extra_y = 5;
    var line_padding_y = 3;
    var letter_msg_padding = 3;
    
    var temp_canv = document.createElement("canvas");
    var temp_ctx = temp_canv.getContext("2d");
    
    var longest_letter = 0;
    var longest_msg = 0;
    var total_height = top_edge_padding_y + title_font_height + title_padding_extra_y;
    for(var i = 0; i < help_messages.length; i++)
    {
      total_height += line_padding_y;
      
      temp_ctx.font = letter_font;
      var letter_metrics = temp_ctx.measureText(help_messages[i][0]);
      
      temp_ctx.font = msg_font;
      var msg_metrics = temp_ctx.measureText(help_messages[i][1]);
      longest_letter = Math.max(longest_letter, letter_metrics.width);
      longest_msg = Math.max(longest_msg, msg_metrics.width);
      total_height += Math.max(msg_font_height, letter_font_height);
    }
    total_height += bot_edge_padding_y;
    
    var total_width = edge_padding_x + longest_letter + letter_msg_padding + longest_msg + edge_padding_x;
    
    temp_canv.width = total_width;
    temp_canv.height = total_height;
    
    temp_ctx.globalAlpha = .5;
    round_rect(temp_ctx, 0, 0, temp_canv.width, temp_canv.height, 10);
    fill_path(temp_ctx, "#000");
    
    temp_ctx.globalAlpha = 1.0;
    
    temp_ctx.textAlign = 'left';
    temp_ctx.fillStyle = '#FFF';
    temp_ctx.font = title_font;
    temp_ctx.fillText(title, (temp_canv.width / 2) - (temp_ctx.measureText(title).width / 2), top_edge_padding_y + title_font_height / 2);
    
    temp_ctx.textAlign = 'left';
    var y = top_edge_padding_y + title_font_height + title_padding_extra_y;
    for(var i = 0; i < help_messages.length; i++) {
      y += line_padding_y;
      
      var x = edge_padding_x;
      temp_ctx.font = letter_font;
      temp_ctx.fillText(help_messages[i][0], x, y + letter_font_height / 2)
      x += longest_letter + letter_msg_padding;
      
      temp_ctx.font = msg_font;
      temp_ctx.fillText(help_messages[i][1], x, y + msg_font_height / 2);
      y += Math.max(letter_font_height, msg_font_height)
    }
    
    return temp_canv
  }

  function create_arrow_back(color) {
    var bknd_canv = document.createElement("canvas");
    var bknd_ctx = bknd_canv.getContext("2d");
    
    // todo make an arrow
    bknd_ctx.font = "20px Baloo Paaji";
    bknd_canv.width = bknd_ctx.measureText("BACK").width + 2;
    bknd_canv.height = 24;
    
    bknd_ctx.font = "20px Baloo Paaji";
    bknd_ctx.textAlign = 'center';
    bknd_ctx.fillStyle = color;
    bknd_ctx.fillText('BACK', bknd_canv.width / 2, bknd_canv.height / 2);
    
    return bknd_canv;
  }
  
  function create_arrow_next(color) {
    var bknd_canv = document.createElement("canvas");
    var bknd_ctx = bknd_canv.getContext("2d");
    
    // todo make an arrow
    bknd_ctx.font = "20px Baloo Paaji";
    bknd_canv.width = bknd_ctx.measureText("NEXT").width + 2;
    bknd_canv.height = 24;
    
    bknd_ctx.font = "20px Baloo Paaji";
    bknd_ctx.textAlign = 'center';
    bknd_ctx.fillStyle = color;
    bknd_ctx.fillText('NEXT', bknd_canv.width / 2, bknd_canv.height / 2);
    
    return bknd_canv;
  }
  
  var cntr = 0;
  var PAGES = [];
  PAGES["CATEGORIES_1"] = cntr++;
  PAGES["PICKAXES"] = cntr++;
  PAGES["SWORDS"] = cntr++;
  PAGES["SPEARS"] = cntr++;
  PAGES["HAMMERS"] = cntr++;
  PAGES["PLACEABLES"] = cntr++;
  PAGES["PLACEABLES_2"] = cntr++;
  PAGES["WALLS"] = cntr++;
  PAGES["SPIKES"] = cntr++;
  PAGES["DOORS"] = cntr++;
  PAGES["FOOD_HEALING"] = cntr++;
  PAGES["FOOD_HEALING_2"] = cntr++;
  PAGES["HELMETS"] = cntr++;
  PAGES["WEARABLES"] = cntr++;
  PAGES["WEARABLES_2"] = cntr++;
  PAGES["MISCELLANEOUS"] = cntr++;
  PAGES["CRAFTING_ITEMS"] = cntr++;
  
  // All the create_recipe_page_ functions return [ canvas, buttons ]
  // ex. [ img, [ { page_num, translate: {x, y}, width, height, normal, hovered, pushed, contains(x,y) }, ... ]
  
  // returns canvas
  var __create_category_button = function(img, text, font, font_height, bknd_color, bknd_opacity, text_color) {
    var edge_padding_x = 3;
    var edge_padding_y = 3;
    var img_text_spacing_x = 3;
    var roundedness = 10;
    
    var bknd_canv = document.createElement("canvas");
    var bknd_ctx = bknd_canv.getContext("2d");
    
    bknd_ctx.font = font
    var text_metric = bknd_ctx.measureText(text);
    
    bknd_canv.width = edge_padding_x + img.width + img_text_spacing_x + text_metric.width + edge_padding_x;
    bknd_canv.height = edge_padding_y + Math.max(font_height, img.height) + edge_padding_y;
    
    if(bknd_color != null) {
      bknd_ctx.globalAlpha = bknd_opacity;
      round_rect(bknd_ctx, 0, 0, bknd_canv.width, bknd_canv.height, roundedness);
      fill_path(bknd_ctx, bknd_color);
      bknd_ctx.globalAlpha = 1;
    }
    
    bknd_ctx.font = font;
    bknd_ctx.fillStyle = text_color;
    bknd_ctx.drawImage(img, edge_padding_x, edge_padding_y);
    bknd_ctx.fillText(text, edge_padding_x + img.width + img_text_spacing_x, edge_padding_y + img.height / 2);
    
    return bknd_canv;
  }
  
  function __ext_create_button(normal, hovered, pushed) {
    var res = { translate: { x: 0, y: 0 } }
    res.normal = normal;
    res.hovered = hovered;
    res.pushed = pushed;
    res.width = res.normal.width;
    res.height = res.normal.height;
    res.contains = function(x, y) {
      return x >= this.translate.x && y >= this.translate.y && x <= (this.translate.x + this.width) && y <= (this.translate.y + this.height);
    };
    return res;
  }
  // returns { translate: {x, y}, width, height, normal, hovered, pushed, contains(x,y) }
  var create_category_button = function(img, text) {
    var font = '24px Baloo Paaji';
    var font_height = 24;
    var text_color = '#FFF';
    var hovered_background_color = '#000';
    var pushed_background_color = '#000';
    var hovered_background_opacity = 0.4;
    var pushed_background_opacity = 0.8;
    
    var res = {
      translate: { x: 0, y: 0 }  
    }
    
    res.normal = CTI(__create_category_button(img, text, font, font_height, null, 0, text_color));
    res.width = res.normal.width;
    res.height = res.normal.height;
    res.hovered = CTI(__create_category_button(img, text, font, font_height, hovered_background_color, hovered_background_opacity, text_color));
    res.pushed = CTI(__create_category_button(img, text, font, font_height, pushed_background_color, pushed_background_opacity, text_color));
    res.contains = function(x, y) {
      return x >= this.translate.x && y >= this.translate.y && x <= (this.translate.x + this.width) && y <= (this.translate.y + this.height);
    };
    
    return res;
  }
  
  // categories, in the form [ { page_num, img, category_name }, ... ]
  // returns [ canvas, context2d, buttons ]
  var __create_recipe_page_categories = function(categories, prev_category_page_num, next_category_page_num) {
    var columns = 3;
    var left_edge_padding_x = 5;
    var right_edge_padding_x = 5;
    var top_edge_padding_y = 15;
    var bot_edge_padding_y = 10;
    var title_below_padding_y = 5;
    var row_padding_y = 5;
    var title_font = "bold 40px Baloo Paaji";
    var title_font_height = 44;
    var category_font = "24px Baloo Paaji";
    var category_font_height = 24;
    var category_img_text_padding_x = 5;
    var padding_y_before_pagination = 8;
    var column_padding_x = 5;
    
    var prev_button = __ext_create_button(sprite[SPRITE.ARROW_BACK][0], sprite[SPRITE.ARROW_BACK][1], sprite[SPRITE.ARROW_BACK][2]);
    var next_button = __ext_create_button(sprite[SPRITE.ARROW_NEXT][0], sprite[SPRITE.ARROW_NEXT][1], sprite[SPRITE.ARROW_NEXT][2]);
    
    var title = 'CATEGORIES';
    
    var bknd_canv = document.createElement("canvas");
    var bknd_ctx = bknd_canv.getContext("2d");
    
    var title = 'CATEGORIES'
    
    bknd_ctx.font = title_font;
    var title_width = bknd_ctx.measureText(title).width;
    
    bknd_ctx.font = category_font;
    var row_height_prev = 0;
    var max_column_width = 0;
    var total_height = top_edge_padding_y + title_font_height + title_below_padding_y;
    for(var i = 0; i < categories.length; i++) {
      if(i != 0 && i % columns == 0) {
        total_height += row_padding_y + row_height_prev;
        row_height_prev = 0;
      }
      
      var cat_width = categories[i].img.width + category_img_text_padding_x + bknd_ctx.measureText(categories[i].category_name).width;
      max_column_width = Math.max(max_column_width, cat_width);
      row_height_prev = Math.max(row_height_prev, categories[i].img.height);
    }
    total_height += row_padding_y + row_height_prev;
    if(prev_category_page_num != null || next_category_page_num != null) {
      total_height += padding_y_before_pagination + Math.max(prev_button.height, next_button.height);
    }
    total_height += bot_edge_padding_y;
    var total_width = left_edge_padding_x + max_column_width * columns + column_padding_x * (columns - 1) + right_edge_padding_x;
    
    bknd_canv.width = total_width;
    bknd_canv.height = total_height;
    
    bknd_ctx.globalAlpha = 0.5;
    round_rect(bknd_ctx, 0, 0, bknd_canv.width, bknd_canv.height, 10);
    fill_path(bknd_ctx, '#000');
    bknd_ctx.globalAlpha = 1;
    
    bknd_ctx.font = title_font;
    bknd_ctx.fillStyle = '#FFF';
    var title_metr = bknd_ctx.measureText(title);
    bknd_ctx.fillText(title, bknd_canv.width / 2 - title_metr.width / 2, top_edge_padding_y + title_font_height / 2);
    
    var buttons = []
    bknd_ctx.font = category_font;
    var y = top_edge_padding_y + title_font_height + title_below_padding_y;
    var x = left_edge_padding_x;
    row_height_prev = 0;
    for(var i = 0; i < categories.length; i++) {
      if(i != 0 && i % columns == 0) {
        y += row_padding_y + row_height_prev;
        x = left_edge_padding_x;
      }
      
      var but = create_category_button(categories[i].img, categories[i].category_name);
      but.page_num = categories[i].page_num;
      but.translate.x = x;
      but.translate.y = y;
      buttons[buttons.length] = but;
      
      row_height_prev = Math.max(row_height_prev, categories[i].img.height);
      x += max_column_width + column_padding_x;
    }
    y += row_padding_y + row_height_prev;
    
    if(prev_category_page_num != null) {
      prev_button.translate.x = left_edge_padding_x;
      prev_button.translate.y = total_height - prev_button.height - bot_edge_padding_y;
      
      buttons[button.length] = prev_button;
    }
    
    if(next_category_page_num != null) {
      next_button.translate.x = total_width - next_button.width - right_edge_padding_x;
      next_button.translate.y = total_height - next_button.height - bot_edge_padding_y;
      
      buttons[buttons.length] = next_button;
    }
    
    return [ bknd_canv, bknd_ctx, buttons ];
  }
  
  var create_recipe_page_categories_1 = function() {
    var tmp = __create_recipe_page_categories([ 
      { page_num: PAGES.PICKAXES, img: sprite[SPRITE.INV_PICK_WOOD][1], category_name: "Pickaxes" },
      { page_num: PAGES.SWORDS, img: sprite[SPRITE.INV_SWORD][1], category_name: "Swords" },
      { page_num: PAGES.SPEARS, img: sprite[SPRITE.INV_SPEAR][1], category_name: "Spears" },
      { page_num: PAGES.HAMMERS, img: sprite[SPRITE.INV_HAMMER][1], category_name: "Hammers" },
      { page_num: PAGES.PLACEABLES, img: sprite[SPRITE.INV_FIRE][1], category_name: "Placeables" },
      { page_num: PAGES.WALLS, img: sprite[SPRITE.INV_WALL][1], category_name: "Walls" },
      { page_num: PAGES.SPIKES, img: sprite[SPRITE.INV_SPIKE][1], category_name: "Spikes" },
      { page_num: PAGES.DOORS, img: sprite[SPRITE.INV_DOOR_WOOD_CLOSE][1], category_name: "Doors" },
      { page_num: PAGES.FOOD_HEALING, img: sprite[SPRITE.INV_COOKED_MEAT][1], category_name: "Food & Healing" },
      { page_num: PAGES.HELMETS, img: sprite[SPRITE.INV_STONE_HELMET][1], category_name: "Helmets" },
      { page_num: PAGES.WEARABLES, img: sprite[SPRITE.INV_EARMUFFS][1], category_name: "Wearables" },
      { page_num: PAGES.MISCELLANEOUS, img: sprite[SPRITE.INV_LOCK][1], category_name: "Misc" },
      { page_num: PAGES.CRAFTING_ITEMS, img: sprite[SPRITE.INV_PAPER][1], category_name: "Crafting Items" },
    ]);
    
    var bknd_canv = tmp[0];
    var bknd_ctx = tmp[1];
    var buttons = tmp[2];
    
    return [ CTI(bknd_canv), buttons ];
  }
  
  function get_amount_as_img(amount) {
    if(!sprite[SPRITE[SPRITE_COUNTER_VAR_NAME]][amount]) {
      sprite[SPRITE[SPRITE_COUNTER_VAR_NAME]][amount] = create_text(scale, "x" + amount, 20, "#FFF");
    }
    return sprite[SPRITE[SPRITE_COUNTER_VAR_NAME]][amount];
  }
  
  SPRITE["AUTO_BOOK"] = find_unique_index();
  sprite[SPRITE.AUTO_BOOK] = create_text(1, "Auto-Book", 25, "#FFF", void 0, void 0, "#000", 5, 140);

  SPRITE["EXT_HELP"] = find_unique_index();
  sprite[SPRITE.EXT_HELP] = CTI(create_help());
  
  SPRITE["EXT_AUTO_DRINK"] = find_unique_index();
  sprite[SPRITE.EXT_AUTO_DRINK] = create_text(1, "Auto-Drink", 25, "#FFF", void 0, void 0, "#000", 5, 140);
  
  SPRITE["ARROW_NEXT"] = find_unique_index();
  sprite[SPRITE.ARROW_NEXT] = [ CTI(create_arrow_next('#c3c3c3')), CTI(create_arrow_next('#d3d3d3')), CTI(create_arrow_next('#FFF')) ];
  
  SPRITE["ARROW_BACK"] = find_unique_index();
  sprite[SPRITE.ARROW_BACK] = [ CTI(create_arrow_back('#c3c3c3')), CTI(create_arrow_back('#d3d3d3')), CTI(create_arrow_back('#FFF')) ];

  user.ext_help = { 
    enabled: false,
    translate: {
      x: 0,
      y: 0
    }
  }
  
  user.auto_book = {
    enabled: false,
    translate: { 
      x: 0, 
      y: 0
    },
    equip_book: function() {
      if(this.enabled) {
        if(user.inv.n[INV.BOOK]) {
          var thePlayer = world[WORLD_FAST_UNITS_ARR_NAME][user[USER_UID_VAR_NAME]];
          if(thePlayer.right != INV.BOOK) {
            client[CLIENT_SELECT_INV_FN_NAME](INV.BOOK, user.inv.find_item(INV.BOOK));
          }
        }
      }
    }
  }

  var oldGameUpdate = game.update;
  game.update = function() {
    oldGameUpdate.apply(this);
    user.auto_book.translate.x = game.leaderboard.translate.x - sprite[SPRITE.AUTO_BOOK].width - 10;
    user.auto_book.translate.y = user.show_spectators.translate.y + sprite[SPRITE.SHOW_SPECTATORS].height + 5;
    user.ext_fast_delete.translate.x = game.leaderboard.translate.x - sprite[SPRITE.EXT_FAST_DELETE].width - 10;
    user.ext_fast_delete.translate.y = user.auto_book.translate.y + sprite[SPRITE.AUTO_BOOK].height + 5;
    user.ext_auto_drink.translate.x = game.leaderboard.translate.x - sprite[SPRITE.EXT_AUTO_DRINK].width - 10;
    user.ext_auto_drink.translate.y = user.ext_fast_delete.translate.y + sprite[SPRITE.EXT_AUTO_DRINK].height + 5;
    user.ext_help.translate.x = can.width / 2 - sprite[SPRITE.EXT_HELP].width / 2;
    user.ext_help.translate.y = can.height / 2 - sprite[SPRITE.EXT_HELP].height / 2;
    
    user.ext_clock.translate.x = can.width - user.ext_clock.radius * 2 - 10;
    user.ext_clock.translate.y = game.leaderboard.translate.y + game.leaderboard.img.height + 10;
  };

  function draw_ext_help() {
    if(user.ext_help.enabled) {
      ctx.drawImage(sprite[SPRITE.EXT_HELP], user.ext_help.translate.x, user.ext_help.translate.y);
    }
  }
  
  function draw_ext_auto_book() {
    if(user.auto_book.enabled) {
      ctx.drawImage(sprite[SPRITE.AUTO_BOOK], user.auto_book.translate.x, user.auto_book.translate.y);
    }
  }

  var oldGameDrawUI = game[GAME_DRAW_UI_FN_NAME];
  game[GAME_DRAW_UI_FN_NAME] = function() {
    oldGameDrawUI.apply(this, arguments);
    draw_ext_auto_book();
    draw_ext_fast_delete();
    draw_ext_auto_drink();
    draw_ext_help();
    draw_ext_clock();
  };

  var my_trigger_key_up = function(c) {
    var keycode = c.keyCode;
    if(user.keycodes_to_mapped_keycodes[keycode])
      keycode = user.keycodes_to_mapped_keycodes[keycode];
    
    if (!user.chat.open)  {
      if(keycode == 84) {
        user.auto_book.enabled = !user.auto_book.enabled;
      }else if(keycode == 72) {
        user.ext_help.enabled = !user.ext_help.enabled;  
      }else if(keycode == 67) {
        user.ext_clock.enabled = !user.ext_clock.enabled;
      }
    }
  };
  
  user.craft.do_craft = function(recipeID) {
    var recipe = RECIPES[recipeID];
    this.id = recipeID;
    this.crafting = true;
    if((user.auto_book.enabled && user.inv.n[INV.BOOK]) || world[WORLD_FAST_UNITS_ARR_NAME][user[USER_UID_VAR_NAME]].right == INV.BOOK) {
      this.timeout.max_speed = recipe.time * 3;
    }else {
      this.timeout.max_speed = recipe.time;
    }
    this.id2 = recipe.id2;
    for (var counter = 0; counter < recipe.r.length; counter++) {
      var resource = recipe.r[counter];
      user.inv.decrease(resource[0], resource[1], user.inv.find_item(resource[0]));
    }
    game[UPDATE_INV_BUTTONS_FN_NAME]()
  };

  window.addEventListener("keyup", my_trigger_key_up, false);
  
  var oldSelectCraft = client[SELECT_CRAFT_FN_NAME];
  client[SELECT_CRAFT_FN_NAME] = function()
  {
    if(user.weapon.timeout.v != 0 && user.inv.n[INV.BOOK]) {
      var alertMsg = "You can't equip your book right now."
      user.alert.text ? user.alert.list.push(alertMsg) : user.alert.text = alertMsg;
      return;
    }
    
    if(user.ext_auto_drink > 0.02) // don't redo it if we literally checked last frame
      user.ext_auto_drink.delay = 5; // this ensures it will try to check
    user.ext_auto_drink.consider_drink(true); // this helps prevent us from accidentally dehydrating
    if(user.auto_feed > 0.02) // don't redo it if we literally checked last frame
      user.auto_feed.delay = 5; // this ensures it will try to check
    user.auto_feed.update();
    user.auto_book.equip_book();
    oldSelectCraft.apply(this, arguments);
  };
  
  // rearrange inventory
  function reset_inventory_indexes() {
    user.inventory_index_to_mapped_index = []
    for(var index = 0; index < 15; index++) {
      user.inventory_index_to_mapped_index[index] = index;
    }
  }
  
  reset_inventory_indexes();
  
  var __old_ui_play_game = ui[UI_PLAY_GAME_FUNCTION_NAME];
  ui[UI_PLAY_GAME_FUNCTION_NAME] = function() {
    reset_inventory_indexes();
    __old_ui_play_game.apply(this, arguments);
  };
  
  user.keycodes_to_mapped_keycodes = {} // contains things like: { 68: 96 }
  SPRITE["SLOT_NUMBERS_MAPPED"] = find_unique_index();
  sprite[SPRITE.SLOT_NUMBERS_MAPPED] = {};
  sprite[SPRITE.SLOT_NUMBERS_MAPPED][9] = create_text(1, '0', 12, "#FFF");
  sprite[SPRITE.SLOT_NUMBERS_MAPPED][10] = create_text(1, 'P', 12, "#FFF");
  
  user.load_keycode_mapping = function() {
    var keycode_mapping_cookie = Cookies.get("starveio_ext_keymap");
    if(keycode_mapping_cookie) {
      user.keycodes_to_mapped_keycodes = {};
      var tmp = keycode_mapping_cookie.split(",");
      for(var i = 0; i < tmp.length; i++) {
        var tmp_map = tmp[i].split("-");
        var mapped_from = parseInt(tmp_map[0])
        var mapped_to = parseInt(tmp_map[1]);
        user.keycodes_to_mapped_keycodes[mapped_from] = mapped_to;
        
        if(mapped_to >= '1'.charCodeAt(0) && mapped_to <= '9'.charCodeAt(0)) {
          var slot_index;
          if(mapped_to == 'P'.charCodeAt(0))
            slot_index = 10;
          else if(mapped_to == '0'.charCodeAt(0))
            slot_index = 9;
          else
            slot_index = mapped_to - '1'.charCodeAt(0);
          var mapped_from_char = String.fromCharCode(mapped_from);
          sprite[SPRITE.SLOT_NUMBERS_MAPPED][slot_index] = create_text(1, mapped_from_char, 12, "#FFF");
        }
      }
    }
  }
  
  user.save_keycode_mapping = function() {
    var res = "";
    var first = true;
    for(var key in user.keycodes_to_mapped_keycodes) {
      if(!first)
        res += ",";
      else
        first = false;
      
      var tmp = user.keycodes_to_mapped_keycodes[key];
      res += key.toString() + "-" + tmp.toString();
    }
    
    Cookies.set("starveio_ext_keymap", res);
  }
  
  user.load_keycode_mapping();
  
  function better_draw_amount(amount, loc, pushed) {
    var amount_as_img = get_amount_as_img(amount)
    var x = loc.x + 70 - amount_as_img.width - 5 * scale;
    var y = loc.y + 75 - amount_as_img.height - 5 * scale;
    
    if(pushed) {
      y += 5 * scale;
    }
    
    ctx.drawImage(amount_as_img, x, y);
  }
  
  function better_draw_slot(slot_index, loc, pushed) {
    var img;
    if(sprite[SPRITE.SLOT_NUMBERS_MAPPED][slot_index]) {
      img = sprite[SPRITE.SLOT_NUMBERS_MAPPED][slot_index];
    }else {
      img = sprite[SPRITE.SLOT_NUMBER][slot_index];
    }
    
    
    var x = loc.x + 5 * scale;
    var y = loc.y + 5 * scale;
    if(pushed) {
      y += 5 * scale;
    }
    
    ctx.drawImage(img, x, y);
  }
  
  
  user.inv.hotbar_button_locations = []
  for(var tmp_counter = 0; tmp_counter < 13; tmp_counter++) {
    user.inv.hotbar_button_locations[tmp_counter] = { x: 0, y: 0 };
  }
  
  game[UPDATE_INV_BUTTONS_FN_NAME] = function() {
    var user_inventory = user.inv;
    var total_button_width = (10 + 70) * 13;
    var left_button_x = window.innerWidth / 2 - total_button_width / 2;
    for(var index = 0; index < user_inventory.max; index++) {
      if(!user_inventory.hotbar_button_locations[index])
        user_inventory.hotbar_button_locations[index] = { x: 0, y: 0 }
      
      // it uses images width/height per element, which makes no sense if the elements
      // are ever not the same height and requires we already have items in our inventory.
      // we just use the constant width/height of 70x75
      user_inventory.hotbar_button_locations[index].x = (10 + 70) * index + left_button_x + 10;
      user_inventory.hotbar_button_locations[index].y = can.height - 75 - 8;
    }
    
    // now we update the can_select based on what we just determined. However the little
    // "plus" buttons are indexed by the item that they are "plusing" which means we 
    // need to adjust based on our remapped items
    for(var index = 0; index < user_inventory.can_select.length; index++) {
      var true_index_of_this_index = -1; // for positioning the button
      for(var index2 = 0; index2 < user.inventory_index_to_mapped_index.length; index2++) {
        if(user.inventory_index_to_mapped_index[index2] == index) {
          true_index_of_this_index = index2;
          break;
        }
      }
      
      var cs_translate = user_inventory.can_select[index].info.translate;
      cs_translate.x = user_inventory.hotbar_button_locations[true_index_of_this_index].x;
      cs_translate.y = user_inventory.hotbar_button_locations[true_index_of_this_index].y;
      
      var pb_translate = this.plus_buttons[user_inventory.can_select[index].id].info.translate;
      var true_but_loc = user_inventory.hotbar_button_locations[true_index_of_this_index];
      
      pb_translate.x = true_but_loc.x + 18;
      pb_translate.y = true_but_loc.y - 35 - 6; // again 35 is height of plus button
    }
  }
  
  // force recalculate after building bag
  var oldClientBuildStop = client[CLIENT_BUILD_STOP_FN_NAME];
  client[CLIENT_BUILD_STOP_FN_NAME] = function(c) {
    oldClientBuildStop.apply(client, [ c ]);
    
    if(c == INV.BAG) {
      game[UPDATE_INV_BUTTONS_FN_NAME].apply(game, []);
    }
  }
  
  window[DRAW_UI_INVENTORY_FN_NAME] = function() {
    var user_inventory = user.inv;
    var user_fast_unit = world[WORLD_FAST_UNITS_ARR_NAME][user[USER_UID_VAR_NAME]];
    if(!user_fast_unit)
      return;
    
    var user_can_select = user_inventory.can_select;
    
    if(!user_can_select[0])
      return;
    
    for(var index = 0; index < user_inventory.max; index++) {
      var item_to_draw = user_can_select[user.inventory_index_to_mapped_index[index]];
      var loc = user_inventory.hotbar_button_locations[index];
      
      if(!item_to_draw) {
        // draw the empty slot
        var empty_slot_img = sprite[SPRITE.EMPTY_SLOT][2];
        ctx.drawImage(empty_slot_img, loc.x, loc.y);
        continue;
      }
      
      var equipped_or_selected = false;
      if(user.right == item_to_draw.id || (user.clothe == item_to_draw.id && user.clothe > 0)) {
        equipped_or_selected = true;
        ctx.drawImage(item_to_draw.info.img[2], loc.x, loc.y);
      }else {
        ctx.drawImage(item_to_draw.info.img[item_to_draw.info.state], loc.x, loc.y);
      }
      
      var amount_of_item = user_inventory.n[item_to_draw.id];
      if(amount_of_item > 1) {
        better_draw_amount(amount_of_item, loc, equipped_or_selected);
      }
      
      if(amount_of_item > 0) {
        better_draw_slot(index, loc, equipped_or_selected);
      }
      
      var user_chest = user.chest;
      if(user_chest.open && (user_chest.id < 0 || user_chest.id == item_to_draw.id) && !(user_chest.lock && user_chest.pid != user.id)) {
        game.plus_buttons[item_to_draw.id].draw(ctx);
      }
      
      var user_furnace = user.furnace;
      if(user_furnace.open && item_to_draw.id == INV.WOOD) {
        game.plus_buttons[item_to_draw.id].draw(ctx);
      }
      
      var user_windmill = user.windmill;
      if(user_windmill.open && item_to_draw.id == INV.WILD_WHEAT) {
        game.plus_buttons[item_to_draw.id].draw(ctx);
      }
    }
  };
  
  var __old_inv_delete_item_fn = user[USER_INV_VAR_NAME][USER_INV_DELETE_ITEM_FN_NAME];
  user[USER_INV_VAR_NAME][USER_INV_DELETE_ITEM_FN_NAME] = function(itemType, index) {
    var firstEmptySlot = user.inv.can_select.length - 1;
    var emptySlotCounter = firstEmptySlot;
    for(var visualIndex = 0; visualIndex < user.inventory_index_to_mapped_index.length; visualIndex++) {
      var actualIndex = user.inventory_index_to_mapped_index[visualIndex];
      
      if(actualIndex == index) {
        user.inventory_index_to_mapped_index[visualIndex] = emptySlotCounter;
        emptySlotCounter += 1;
      }else if(actualIndex > index) {
        if(actualIndex <= firstEmptySlot) {
          user.inventory_index_to_mapped_index[visualIndex] = actualIndex - 1;
        }else {
          user.inventory_index_to_mapped_index[visualIndex] = emptySlotCounter;
          emptySlotCounter += 1;
        }
      }
    }
    
    __old_inv_delete_item_fn.apply(this, [ itemType, index ]);
  };
  
  // returns the visible index (1-indexed) of given by the specified user input or NaN
  function parse_inventory_index_from_string(str) 
  {
    if(str == 'P') {
      return 11;
    }else if(str == '0') {
      return 10;
    }
    
    return parseInt(str);
  }
  
  function ext_try_command(spl_by_spaces) {
    if(spl_by_spaces[0] == "-swap") {
      if(spl_by_spaces.length != 3)
        return false;
      
      
      var num1 = parse_inventory_index_from_string(spl_by_spaces[1]);
      var num2 = parse_inventory_index_from_string(spl_by_spaces[2]);
      if(isNaN(num1) || isNaN(num2)) {
        return false;
      }
      
      if(num1 < 1 || num2 < 1 || num1 > user.inv.max || num2 > user.inv.max)
        return false;
      
      var num1_mapped = user.inventory_index_to_mapped_index[num1 - 1]
      var num2_mapped = user.inventory_index_to_mapped_index[num2 - 1]
      
      user.inventory_index_to_mapped_index[num1 - 1] = num2_mapped;
      user.inventory_index_to_mapped_index[num2 - 1] = num1_mapped;
      game[UPDATE_INV_BUTTONS_FN_NAME]();
      return true;
    }else if(spl_by_spaces[0] == "-remap") 
    {
      if(spl_by_spaces.length != 3)
        return false;
      
      var let1 = spl_by_spaces[1].toUpperCase();
      var let2 = spl_by_spaces[2].toUpperCase();
      
      var mapped_from = let1.toUpperCase().charCodeAt(0);
      var mapped_to = let2.toUpperCase().charCodeAt(0);
      
      var let1_asnum = parseInt(let1);
      var let2_asnum = parseInt(let2);
      
      if((let2_asnum >= 0 && let2_asnum <= 13) || mapped_to == 'P'.charCodeAt(0)) {
        var slot_index;
        if(mapped_to == 'P'.charCodeAt(0))
          slot_index = 10;
        else if(mapped_to == '0'.charCodeAt(0))
          slot_index = 9;
        else
          slot_index = let2_asnum - 1;
        
        var mapped_from_char = String.fromCharCode(mapped_from);
        sprite[SPRITE.SLOT_NUMBERS_MAPPED][slot_index] = create_text(1, mapped_from_char, 12, "#FFF");
        user.keycodes_to_mapped_keycodes[mapped_from] = "slot_" + slot_index;
        user.save_keycode_mapping();
        return true;
      }
      
      if(mapped_to == keyboard.LEFT) {
        keyboard.LEFT = mapped_from;
        return true;
      }else if(mapped_to == keyboard.RIGHT) {
        keyboard.RIGHT = mapped_from;
        return true;
      }else if(mapped_to == keyboard.TOP) {
        keyboard.TOP = mapped_from;
        return true;
      }else if(mapped_to == keyboard.BOTTOM) {
        keyboard.BOTTOM = mapped_from;
        return true;
      }
      
      user.keycodes_to_mapped_keycodes[mapped_from] = mapped_to;
      user.save_keycode_mapping();
      return true;
    }else if(spl_by_spaces[0] == "-unmapall") {
      if(spl_by_spaces.length != 1)
        return false;
      
      sprite[SPRITE.SLOT_NUMBERS_MAPPED] = {}
      user.keycodes_to_mapped_keycodes = {}
      user.save_keycode_mapping();
      return true;
    }
    
    return false;
  }
  
  window.removeEventListener("keyup", game[GAME_TRIGGER_KEYUP_FN_NAME], false)
  function new_game_trigger_keyup(c) {
    var keycode = c.keyCode;
    if(user.keycodes_to_mapped_keycodes[keycode])
      keycode = user.keycodes_to_mapped_keycodes[keycode];
    
    
    if (user.chat.open && keycode == 27) {
      user.chat.quit();
    }else if(keycode == 13) {
      var txt = user.chat.input.value;
      var spl = txt.split(" ");
      if(!ext_try_command(spl))
        user.chat.run();
      else
        user.chat.quit();
    }else if(!user.chat.open) {
      if(keycode === 82) {
        user.auto_feed.enabled = !user.auto_feed.enabled;
      }else if(80 === keycode && world.mode === WORLD.MODE_HUNGER_GAMES && !user.spectator)
      {
        user.show_spectators.enabled = !user.show_spectators.enabled;
      }else if(keycode == 'L'.charCodeAt(0)) {
        user.ext_fast_delete.enabled = !user.ext_fast_delete.enabled; 
      }else if(keycode == 'K'.charCodeAt(0)) {
        user.ext_auto_drink.enabled = !user.ext_auto_drink.enabled;
      }else 
      {
        var is_slot_index = typeof(keycode) === 'string' && keycode.startsWith('slot_');
        
        var is_slot_index_alt = keycode >= '0'.charCodeAt(0) && keycode <= '9'.charCodeAt(0) || keycode == 'P';
        
        if(is_slot_index) {
          if(user.craft.id < 0) {
            var slot_index_str = keycode.substr(5);
            var slot_index = parseInt(slot_index_str);
            
            var inv_index = user.inventory_index_to_mapped_index[slot_index];
            var item = user.inv.can_select[inv_index];
            if(item)
              client[CLIENT_SELECT_INV_FN_NAME](item.id, inv_index);
          }
        }else if(is_slot_index_alt) {
          if(user.craft.id < 0) {
            var slot_index = -1;
            if(keycode == '0'.charCodeAt(0))
              slot_index = 9;
            else if(keycode == 'P'.charCodeAt(0))
              slot_index = 10;
            else
              slot_index = keycode - '1'.charCodeAt(0);
            
            var inv_index = user.inventory_index_to_mapped_index[slot_index];
            var item = user.inv.can_select[inv_index];
            if(item)
              client[CLIENT_SELECT_INV_FN_NAME](item.id, inv_index);
          }
        }else if(keycode == 89)
          user.bigmap = !user.bigmap;
          
      }
    }
    keyboard.up(c);
  }
  window.addEventListener("keyup", new_game_trigger_keyup, false);
  
  
  // this is a direct copy+paste of lines 24092-24106, except replacing this with game and commenting the one referencing keyup.  This way i dont have to deobfuscate as much
  game[_0x88d0("0x6f6")] = function() {
        window[_0x88d0("0x6d7")](_0x88d0("0x701"), game[_0x88d0("0x6fc")], !1);
        window[_0x88d0("0x6d7")]("mouseup", game[_0x88d0("0x6fe")], !1);
        window[_0x88d0("0x6d7")](_0x88d0("0x702"), game[_0x88d0("0x6ff")], !1);
        //window[_0x88d0("0x6d7")](_0x88d0("0x6d8"), this[_0x88d0("0x76d")], !1);
        window[_0x88d0("0x6d7")](_0x88d0("0x778"), game[_0x88d0("0x779")], !1)
    }
    ;
    game[_0x88d0("0x6f7")] = function() {
        window[_0x88d0("0x703")]("mousedown", game[_0x88d0("0x6fc")], !1);
        window[_0x88d0("0x703")](_0x88d0("0x6e2"), game[_0x88d0("0x6fe")], !1);
        window[_0x88d0("0x703")](_0x88d0("0x702"), game.Lapa13663Mauve, !1);
        //window.removeEventListener(_0x88d0("0x6d8"), this[_0x88d0("0x76d")], !1);
        window.removeEventListener("keydown", game[_0x88d0("0x779")], !1)
    }
  
  // alert on delete inventory
  SPRITE["EXT_FAST_DELETE"] = find_unique_index();
  sprite[SPRITE.EXT_FAST_DELETE] = create_text(1, "Fast-Delete", 25, "#FFF", void 0, void 0, "#000", 5, 140);

  user.ext_fast_delete = { enabled: false, translate: { x: 0, y: 0 } };
  
  function draw_ext_fast_delete() {
    if(user.ext_fast_delete.enabled) {
      ctx.drawImage(sprite[SPRITE.EXT_FAST_DELETE], user.ext_fast_delete.translate.x, user.ext_fast_delete.translate.y);
    }
  }
  
  var actual_delete_inv = client[CLIENT_DELETE_INV_FN_NAME];
  client[CLIENT_DELETE_INV_FN_NAME] = function(c, f) {
    if(user.ext_fast_delete.enabled) {
      actual_delete_inv.apply(client, [c, f])
      return;
    }
    
    // we use setTimeout to ensure the context menu isn't brought up 
    setTimeout(function() {
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this item!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: true
      },
      function(){
        actual_delete_inv.apply(client, [ c, f ]);
      });
    }, 5);
  };
  
  // clock
  user.ext_clock = {
    enabled: true,
    translate: { x: 0, y: 0 },
    last_time: -1,
    last_transition_time: -1,
    extrapolated_transition_time: -1,
    radius: 50,
    time_per_half_day_ms: 1000 * 60 * 4
  }
  
  function init_clock() {
    var img = new Image();
    img.onload = function() {
      var clock_index = find_unique_index();
      SPRITE["EXT_CLOCK"] = clock_index;
      sprite[SPRITE.EXT_CLOCK] = img;
    }
    img.src = 'http://www.clker.com/cliparts/Y/F/q/S/J/O/dabnite-th.png';
    
    var canv = document.createElement("canvas");
    var ctx = canv.getContext("2d");
    
    canv.width = 8;
    canv.height = 8;
    ctx.fillStyle = "#FFF";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(4, 4, 3, 3, 0, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();
    
    var img2 = new Image();
    img2.onload = function() {
      var my_index = find_unique_index();
      SPRITE["EXT_CLOCK_MARKER"] = my_index;
      sprite[SPRITE.EXT_CLOCK_MARKER] = img2;
    }
    img2.src = canv.toDataURL("image/png");
  }
  
  init_clock();
  
  var old_get_time = client[CLIENT_GET_TIME_FN_NAME];
  client[CLIENT_GET_TIME_FN_NAME] = function(c) {
    if(c != world.time) {
      var now = new Date().getTime();
      user.ext_clock.last_time = c;
      user.ext_clock.last_transition_time = now;
      user.ext_clock.extrapolated_transition_time = now + user.ext_clock.time_per_half_day_ms;
    }
    
    old_get_time.apply(this, [ c ]);
  };
  
  function draw_ext_clock() {
    if(!("EXT_CLOCK" in SPRITE))
      return; // clock not yet loaded
    if(!("EXT_CLOCK_MARKER" in SPRITE))
      return; // clock marker not yet loaded
    if(!user.ext_clock.enabled)
      return;
    if(user.ext_clock.extrapolated_transition_time < 0)
      return;
    
    var now = new Date().getTime();
    var time_since_transition = now - user.ext_clock.last_transition_time;
    var perc_progress_to_next;
    if(time_since_transition >= user.ext_clock.time_per_half_day_ms) {
      perc_progress_to_next = 1;
    }else {
      perc_progress_to_next = time_since_transition / user.ext_clock.time_per_half_day_ms;
    }
    
    var x = 0;
    var y = 0;
    if(user.ext_clock.last_time == SPRITE.DAY) {
      if(perc_progress_to_next < 0.5) {
        var ang = perc_progress_to_next * Math.PI;
        x = -Math.cos(ang);
        y = -Math.sin(ang);
      }else {
        var ang = (1.0 - perc_progress_to_next) * Math.PI;
        x = Math.cos(ang);
        y = -Math.sin(ang);
      }
    }else {
      if(perc_progress_to_next < 0.5) {
        var ang = perc_progress_to_next * Math.PI;
        x = Math.cos(ang);
        y = Math.sin(ang);
      }else {
        var ang = (1.0 - perc_progress_to_next) * Math.PI;
        x = -Math.cos(ang);
        y = Math.sin(ang);
      }
    }
    
    x = user.ext_clock.radius + x * user.ext_clock.radius - 4;
    y = user.ext_clock.radius + y * user.ext_clock.radius - 4;
    
    ctx.drawImage(sprite[SPRITE.EXT_CLOCK], user.ext_clock.translate.x, user.ext_clock.translate.y);
    ctx.drawImage(sprite[SPRITE.EXT_CLOCK_MARKER], user.ext_clock.translate.x + x, user.ext_clock.translate.y + y);
  }
  
  // AUTO-DRINK
  user.ext_auto_drink = {
    enabled: false,
    translate: {
      x: 0,
      y: 0
    },
    delay: 0,
    consider_drink: function(trying_to_craft_or_nil) {
      if(this.enabled && user.craft.id < 0) {
        if(this.delay < 10)
          this.delay += window[CURRENT_FRAME_RATE_VAR_NAME]
        var current_water = user.gauges[USER_GAUGES_WATER_METER_VAR_NAME];
        
        var max_water_to_drink = 0.05;
        if(trying_to_craft_or_nil)
          max_water_to_drink = 0.2;
        if(this.delay > 2 && current_water < max_water_to_drink) {
          if(user.inv.n[INV.BOTTLE_FULL]) {
            client[CLIENT_SELECT_INV_FN_NAME](INV.BOTTLE_FULL, user.inv.find_item(INV.BOTTLE_FULL));
          }
          this.delay = 0;
        }
      }
    }
  };
  function draw_ext_auto_drink() {
    if(user.ext_auto_drink.enabled) {
      ctx.drawImage(sprite[SPRITE.EXT_AUTO_DRINK], user.ext_auto_drink.translate.x, user.ext_auto_drink.translate.y);
    }
  }
  
  var old_game_update_scene = game[GAME_UPDATE_SCENE_FN_NAME];
  game[GAME_UPDATE_SCENE_FN_NAME] = function() {
    old_game_update_scene.apply(this, arguments);
    user.ext_auto_drink.consider_drink(false);
  }
}, 2000);