if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js');
}

if(window.caches){
    console.log("Habemus cache")

    caches.open('prueba')
    caches.open('prueba-v2')

    caches.has('prueba')
        .then((result)=>{
            console.log(result);
    })

    caches.open('cache-v1').then((cache)=>{
        //cache.add("/index.html");

        cache.addAll([
            '/index.html',
            "/css/pages.css",
            "/img/thanos.jpg",
            "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        ]).then(()=>{
            //cache.delete('/css/page.css')
            //cache.put('index.html', new Response('Actualizado desde cache'))
        });

        cache.match('index.html')
            .then((res)=>{
                res.text().then((trxt)=>{console.log(trxt)})
                console.log(res)
            })
    })

    caches.keys()
        .then((keys)=>{
            console.log(keys)
        })
}
