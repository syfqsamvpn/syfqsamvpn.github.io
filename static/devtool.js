const devtools = /./;

const devtoolsOpen = () => {
    const start = performance.now();
    debugger;
    const end = performance.now();
    return end - start > 100;
};

const redirectUrl = 'https://shopee.com.my/samsfx.tech'; 

setInterval(() => {
    if (devtoolsOpen()) {
        //alert('Developer tools are open! Please close them to continue.');
        window.location.href = redirectUrl;
    }
}, 1000);
