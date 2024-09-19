let img = document.getElementById('carousel-img')

let count = 1;
function handleCarousel(movement) {

    if (movement == 'next') {
        if (count != 5) {
            img.style.transition = 'transform 0.5s ease-in-out';
            img.style.transform = 'translateX(-100vw)';
            count++;
            setTimeout(() => {
                img.style.transform = 'translateX(0)';
            }, 50);
            img.src = "image" + count + ".png"
        }
        // } else {
        //     count = 0
        //     img.style.transition = 'transform 0.5s ease-in-out';
        //     img.style.transform = 'translateX(-100vw)';
        //     count++;
        //     setTimeout(() => {
        //         img.style.transform = 'translateX(0)';
        //     }, 50);
        //     img.src = "image" + count + ".png"
        // }
    } else {
        if (count > 1) {
            img.style.transition = 'transform 0.5s';
            img.style.transform = 'translateX(100vw)';
            count--;
            setTimeout(() => {
                img.style.transform = 'translateX(0)';
            }, 50);
            img.src = "image" + count + ".png"
        }
        // else {
        //     count = 6;
        //     img.style.transition = 'transform 0.5s';
        //     img.style.transform = 'translateX(100vw)';
        //     count--;
        //     setTimeout(() => {
        //         img.style.transform = 'translateX(0)';
        //     }, 50);
        //     img.src = "image" + count + ".png"
        // }
    }

}