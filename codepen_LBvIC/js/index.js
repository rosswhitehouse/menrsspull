$(function(){
        var tagUrl = 'http://www.manchestereveningnews.co.uk/all-about/manchester-united-fc';
      
        url = ''+tagUrl+'?service=rss';
        $.ajax({
        type: "GET",
        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
        dataType: 'json',
        error: function(){
            alert('Unable to load feed, Incorrect path or invalid feed');
        },
        success: function(xml){
            values = xml.responseData.feed.entries;
          console.log(values);
          
          $(values).each(function(){ 
            $('.test').append('<li>'+this.content+'</li>');  
          });
          
        
        }
    });
   
    });