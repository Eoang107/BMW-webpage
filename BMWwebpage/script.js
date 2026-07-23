//tgl
let date = document.getElementById('tgl').innerHTML = new Date().toDateString()

//SliderFoto
let wadahFoto = document.getElementById('fotoBmw1')
let prev = document.getElementById ('prev')
let next = document.getElementById ('next')
let isiFoto = [
    'BMWwebpage/images/BMW-3-Series-E21.jpg',
    'BMWwebpage/images/E30.jpg',
    'BMWwebpage/images/BMW-E36-M3-black-drift.jpg'
]
let urutanNow = 0
let teksBmw = [
    "Launched in 1975 as the direct successor to the beloved iconic 002 models, the BMW E21 marked the official birth of the legendary 3 Series line. Designed under the direction of Paul Bracq, it introduced the world to a sleek, shark-nosed two-door coupe silhouette that would define the brand's aesthetic for generations. The E21 was revolutionary not just for its sharp exterior, but for introducing the driver-focused cockpit, where the center console was tilted toward the driver—a signature BMW layout used for decades. Serving as the foundation of modern compact executive sports sedans, the E21 established BMW's core philosophy of building practical, high-quality cars that never compromised on the pure joy of driving.",
    "While the E21 started the legacy, the BMW E30 propelled the 3 Series into absolute global superstardom during the 1980s. The E30 expanded the lineup massively, offering not just coupes, but four-door sedans, convertibles, and station wagons to meet an exploding market demand. With its perfectly balanced boxy styling, four circular headlights, and precise engineering, the E30 became the definitive status symbol of its era. More importantly, it birthed the very first legendary BMW M3, a high-revving racing machine built for the track that dominated touring car championships worldwide. Today, the E30 is widely celebrated as one of the greatest automotive icons in history, universally loved by purists for its analog driving feel and timeless, crisp mechanical feedback.",
    "Stepping into the 1990s, BMW took a massive leap forward by introducing the E36, a model that completely revolutionized the visual language of the brand. Moving away from the traditional upright, boxy shapes of its predecessors, the E36 embraced a highly aerodynamic, wedge-shaped 'dolphin' silhouette, neatly enclosing the quad headlights behind smooth glass covers. Beneath its beautiful exterior lay a giant mechanical upgrade: the sophisticated Z-axle multi-link rear suspension, which provided sharp, industry-leading handling and stability. As it seamlessly combined modern refinement, everyday comfort, and absolute driver engagement, the E36 successfully bridged the gap between classic analog heritage and modern automotive performance, cementing its place as an irreplaceable legend in car culture."
]

let judulBmw = [
    'BMW E21',
    'BMW E30',
    'BMW E36'
]

let decorBunder = [
    '&#9675; &#9679; &#9679;',
    '&#9679; &#9675; &#9679;',
    '&#9679; &#9679; &#9675;'
]

let konten = document.querySelector(".kontenCoy");

function jalankanAnimasi() {
    
    konten.classList.remove('konten-pudar');

    void konten.offsetWidth;

    wadahFoto.src = isiFoto[urutanNow];
    document.getElementById('teksBmw1').innerHTML = teksBmw[urutanNow];
    document.getElementById('titleBmw').innerHTML = judulBmw[urutanNow];
    document.getElementById('decor').innerHTML = decorBunder[urutanNow];

    konten.classList.add('konten-pudar');
}

next.onclick = function () {
    urutanNow++;
    if (urutanNow >= isiFoto.length) {
        urutanNow = 0;
    }
    jalankanAnimasi();
};

prev.onclick = function() {
    urutanNow--;
    if (urutanNow < 0) {
        urutanNow = isiFoto.length -1;
    }
    jalankanAnimasi();
};

// Slider Otomatis Galeri Showcase
const kumpulanFoto = document.querySelectorAll('.foto-galeri');
let indeksGaleriNow = 0;

function gantiFotoGaleri() {
    // Hapus kelas 'active' dari foto yang sekarang sedang tampil
    kumpulanFoto[indeksGaleriNow].classList.remove('active');
    
    // Naikkan indeks, jika sudah di ujung foto kembali ke 0
    indeksGaleriNow = (indeksGaleriNow + 1) % kumpulanFoto.length;
    
    // Tambahkan kelas 'active' ke foto berikutnya
    kumpulanFoto[indeksGaleriNow].classList.add('active');
}

// Jalankan fungsi gantiFotoGaleri setiap 2000 ms (2 detik)
setInterval(gantiFotoGaleri, 2000);