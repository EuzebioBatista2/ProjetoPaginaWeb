let cont = 1
setInterval(function() {
    $('#emoji').animate({top: '+=30'}, 500, function () {
        img.src= `./emojis/${cont}.png`
        $('#emoji').animate({deg: '+=360'}, {
            duration: 300,
            easing: 'linear',
            step: function(now) {
                $(this).css({
                    transform: 'rotate('  + now + 'deg)'
                })
            }
        })
    }).animate({top: '-=30'}, 500)
        
    cont += 1
    if (cont == 7) {cont = 1}
    const img = document.getElementById('emoji')
},1300)