// IIFE. All functions are contained.
function initTimelinePlugins(){

    // remarks
    var remarks;

    // use plugins to add another requirements if needed
    plugins ={
        // correct remarks from elements.
        getremarks: {
            func: function getremarks (plugins){
                remarks = $('ul.timeline').find('li');
            }
        },
        // scroll to show all remarks automatically
        autoscroll: {
            func: function autoscroll (plugins){

                var remarksPos = [];
                // initially top height
                remarksPos.push(0);
                // push all remarks height
                $.each(remarks,function(){
                    // consider header height
                    remarksPos.push(this.offsetTop + $('header').outerHeight(true));
                });

                // scroll every three sec. go to top if final remarks is shown
                // everytime the target tweet is placed on center
                var i = 0;
                var scrollRemarks = function(){
                    if(remarksPos.length < i){
                        i = 0;
                    }else{
                        i++;
                    }
                    $('body, html').animate({scrollTop:remarksPos[i]},'slow');
                }
                setInterval(scrollRemarks,3000);
            }
        }
    }  

    return [
        plugins.getremarks,
        plugins.autoscroll
    ];
}

(function(){
    // using jquery. note: we are waiting for loading. ".load" is for chrome only so that can get the offset.
    $(window).load(function(){
  
        // all functions
        var timelinePlugins;
        timelinePlugins = initTimelinePlugins();

        // functions are loaded when the page is loaded
        timelinePlugins.forEach(function(plugin){
            plugin.func.call(function(){}, plugin);
        });
    })
})()
