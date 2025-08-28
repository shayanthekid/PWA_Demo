document.getElementById('ping').addEventListener("click", function(){

    document.getElementById('out').textContent= "JS is working";
})


// Helper file
//Runs in the background , seperate from the mian page
//Offline permance, overall perfomance, push notifications

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(()=> console.log('Service Worker registered'))
    .catch(err => console.log('SW registration failed', err));

}