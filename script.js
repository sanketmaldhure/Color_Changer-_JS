const button = document.querySelectorAll('.box');
const body = document.querySelector('body');
console.log(button)


button.forEach(function(button)
{
    console.log(button);
    button.addEventListener('click',function(e)
{
    // console.log(e);
    // console.log(e.target);

    if(e.target.id ==='red'){
        body.style.backgroundColor=e.target.id;
    }
    else

    if(e.target.id ==='orange'){
        body.style.backgroundColor=e.target.id;
    }
    else

    if(e.target.id ==='green'){
        body.style.backgroundColor=e.target.id;
    }
else
    if(e.target.id ==='yellow'){
        body.style.backgroundColor=e.target.id;
    }
   else
    if(e.target.id ==='purple'){
        body.style.backgroundColor=e.target.id;
    }
    

});
});
console.log(document.querySelector('h1')) ;