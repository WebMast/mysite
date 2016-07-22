/**
 * Created by Designer on 16.05.2016.
 */
 
 $(document).ready(function(){

 	var hrefNews1;

 	$('#carousel').carousel({interval: 5000});


 	$.getJSON('http://alloworigin.com/get?url=' + encodeURIComponent('http://kpi.ua') + '&callback=?', function(data){
 		hrefNews1 = 'http://kpi.ua'+$(data.contents).find('.views-row-1 a').attr('href');

 		$('.news-header1').html($(data.contents).find('.views-row-1 .mainpage-news-block-text strong').html());
 		$('.news-text1').html($(data.contents).find('.views-row-1 .mainpage-news-block-text>.field-content').html());
 		$("a.news1").attr("href", 'http://kpi.ua'+$(data.contents).find('.views-row-1 a').attr('href'));

 		$('.news-header2').html($(data.contents).find('.views-row-2 .mainpage-news-block-text strong').html());
 		$('.news-text2').html($(data.contents).find('.views-row-2 .mainpage-news-block-text>.field-content').html());
 		$('.news-logo2').html($(data.contents).find('.views-row-2 .mainpage-news-block>.field-content').html());
 		$("a.news2").attr("href", 'http://kpi.ua'+$(data.contents).find('.views-row-2 a').attr('href'));

 		$('.news-header3').html($(data.contents).find('.views-row-3 .mainpage-news-block-text strong').html());
 		$('.news-text3').html($(data.contents).find('.views-row-3 .mainpage-news-block-text>.field-content').html());
 		$('.news-logo3').html($(data.contents).find('.views-row-3 .mainpage-news-block>.field-content').html());
 		$("a.news3").attr("href", 'http://kpi.ua'+$(data.contents).find('.views-row-3 a').attr('href'));

 		$('.news-header4').html($(data.contents).find('.views-row-4 .mainpage-news-block-text strong').html());
 		$('.news-text4').html($(data.contents).find('.views-row-4 .mainpage-news-block-text>.field-content').html());
 		$('.news-logo4').html($(data.contents).find('.views-row-4 .mainpage-news-block>.field-content').html());
 		$("a.news4").attr("href", 'http://kpi.ua'+$(data.contents).find('.views-row-4 a').attr('href'));

 		$('.news-header5').html($(data.contents).find('.views-row-5 .mainpage-news-block-text strong').html());
 		$('.news-text5').html($(data.contents).find('.views-row-5 .mainpage-news-block-text>.field-content').html());
 		$('.news-logo5').html($(data.contents).find('.views-row-5 .mainpage-news-block>.field-content').html());
 		$("a.news5").attr("href", 'http://kpi.ua'+$(data.contents).find('.views-row-5 a').attr('href'));

 		$('.news-header6').html($(data.contents).find('.views-row-6 .mainpage-news-block-text strong').html());
 		$('.news-text6').html($(data.contents).find('.views-row-6 .mainpage-news-block-text>.field-content').html());
 		$('.news-logo6').html($(data.contents).find('.views-row-6 .mainpage-news-block>.field-content').html());
 		$("a.news6").attr("href", 'http://kpi.ua'+$(data.contents).find('.views-row-6 a').attr('href'));

 		$('.news-header7').html($(data.contents).find('.views-row-7 .mainpage-news-block-text strong').html());
 		$('.news-text7').html($(data.contents).find('.views-row-7 .mainpage-news-block-text>.field-content').html());
 		$('.news-logo7').html($(data.contents).find('.views-row-7 .mainpage-news-block>.field-content').html());
 		$("a.news7").attr("href", 'http://kpi.ua'+$(data.contents).find('.views-row-7 a').attr('href'));
 	}).done(function() {

 			$.getJSON('https://jsonp.afeld.me/?callback=?&url=' + encodeURIComponent(hrefNews1), function(data){
 				$('.news-logo1').html($(data.data).find('#main .even a').html());
 				$('.news-logo1 img').addClass("img-responsive");
 			});
	});

	 //Scroll to accordion position function
   function scrTo(opel,toel) {
	   $(opel).on( 'click', function () {
		   var act = $('#accordion').find(".ui-accordion-content-active");
		   var sht = $(toel).offset().top;
		   var ota = act.offset().top;

		   if (ota < sht) {
			   var ht = parseFloat(act.css("height"));
		   } else {
			   var ht = 0;
		   }

		   $('html, body').animate({
			    scrollTop: sht - ht + 74
		   }, 300);
	   });
   }

	 scrTo("#2000","#2000");
	 scrTo("#2001","#2000");
	 scrTo("#2002","#2001");
	 scrTo("#2003","#2002");
	 scrTo("#2004","#2003");
	 scrTo("#2005","#2004");
	 scrTo("#2006","#2005");
	 scrTo("#2007","#2006");
	 scrTo("#2008","#2007");
	 scrTo("#2009","#2008");
	 scrTo("#2010","#2009");
	 scrTo("#2011","#2010");
	 scrTo("#2012","#2011");
	 scrTo("#2013","#2012");
	 scrTo("#2014","#2013");
	 scrTo("#2015","#2014");
	 scrTo("#2016","#2015");


	 $('.bot-men-tab>div').hover(
		 function() {
			 $('.listBlockHome2', this).show(250);
			 $('.listBlockHome1', this).hide(250);
		 },
		 function() {
			 $('.listBlockHome2', this).hide(250);
			 $('.listBlockHome1', this).show(250);
		 }
	 );
 });