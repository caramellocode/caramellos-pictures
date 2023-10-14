const images = [
        "./img/1.png",
        "./img/3.png",
        "./img/4.png",
        "./img/5.png",
        "./img/2.png",
        "./img/6.png",
        "./img/39.png",
        "./img/7.png",
        "./img/8.png",
        "./img/9.png",
        "./img/10.png",
        "./img/11.png",
        "./img/12.png",
        "./img/13.png",
        "./img/14.png",
        "./img/15.png",
        "./img/16.png",
        "./img/17.png",
        "./img/18.png",
        "./img/19.png",
        "./img/20.png",
        "./img/21.png",
        "./img/22.png",
        "./img/23.png",
        "./img/24.png",
        "./img/25.png",
        "./img/27.png",
        "./img/36.png",
        "./img/29.png",
        "./img/30.png",
        "./img/31.png",
        "./img/32.png",
        "./img/33.png",
        "./img/34.png",
        "./img/35.png",
        "./img/36.png",
        "./img/37.png",
        "./img/38.png",
        "./img/39.png",
        "./img/40.png",
        "./img/41.png",
        "./img/42.png",
        


];


function render() {
    const container = document.getElementById('container');
    let html = '';  

    for (let imgPath of images) {     
        html += `<img src="${imgPath}" alt="Image" style="max-width:100%;">`;
    }

    container.innerHTML = html;   
}

function showModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    modal.style.display = "block";
    modalImg.src = imageSrc;

    const span = document.querySelector(".close");
    span.onclick = function() {
        modal.style.display = "none";
    }
}

function render() {
    const container = document.getElementById('container');
    let html = '';

    for (let imgPath of images) {
        html += `<img src="${imgPath}" alt="Image" style="max-width:100%;" onclick="showModal('${imgPath}')">`;
    }

    container.innerHTML = html;
}
