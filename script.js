const image = document.querySelector('.main-image');
const header = document.getElementById('scrollHide');
const textImage = document.getElementById('texto-da-imagem');
const mainImage = document.getElementById('btn-image');
const mainImage2 = document.getElementById('btn-image2');
const mainImage3 = document.getElementById('btn-image3');
const mainImage4 = document.getElementById('btn-image4');


function changeImage(imageSrc) {
    image.src = imageSrc;

    switch (image.src) {
        case mainImage.src:
            textImage.innerHTML = `"O NOSSO TRADICIONAL AÇAÍ NO COPO COM 03 COMPLEMENTOS DA SUA PREFERÊNCIA"`;
            textImage.style.textAlign = 'center';
            break;

        case mainImage2.src:
            textImage.innerHTML = `"O NOSSO INCRÍVEL AÇAÍ ÍRIS QUE ALÉM DOS COMPLEMENTOS TEM NUTELLA E MORANGO"`;
            textImage.style.textAlign = 'center';
            break;

        case mainImage3.src:
            textImage.innerHTML = `"DA NOSSA LINHA DE CREPES DOCES: NOSSO MARAVILHOSO CREPE DE MORANGO COM NUTELLA"`;
            textImage.style.textAlign = 'center';
            break;

        case mainImage4.src:
            textImage.innerHTML = `"DA NOSSA LINHA DE CREPES SALGADOS: NOSSO SUCULENTO CREPE DE FRANGO COM CATUPIRY"`;
            textImage.style.textAlign = 'center';
            break;

        default:
            break;
    }
}


window.addEventListener('scroll', () => {

    if (window.scrollY >= 50) {
        header.style.opacity = '0.6';
        header.style.transition = '0.5s';

    } else {
        header.style.opacity = 'unset';
    }
})

//troca de imagem mais suave
//resetar e voltar ao inicio da pagina ao clicar o botao home
// quando clicar na imagem aparecer uma texto explicativo ... como fazer para as 4 imagens sem utilizar muito código...


