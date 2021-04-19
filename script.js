let btnSwitch = document.querySelector('.btnSwitch'),
    switchBall = document.querySelector('span.switchBall'),
    mainVideo = document.querySelector('.mainVideo');

btnSwitch.addEventListener('click', ()=>{    
    if(btnSwitch.classList.contains('active')){        
        mainVideo.pause();
        btnSwitch.classList.remove('active');
    }else{
        mainVideo.play();
        btnSwitch.classList.add('active');
    }
})