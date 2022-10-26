var list = document.querySelectorAll('.list .item');
var rotateElement = document.querySelector('.bg-rotate');
var hide = 0;
var active = 1;
var rotate = 0;
var arrayColor = ['#82B9BA', '#F5C069', '#C47EAA', '#9989D0'];
var postionColor = 0;

document.getElementById('next').onclick = function(){
    rotate = rotate + 100;
    postionColor = postionColor + 1 >= arrayColor.length ? 0 : postionColor + 1;
    active = active + 1 >= list.length ? 0 : active + 1;
    hide = active - 1 < 0 ? list.length -1 : active - 1;
    activeItem();
}
function activeItem(){
    rotateElement.style.transform = 'rotate('+rotate+'deg)';
    rotateElement.style.backgroundColor = arrayColor[postionColor];

    let remove_hide_active = hide - 1 < 0 ? list.length - 1 : hide - 1;
    list[remove_hide_active].classList.remove('hide');
    list[remove_hide_active].classList.remove('active');

    // add action and remove_hide_active
    list[hide].classList.add('hide');
    list[active].classList.add('active');

    // disable button neext 2s
    document.getElementById('next').style.pointerEvents = 'none';
    setTimeout(function(){
        document.getElementById('next').style.pointerEvents = 'unset';
    }, 1700)
}
