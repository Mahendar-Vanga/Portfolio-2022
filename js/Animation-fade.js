
    // adding toggle class for toggle div
    function addToggle(){
        const toggleActive=document.querySelector('.toogle')
        const navMenu = document.querySelector('nav')
        const timesIcon = document.querySelector('#toggleIcon')

        toggleActive.classList.toggle("ActiveToggle")
        navMenu.classList.toggle("menuActive")

        // adding and removing toggle icon 
        if(timesIcon.classList.toggle('fa-times')){
        timesIcon.classList.remove('fa-bars')}
        else{
            timesIcon.classList.add('fa-bars')
        }

    }


    // // chage in contact form and img toggle
    function changeContent()
    {
        const ChangeContent=document.querySelector("#form-emailMe-container")
        

        if(ChangeContent.classList.toggle('form-emailMe-container')){
        ChangeContent.classList.remove('form-img-container')
             
        document.getElementById('email-form').style.display="flex"
            

    }
        else{
            ChangeContent.classList.add('form-img-container')
            document.getElementById('email-form').style.display="none"     
        }


    }


    // adding fade in animations

    const appearOptions = 
    {
        threshold: 0,
        rootMargin:"0px 0px -20px 0px"
    };

    const fadeLeft=document.querySelectorAll('.fade-in-left');
    const fadeIn = document.querySelectorAll('.fade-in-right');
    const fadeDown = document.querySelectorAll('.fade-in-down');

    const appearOnScroll = 
    new IntersectionObserver(function(entries,appearOnScroll)
    {
        entries.forEach(entry => 
        { 
            if(!entry.isIntersecting){return;}
            else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target)
            }
        });

    },
    appearOptions);

    fadeLeft.forEach(faderLeft => {
        appearOnScroll.observe(faderLeft);
    });

    fadeIn.forEach(faderRight => {
        appearOnScroll.observe(faderRight);
    });

    fadeDown.forEach(faderDown => {
        appearOnScroll.observe(faderDown);
    });