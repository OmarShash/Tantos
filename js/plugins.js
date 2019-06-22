/*global $, window*/

$(function () {
    
    "use strict";
    
    // Trigger nice scroll plugin
    
    $('html').niceScroll({
        
        cursorcolor: '#f7600e',
        cursorwidth: 6,
        cursorborder: '1px solid #f7600e'
        
    });
    
    // Change height of Header
    
    $(".header").height($(window).height());
    
    // Scroll to features
    
    $(".header .arrow i").click(function () {
        
        $("html, body").animate({
           
            scrollTop: $(".features").offset().top
           
        }, 1000);
        
    });
    
    // button hire  
    
    $(".hire").click(function () {
        
        $("html, body").animate({
           
            scrollTop: $(".our-team").offset().top
           
        }, 1500);
        
    });
    
        // button our work  
    
    $(".work").click(function () {
        
        $("html, body").animate({
           
            scrollTop: $(".our-work").offset().top
           
        }, 1000);
        
    });
    
    // Hide items from our work 
    
    $(".our-work .items-box .hidden").hide();
    
    // Show hidden items from our work
    
    $(".show-more").click(function () {
        
        $(".our-work .items-box .hidden").fadeIn(2000);
        
    });
    
    // Check Testimonials
    
    var leftArrow = $('.testim .fa-chevron-left'),
        
        rightArrow = $('.testim .fa-chevron-right');
    
    function checkClients() {
        
        if ($('.client:first').hasClass('active')) {
            
            leftArrow.fadeOut();
            
        } else {
            
            leftArrow.fadeIn();
            
        }
        
        if ($('.client:last').hasClass('active')) {
            
            rightArrow.fadeOut();
            
        } else {
            
            rightArrow.fadeIn();
            
        }
        
    }
    
    checkClients();
    
    $('.testim i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testim .active').fadeOut(100, function () {
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        } else {
            
            $('.testim .active').fadeOut(100, function () {
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        }
        
    });
    
});





