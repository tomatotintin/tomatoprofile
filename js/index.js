		$(document).ready(function() {
            $('#profile_content').css("display","none");
            $('#profile_img').css("display","none");
            $('#title_words').css("display","none");
            $('.work_img').css("display","none");
            
            $('.work_img').hover(
                function(){
                    $(this).find('span').animate({
                        top: "87%"
<<<<<<< HEAD
                    }, 500);
=======
                    }, 300);
>>>>>>> master
                   
                    console.log("image hover ");
                },
                function(){
                    $(this).find('span').animate({
                        top: "100%"
<<<<<<< HEAD
                    }, 500);
=======
                    }, 300);
>>>>>>> master
                    console.log("image hover out")
                }
            );
			$('#fullpage').fullpage({
				sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
                    onLeave: function(index, nextIndex, direction){
						console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " +  direction);
                        if(index==1){
                            $('#title_words').slideUp();
                            
                        }else if(index==2){
                            $('#profile_content').fadeOut();
                            $('#profile_img').fadeOut();
                            
                        }else if(index==3){
                            
                            $('.work_img').slideUp();
                        }
					},
					afterLoad: function(anchorLink, index){
						console.log("afterLoad--" + "anchorLink: " + anchorLink + " index: " + index );
                        if(index==1){
                            $('#title_words').slideDown();
                            
                        }
                        else if(index==2){
                            $('#myVideo1').get(0).play();
                            $('#profile_content').fadeIn();
                            $('#profile_img').fadeIn();
                        }
                        else if(index==3){
                            $('#myVideo2').get(0).play();
                            $('.work_img').slideDown();
                        }
                        
					},
					afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
						console.log("afterSlideLoad--" + "anchorLink: " + anchorLink + " index: " + index + " slideAnchor: " + slideAnchor + " slideIndex: " + slideIndex);
					},
					onSlideLeave: function(anchorLink, index, slideIndex, direction){
						console.log("onSlideLeave--" + "anchorLink: " + anchorLink + " index: " + index + " slideIndex: " + slideIndex + " direction: " + direction);
					},
					afterRender: function(){
						console.log("afterRender");
					},
					afterResize: function(){
						console.log("afterResize");
					}

			});
                 
		});
