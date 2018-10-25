$(document).ready(function() {

    $('.carousel').carousel('pause');
    //Slide Carousel
    $(".header .carousel").carousel({
        interval: 4500
    });

    //Scroll When click button
    var headerHeight = $('header').innerHeight();
    $('.fa').on('click',function() {
        $('html').animate({scrollTop:headerHeight});
    });

    //Display Navigation
    $(window).scroll(function() {
        if($('html').scrollTop() >= headerHeight) {
            $('nav').css('display','block');
        } else {
            $('nav').css('display','none');
        }

        //show Social links
        var footerHight = $('footer').innerHeight();
        var sectionContactHeight = $('.section-contact').innerHeight();
        var htmlHight = $('html').innerHeight();
       
        if($('html').scrollTop() > (htmlHight - (footerHight + sectionContactHeight))) {
            $('.section-social').css('transform','translateX(0)');

            } else {
                $('.section-social').css('transform','translateX(-100%)');                
            
            }
    });

    $('.section-map .carousel').carousel({
        interval: 3000
    },function() {
        $('.section-map .carousel-item.active').css('backface-visibility','hidden');
    });

    var dotsArr = [ //Array Images
        [ //first Image dots
            
            {'name':'.dots-A .dot-1','heading':'Upload Images','body':'Sharing markdown file with images shouldn\'t be painful. Images can be uploaded to cloud server on macOS with integration of iPic Service.'},
            {'name':'.dots-A .dot-2','heading':'Support Relative Path','body':'Sharing markdown file with images shouldn\'t be painful. Images can be uploaded to cloud server on macOS with integration of iPic Service.'},
            {'name':'.dots-A .dot-3','heading':'Drag & Drop','body':'Sharing markdown file with images shouldn\'t be painful. Images can be uploaded to cloud server on macOS with integration of iPic Service.'},
            {'name':'.dots-A .dot-4','heading':'Resize Images','body':'Sharing markdown file with images shouldn\'t be painful. Images can be uploaded to cloud server on macOS with integration of iPic Service.'}
        ],
        [ 
            {'name':'.dots-B .dot-1','heading':'Customized Styles','body':'Use your own css code to change font size, alignement, or even make some magics possible, such as '},
            {'name':'.dots-B .dot-2','heading':'Table of Contents','body':'Type `[TOC]` to insert table of contents, all headings will be listed here.'},
            {'name':'.dots-B .dot-3','heading':'Internal Links','body':'Set the href to headers, which will create a bookmark that allow you to jump to that section after clicking. '}
        ],
        [
            {'name':'.dots-C .dot-1','heading':'Change List Type','body':'Use shortcut keys, context menu or touch bar to change list type from one to another.'},
            {'name':'.dots-C .dot-2','heading':'Indent/Outdent','body':'Arrange nested lists like a rich editor, by tab and shift+tab key.'},
            {'name':'.dots-C .dot-3','heading':'Tasks','body':'GFM task list supported. Able to manage simple todos in a markdown file.'}
        ],
        [
            {'name':'.dots-D .dot-1','heading':'Easy Resize','body':'Quickest steps to resize tables in Markdown file: just mouse dragging.'},
            {'name':'.dots-D .dot-2','heading':'Quick Reorder','body':''},
            {'name':'.dots-D .dot-3','heading':'Insert Tables','body':'Use shortcut keys to generate tables with given layouts. Type markdown directly is also supported.'}
        ],
        [
            {'name':'.dots-E .dot-1','heading':'Line Numbers','body':'Display line numbers can be turned on in prefrence panel.'},
            {'name':'.dots-E .dot-2','heading':'Syntax Highlight','body':'Typora supports around 100 languages for syntax highlighting, covers all common programming languages.'}
        ],
        [
            {'name':'.dots-F .dot-1','heading':'Live Preview','body':'Preview while you are typing.'},
            {'name':'.dots-F .dot-2','heading':'Chemical Equation','body':'Most MathJax extensions built-in, including '},
            {'name':'.dots-F .dot-3','heading':'Auto Numbering','body':'Auto numbering math equations (enable in preference panel).'}
        ],
        [         
            {'name':'.dots-G .dot-1','heading':'Flowchart','body':'Draws simple SVG flow chart diagrams powered by '},
            {'name':'.dots-G .dot-2','heading':'Mermaid','body':'Generation of flowchart, sequence, gantt and more by mermaid engine.'},
            {'name':'.dots-G .dot-3','heading':'Sequence','body':'Draws simple SVG sequence diagrams.'},
            {'name':'.dots-G .dot-4','heading':'Error Hint','body':'Show Error hint on live.'}
        ],
        [
            {'name':'.dots-H .dot-1','heading':'Emoji','body':'Input the emoji you want via auto-complete.'},
            {'name':'.dots-H .dot-2','heading':'Shortcut Keys','body':'Use shortcut keys one familar with.'},
            {'name':'.dots-H .dot-3','heading':'CJK Support','body':'All styles incldue Strong and emphasis can be correctly rendered in CJK charsets.'},
            {'name':'.dots-H .dot-4','heading':'Links','body':'Set your the link targets towards a header, a markdown file, or an URL.'}
        ],
        [      
            {'name':'.dots-I .dot-1','heading':'Blockquote','body':'Uses email-style > characters for blockquoting.'},
            {'name':'.dots-I .dot-2','heading':'Front Matter','body':'Compatible with files contain YAML Front Matter'},
            {'name':'.dots-I .dot-4','heading':'Footnote','body':'Display footnotes you write on hover.'},
            {'name':'.dots-I .dot-3','heading':'Horizontal line','body':'Horizontal lines styled by CSS.'}
        ]
       
];
var i = 0,prevDot = [];
$.each(dotsArr,function(indexImage,dotSInnerArr) {
    $.each(dotSInnerArr,function(indexDot,dot) {

        //hover once on dot
        $(dot.name).hover(function() {
       
           prevDot.indexOf(dot.name) === -1 ? i=0:i++;
        
            if(i === 0) {

                $('.carousel').carousel('pause');
           
                var content = $(this).parent().parent()[0];

                if($(this).attr('class') === 'dot-A dot-1') {
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'<a href="https://support.typora.io/Images/#upload-images-to-cloud-server-macos-only" target="_blank"> <i class="fa fa-share-square-o" style="color:#888"></i></a></p></div>');
                    $('.map-content-'+indexDot).css('top','10rem');
                    $('.map-content-'+indexDot).css('left','10rem');
                
                    $(content).append('<hr class="arrow-hr hr-27" style="width:7.5rem;background-color:#888">');
                    $('.hr-27').css('top','10.7rem');
                    $('.hr-27').css('left','24rem');

                } else if($(this).attr('class') === 'dot-A dot-2') {
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'<a href="https://support.typora.io/Images/#display-images-in-relative-path" target="_blank"> <i class="fa fa-share-square-o" style="color:#888"></i></a></p></div>');
                    $('.map-content-'+indexDot).css('top','7rem');
                    $('.map-content-'+indexDot).css('right','8rem');
                
                    $(content).append('<hr class="arrow-hr hr-1" style="width:13rem;background-color:#888">');
                    $('.hr-1').css('top','7rem');
                    $('.hr-1').css('right','24rem');

                } else if($(this).attr('class') === 'dot-A dot-3') {
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'<a href="https://support.typora.io/Images/#drag--drop" target="_blank"> <i class="fa fa-share-square-o" style="color:#888"></i></a></p></div>');
                    $('.map-content-'+indexDot).css('top','27rem');
                    $('.map-content-'+indexDot).css('right','7rem');

                    $(content).append('<hr class="arrow-hr hr-2" style="width:10rem;background-color:#888">');
                    $('.hr-2').css('top','27.6rem');
                    $('.hr-2').css('right','24rem');

                } else if($(this).attr('class') === 'dot-A dot-4') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'<a href="https://support.typora.io/Resize-Image/" target="_blank"> <i class="fa fa-share-square-o" style="color:#888"></i></a></p></div>');
                    $('.map-content-'+indexDot).css('top','31rem');
                    $('.map-content-'+indexDot).css('left','10rem');

                    $(content).append('<hr class="arrow-hr hr-28" style="width:18rem;background-color:#888">');
                    $('.hr-28').css('top','31.7rem');
                    $('.hr-28').css('left','24rem');

                } else if($(this).attr('class') === 'dot-B dot-1') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'<a href="https://support.typora.io/Auto-Numbering/" style="color:#888;text-decoration:underline" target="_blank">Auto Numbering Headers</a>.</p></div>');
                    $('.map-content-'+indexDot).css('top','17rem');
                    $('.map-content-'+indexDot).css('left','7rem');

                    $(content).append('<hr class="arrow-hr hr-3" style="width:9rem;background-color:#888">');
                    $('.hr-3').css('top','17rem');
                    $('.hr-3').css('left','22rem');

                } else if($(this).attr('class') === 'dot-B dot-2') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','6rem');
                    $('.map-content-'+indexDot).css('right','8rem');

                    $(content).append('<hr class="arrow-hr hr-4" style="width:13rem;background-color:#888">');
                    $('.hr-4').css('top','7rem');
                    $('.hr-4').css('right','24rem');

                } else if($(this).attr('class') === 'dot-B dot-3') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><img src="../images/anchor-link.png" alt="anchor image" style="width:100%"><p class="map-content-text">'+dot.body+'<a href="https://support.typora.io/Markdown-Reference/#internal-links" target="_blank"> <i class="fa fa-share-square-o" style="color:#888"></i></a></p></div>');
                    $('.map-content-'+indexDot).css('top','27rem');
                    $('.map-content-'+indexDot).css('right','8rem');

                    $(content).append('<hr class="arrow-hr hr-5" style="width:17rem;background-color:#888">');
                    $('.hr-5').css('top','27rem');
                    $('.hr-5').css('right','24rem');

                } else if($(this).attr('class') === 'dot-C dot-1') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><img src="../images/list-touchbar.png" alt="anchor image" style="width:100%"><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','6rem');
                    $('.map-content-'+indexDot).css('right','8rem');

                    $(content).append('<hr class="arrow-hr hr-6" style="width:20rem;background-color:#888">');
                    $('.hr-6').css('top','7rem');
                    $('.hr-6').css('right','24rem');

                } else if($(this).attr('class') === 'dot-C dot-2') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','20.5rem');
                    $('.map-content-'+indexDot).css('left','10rem');

                    $(content).append('<hr class="arrow-hr hr-29" style="width:9rem;background-color:#888">');
                    $('.hr-29').css('top','21.6rem');
                    $('.hr-29').css('left','24rem');

                } else if($(this).attr('class') === 'dot-C dot-3') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','29.5rem');
                    $('.map-content-'+indexDot).css('left','10rem');

                    $(content).append('<hr class="arrow-hr hr-30" style="width:8rem;background-color:#888">');
                    $('.hr-30').css('top','30.1rem');
                    $('.hr-30').css('left','24rem');

                } else if($(this).attr('class') === 'dot-D dot-1') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><video src="../images/resize-table.webm" style="width:100%" muted loop autoplay></video><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','8rem');
                    $('.map-content-'+indexDot).css('left','10rem');

                    $(content).append('<hr class="arrow-hr hr-21" style="width:8rem;background-color:#888">');
                    $('.hr-21').css('top','8.5rem');
                    $('.hr-21').css('left','23rem');

                } else if($(this).attr('class') === 'dot-D dot-2') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><video src="../images/reorder-table.webm" style="width:100%" muted loop autoplay></video><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','11rem');
                    $('.map-content-'+indexDot).css('right','8rem');

                    $(content).append('<hr class="arrow-hr hr-7" style="width:15rem;background-color:#888">');
                    $('.hr-7').css('top','13.5rem');
                    $('.hr-7').css('right','24rem');

                }
                else if($(this).attr('class') === 'dot-D dot-3') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><video src="../images/insert-table.webm" style="width:100%" muted loop autoplay></video><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','26.7rem');
                    $('.map-content-'+indexDot).css('right','8rem');

                    $(content).append('<hr class="arrow-hr hr-8" style="width:15rem;background-color:#888">');
                    $('.hr-8').css('top','26.7rem');
                    $('.hr-8').css('right','24rem');

                } else if($(this).attr('class') === 'dot-E dot-1') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><img src="../images/line-number1.png" style="width:100%"><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','9.6rem');
                    $('.map-content-'+indexDot).css('left','8rem');

                    $(content).append('<hr class="arrow-hr hr-9" style="width:10rem;background-color:#888">');
                    $('.hr-9').css('top','10rem');
                    $('.hr-9').css('left','22rem');

                }
                else if($(this).attr('class') === 'dot-E dot-2') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><video src="../images/syntax.webm" style="width:100%" muted loop autoplay></video><p class="map-content-text">'+dot.body+'<a href="https://support.typora.io/Code-Fences-Language-Support/" target="_blank"> <i class="fa fa-share-square-o" style="color:#888"></i></a></p></div>');
                    $('.map-content-'+indexDot).css('top','18.4rem');
                    $('.map-content-'+indexDot).css('right','8rem');

                    $(content).append('<hr class="arrow-hr hr-10" style="width:22.5rem;background-color:#888">');
                    $('.hr-10').css('top','19rem');
                    $('.hr-10').css('right','24rem');

                } else if($(this).attr('class') === 'dot-F dot-1') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><video src="../images/inline-math2.webm" style="width:100%" muted loop autoplay></video><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','9.4rem');
                    $('.map-content-'+indexDot).css('left','8rem');

                    $(content).append('<hr class="arrow-hr hr-11" style="width:19rem;background-color:#888">');
                    $('.hr-11').css('top','10rem');
                    $('.hr-11').css('left','21.5rem');

                } else if($(this).attr('class') === 'dot-F dot-2') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'<a href="http://docs.mathjax.org/en/latest/tex.html#mhchem" style="color:#888;text-decoration:underline" target="_blank">mhchem, </a><a href="http://docs.mathjax.org/en/latest/tex.html#amsmath-and-amssymbols" style="color:#888;text-decoration:underline" target="_blank">AMSmath, </a><a href="http://docs.mathjax.org/en/latest/tex.html#bbox" style="color:#888;text-decoration:underline" target="_blank">BBox</a>. etc.</p></div>');
                    $('.map-content-'+indexDot).css('top','13.1rem');
                    $('.map-content-'+indexDot).css('right','8rem');

                    $(content).append('<hr class="arrow-hr hr-12" style="width:20rem;background-color:#888">');
                    $('.hr-12').css('top','13.6rem');
                    $('.hr-12').css('right','24rem');

                }
                else if($(this).attr('class') === 'dot-F dot-3') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','29.6rem');
                    $('.map-content-'+indexDot).css('right','8rem');

                    $(content).append('<hr class="arrow-hr hr-13" style="width:10rem;background-color:#888">');
                    $('.hr-13').css('top','30rem');
                    $('.hr-13').css('right','24rem');

                } else if($(this).attr('class') === 'dot-G dot-1') {
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'<a href="http://flowchart.js.org/" style="color:#888;text-decoration:underline" target="_blank">flowchar.js</a>.</p></div>');
                    $('.map-content-'+indexDot).css('top','4.5rem');
                    $('.map-content-'+indexDot).css('left','10rem');

                    $(content).append('<hr class="arrow-hr hr-14" style="width:11rem;background-color:#888">');
                    $('.hr-14').css('top','4.7rem');
                    $('.hr-14').css('left','23rem');

                } else if($(this).attr('class') === 'dot-G dot-2') {
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'<a href="https://mermaidjs.github.io/" target="_blank"> <i class="fa fa-share-square-o" style="color:#888"></i></a></p></div>');
                    $('.map-content-'+indexDot).css('top','7rem');
                    $('.map-content-'+indexDot).css('right','8rem');

                    $(content).append('<hr class="arrow-hr hr-15" style="width:23.7rem;background-color:#888">');
                    $('.hr-15').css('top','7.3rem');
                    $('.hr-15').css('right','24rem');

                } else if($(this).attr('class') === 'dot-G dot-3') {
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'<a href="https://bramp.github.io/js-sequence-diagrams/" target="_blank"> <i class="fa fa-share-square-o" style="color:#888"></i></a></p></div>');
                    $('.map-content-'+indexDot).css('top','21.5rem');
                    $('.map-content-'+indexDot).css('right','7rem');

                    $(content).append('<hr class="arrow-hr hr-16" style="width:10rem;background-color:#888">');
                    $('.hr-16').css('top','21.6rem');
                    $('.hr-16').css('right','24rem');

                } else if($(this).attr('class') === 'dot-G dot-4') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><video src="../images/diagram-error.webm" style="width:100%" muted loop autoplay></video><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','31.7rem');
                    $('.map-content-'+indexDot).css('left','10rem');

                    $(content).append('<hr class="arrow-hr hr-22" style="width:21rem;background-color:#888">');
                    $('.hr-22').css('top','31.8rem');
                    $('.hr-22').css('left','23rem');

                } else if($(this).attr('class') === 'dot-H dot-1') {
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><video src="../images/emoji.webm" style="width:100%" muted loop autoplay></video><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','3rem');
                    $('.map-content-'+indexDot).css('left','10rem');

                    $(content).append('<hr class="arrow-hr hr-17" style="width:19rem;background-color:#888">');
                    $('.hr-17').css('top','10rem');
                    $('.hr-17').css('left','24rem');

                } else if($(this).attr('class') === 'dot-H dot-2') {
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><video src="../images/strong.webm" style="width:100%" muted loop autoplay></video><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','5.5rem');
                    $('.map-content-'+indexDot).css('right','8rem');

                    $(content).append('<hr class="arrow-hr hr-23" style="width:8.8rem;background-color:#888">');
                    $('.hr-23').css('top','6rem');
                    $('.hr-23').css('right','24rem');

                } else if($(this).attr('class') === 'dot-H dot-3') {
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','21.5rem');
                    $('.map-content-'+indexDot).css('right','7rem');

                    $(content).append('<hr class="arrow-hr hr-24" style="width:8.8rem;background-color:#888">');
                    $('.hr-24').css('top','21.7rem');
                    $('.hr-24').css('right','24rem');

                } else if($(this).attr('class') === 'dot-H dot-4') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><img src="../images/links.png" style="width:100%"><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','23.5rem');
                    $('.map-content-'+indexDot).css('left','10rem');

                    $(content).append('<hr class="arrow-hr hr-18" style="width:23rem;background-color:#888">');
                    $('.hr-18').css('top','23.8rem');
                    $('.hr-18').css('left','24rem');

                } else if($(this).attr('class') === 'dot-I dot-1') {
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','12.8rem');
                    $('.map-content-'+indexDot).css('left','10rem');

                    $(content).append('<hr class="arrow-hr hr-19" style="width:7rem;background-color:#888">');
                    $('.hr-19').css('top','17rem');
                    $('.hr-19').css('left','25rem');

                } else if($(this).attr('class') === 'dot-I dot-2') {
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','5.5rem');
                    $('.map-content-'+indexDot).css('right','8rem');

                    $(content).append('<hr class="arrow-hr hr-20" style="width:10.5rem;background-color:#888">');
                    $('.hr-20').css('top','5.6rem');
                    $('.hr-20').css('right','24rem');

                } else if($(this).attr('class') === 'dot-I dot-3') {
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','22.5rem');
                    $('.map-content-'+indexDot).css('left','10rem');

                    $(content).append('<hr class="arrow-hr hr-25" style="width:13rem;background-color:#888">');
                    $('.hr-25').css('top','22.7rem');
                    $('.hr-25').css('left','24rem');

                } else if($(this).attr('class') === 'dot-I dot-4') {   
                    $(content).append('<div class="map-content-'+indexDot+'"><h3 class="map-content-heading">'+dot.heading+'</h3><hr><p class="map-content-text">'+dot.body+'</p></div>');
                    $('.map-content-'+indexDot).css('top','22.5rem');
                    $('.map-content-'+indexDot).css('right','7rem');

                    $(content).append('<hr class="arrow-hr hr-26" style="width:22.3rem;background-color:#888">');
                    $('.hr-26').css('top','22.7rem');
                    $('.hr-26').css('right','24rem');
                }

                $('.arrow-hr').css('position','absolute');

                $('.map-content-'+indexDot).css('width','15rem');
                $('.map-content-'+indexDot).css('position','absolute');
                $('.map-content-'+indexDot).css('color','#888');
                $('.map-content-'+indexDot).css('text-align','left');    

                prevDot.push(dot.name);
            }
        
        });

    });


});

//when fire carousel ,hide the dots map content
$('#carouselExampleIndicators').on('slide.bs.carousel', function () {
    $('[class^=map-content-]').css('display','none');

    //empty the dots array on each sliding
    prevDot = [];

    //hide the arrows when sliding
    $('.arrow-hr').css('display','none');
  });
    

  //section themes
    $('.preview-change').mouseenter(function() {
        $('.first-preview').css('transform','translate(-25%,45rem)');
        $('.second-preview').css('transform','translate(-20%,0)');
    }).mouseleave(function() {
        $('.second-preview').css('transform','translate(-20%,45rem)');
        $('.first-preview').css('transform','translate(-25%,0)');
    });

    
    var x = 0;   
    $('.content').on('click','.text-icon',function() {
        x += 16.6666;
        $(this).parent().parent().parent().parent().css('transform','translateX(-'+x+'%)');
    });

    $('.content').on('click','.text-icon-last',function() {
        x = 0;   
        $(this).parent().parent().parent().parent().css('transform','translateX(0)');
    });




    //Control form
    $('.form-body').focusin(function() {
        $(this).css('padding-bottom','10rem');
        $(this).css('border-width','2px');
        $(this).parent().siblings().css('opacity',1);
    });

    // var body = $('[name=body]').val();
    // var email = $('[name=email]').val();
    // $.ajax("",
    //         {
    //             body:$('[name=body]').val(),
    //             email:$('[name=email]').val(),
    //             type:"post",
    //         },
    //         function(response) {
    //             console.log('Thanks For Your Contact');
    //         }
    //     );

        



});



