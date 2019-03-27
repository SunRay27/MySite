    

    window.onscroll = function() {scrollFunction()};
    var scrollableElement = document.getElementById('scrollableElement');
    scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);
    var targetList = ["#aboutSection","#projectsSection"];
    var cur = 0;


    function findScrollDirectionOtherBrowsers(event)
    {
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
                cur= cur +1;
                ScrollToAnchor(targetList[cur]);
            }
           // console.log(cur + " ??? " + (targetList.length-1));
        }
        else if (delta > 0)
        {
            if(cur > 0)
            {
                cur= cur - 1;
                ScrollToAnchor(targetList[cur]);
            }
               // console.log("UP");
               // console.log(cur + " ??? " + targetList.length);
        }
    }

    }

    function myFunction() 
    {
        var x = document.getElementById("myTopnav");

        if (x.className === "topnav")
            x.className += " responsive";
        else 
            x.className = "topnav";
        
    }

    function myFunction2(x)
    {
        x.classList.toggle("change");          
    }
                

    function scrollFunction() 
    {
        var x = document.getElementById("myTopnav");
     
        if (document.body.scrollTop >  100 || document.documentElement.scrollTop > 100 || x.className === "topnav responsive") 
            x.style.top = 0;
        else 
            x.style.top = "-70px";
     
    }