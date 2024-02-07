const $catImg1 = document.querySelector('.cat-1');
const $catImg2 = document.querySelector('.cat-2');
const $catImg3 = document.querySelector('.cat-3');
const $catMain = document.querySelector('.principal-image-box');

function handleCat1() {
    $catMain.innerHTML = '<img src="images/cat-1.jpeg" class="main-image" alt="Gato 1" title="Gato Malhado">';
}

function handleCat2() {
    $catMain.innerHTML = '<img src="images/cat-2.jpeg" class="main-image" alt="Gato 2" title="Gato Laranja">';
}

function handleCat3() {
    $catMain.innerHTML = '<img src="images/cat-3.jpeg" class="main-image" alt="Gato 3" title="Gato Siamês">';
}

$catImg1.addEventListener('click', handleCat1);
$catImg2.addEventListener('click', handleCat2);
$catImg3.addEventListener('click', handleCat3);