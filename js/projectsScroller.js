    

    
    var scrollableElement = document.getElementById('scrollableElement');
    scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);
    var targetList = ["#nr","#5j", "#ij", "#fps" , "#wd", "#rt", "#ra" , "#other", "#rand"];
    var selectorList = ["s1","s2", "s3", "s4" , "s5", "s6", "s7" , "s8", "s9"];
    //document.getElementById(selectorList[0]).className = "selected";

    console.log(window.location.hash);
    setSelected(document.getElementById(selectorList[targetList.indexOf(window.location.hash)]));

    var cur = 0;
    var loaded = false;

    function findScrollDirectionOtherBrowsers(event)
    {
        if(!loaded)
            return;
        
        var delta;
        cur = targetList.indexOf(window.location.hash);
        if (event.wheelDelta)
        {
            delta = event.wheelDelta;
        }
        else
        {
            delta = -1 * event.deltaY;
        }
  if (!$('html, body').is(':animated'))
   {
        if (delta < 0){
           // console.log("DOWN");

            if(cur < targetList.length-1)
            {
                cur++;
                ScrollToAnchor(targetList[cur]);
                selector = document.getElementById(selectorList[cur]);
                for (var i = selectorList.length - 1; i >= 0; i--) {
                    curSelector = document.getElementById(selectorList[i]);
                    curSelector.className = ""
                }
                selector.className = "selected"
            }
           // console.log(cur + " ??? " + (targetList.length-1));
        }
        else if (delta > 0)
        {
            if(cur > 0)
            {
                cur--;
                ScrollToAnchor(targetList[cur]);
                selector = document.getElementById(selectorList[cur]);
                for (var i = selectorList.length - 1; i >= 0; i--) {
                    curSelector = document.getElementById(selectorList[i]);
                    curSelector.className = ""
                }
                  selector.className = "selected"
            }
               // console.log("UP");
               // console.log(cur + " ??? " + targetList.length);
        }
    }

    }
 
                
    function setSelected(x)
    {
        for (var i = selectorList.length - 1; i >= 0; i--) 
          {
            curSelector = document.getElementById(selectorList[i]);
            curSelector.className = "";
          }
        x.className = "selected";
    }