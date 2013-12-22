var App = {
    'Elements': {},
    'Nodes' : {}
};

App['Application'] = function(){
    var components = {};
    // Init components
    components['HeaderMenu'] = new App.HeaderMenu();
};


App['HeaderMenu'] = function(o){
    var that = this,
        config = cm.merge({
            'nodes' : {
                'button' : cm.getByAttr('data-app-headermenu', 'button')[0] || cm.Node('div'),
                'container' : document.body
            }
        }, o);

    var init = function(){
        cm.addEvent(config['nodes']['button'], 'click', toggle);
    };

    var toggle = function(){
        var isHide = cm.hasClass(config['nodes']['container'], 'menu-close');
        if(isHide){
            cm.replaceClass(config['nodes']['container'], 'menu-close', 'menu-open');
        }else{
            cm.replaceClass(config['nodes']['container'], 'menu-open', 'menu-close');
        }
    };

    var bodyEvent = function(e){
        e = cm.getEvent(e);
        var target = cm.getEventTarget(e);
        if(!cm.isParent(config['nodes']['container'], target, true) && !cm.isParent(config['nodes']['button'], target, true)){
            hide();
        }
    };

    var hide = function(){
        config['nodes']['container'].style.display = '';
        cm.removeEvent(document, 'mousedown', bodyEvent);
    };

    /* Main */

    init();
};