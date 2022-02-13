function googlesheet(url, rev, run) {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            // console.log(res.values)
            if (rev != "") {
                output = res.values.reverse();
            } else {
                output = res.values;
            }
        }).then(() => {
            run(output);
        });
}

googlesheet("https://sheets.googleapis.com/v4/spreadsheets/1ht4ekGq2xZJHcmFbYmL2IqC1phBB6yqu82d8I9a9wYU/values/Links!A1:B999?alt=json&key=AIzaSyBdDg9HUG3s3377BO72GvlEBFJYYQwjBvc", "", (output) => {
    var writeInnerHTML_footer = "";
    output.forEach(e => {
        writeInnerHTML_footer = writeInnerHTML_footer + `
        <div class=""><a class="text-color-base text-decoration-none" href="${e[1]}">${e[0]}</a><br><br></div>
        `
    });
    document.querySelector(".footer-links").innerHTML = writeInnerHTML_footer;
});

if (document.querySelector('[data-scroll-container]') && navigator.platform == 'Win32') {
    var scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        mobile: {
            smooth: true
        },
        tablet: {
            smooth: true
        }
    });

    setTimeout(() => {
        scroll.update();
        document.querySelector("a ").addEventListener('mousemove', () => {
            scroll.update();
        })
    }, 2000)
}

window.addEventListener('resize', () => {
    location.reload();
});

document.querySelector("menu").outerHTML = `
<div class="menu fixed flex w-100" style="top: 0;left: 0;z-index: 10000; padding: calc(10px + 1vw);mix-blend-mode: difference;">
        <a href="https://herc.se/" class="w-100 text-color-on-base text-decoration-none">/-/.SE</a>
        <a href="works.html" class="w-100 text-center text-color-on-base text-decoration-none">OBJECT</a>
        <div class="menu-btn w-100 text-right text-color-on-base text-decoration-none relative" data-menu-control>
            <div class="menu-close-btn" data-menu data-menu-style="opacity: 1;" data-menu-time=".5s">MENU</div>
            <div class="" data-menu data-menu-style="opacity: 0;" data-menu-time=".5s">CLOSE</div>
        </div>
    </div>

    <div class="menu-background pt-3 fixed" data-menu data-menu-delay-In="1s" data-menu-delay-out="0s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-time="1s" data-menu-style="opacity: 0; z-index: -1;" style="--padding: calc(10px + .2vw);">
        <div class="bg-on-base w-100 h-100 menu-bg" data-menu data-menu-delay-In=".2s" data-menu-delay-out="0s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-time="1s" data-menu-style="height: 0!important;"></div>
        <div class="line border-top-1 mt-1" data-menu data-menu-delay=".1s" data-menu-time-in="1s" data-menu-time-out="2s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateY(-5vmax);opacity: 0;"></div>
        <div class="menu-text text-uppercase border-bottom-1 py-1 m:flex px-2 flex-ai-center" data-menu data-menu-delay=".6s" data-menu-time-out=".8s" data-menu-time-in=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateY(-5vmax);opacity: 0;">
            <a href="./index.html" class="h1 fw-500 text-color-base text-decoration-none w-100">home</a>
            <div class="w-75 m:w-25 mt-2 m:mt-0" data-menu data-menu-delay=".6s" data-menu-time-out="1s" data-menu-time-in=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateX(-10vmax);opacity: 0;">HOME <br> SWEET HOME</div>
        </div>
        <div class="menu-text text-uppercase border-bottom-1 py-1 m:flex px-2 flex-ai-center" data-menu data-menu-delay=".5s" data-menu-time-out=".8s" data-menu-time-in=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateY(-5vmax);opacity: 0;">
            <a href="./about.html" class="h1 fw-500 text-color-base text-decoration-none w-100">my info</a>
            <div class="w-75 m:w-25 mt-2 m:mt-0" data-menu data-menu-delay=".6s" data-menu-time-out="1.1s" data-menu-time-in=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateX(-10vmax);opacity: 0;">WHOS <br> WHERE <br> VALUE </div>
        </div>
        <div class="menu-text text-uppercase border-bottom-1 py-1 m:flex px-2 flex-ai-center" data-menu data-menu-delay=".4s" data-menu-time-out=".8s" data-menu-time-in=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateY(-5vmax);opacity: 0;">
            <a href="./index.html" class="h1 fw-500 text-color-base text-decoration-none w-100">get in touch</a>
            <div class="w-75 m:w-25 mt-2 m:mt-0" data-menu data-menu-delay=".6s" data-menu-time-out="1.2s" data-menu-time-in=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateX(-10vmax);opacity: 0;">GITHUB <br> TWITTER <br> TWITCH <br> INSTAGRAM </div>
        </div>
        <div class="menu-text text-uppercase border-bottom-1 py-1 m:flex px-2 flex-ai-center" data-menu data-menu-delay=".3s" data-menu-time-out=".8s" data-menu-time-in=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateY(-5vmax);opacity: 0;">
            <a href="./works.html" class="h1 fw-500 text-color-base text-decoration-none w-100">archive</a>
            <div class="w-75 m:w-25 mt-2 m:mt-0" data-menu data-menu-delay=".6s" data-menu-time-out="1.3s" data-menu-time-in=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateX(-10vmax);opacity: 0;">Koakinaimarche Flower Pattern of Obsolete Uh...WHAT THE? fish pattern bags Motex Mask Design Competition ... </div>
        </div>
        <div class="bottom flex text-uppercase flex-ai-end px-2 mt-5 mb-2" data-menu data-menu-delay=".2s" data-menu-time-out="1.3s" data-menu-time-in=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateY(-10vmax);opacity: 0;">
            <div class="w-50 m:w-100">© 2022</div>
            <div class="w-100 text-center"><img class="w-100 m:w-50" src="./assets/FlatLittleHill.svg" alt=""></div>
            <div class="w-100 text-right">studio in taiwan.</div>
        </div>
    </div>
`