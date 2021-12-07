import { precacheAndRoute } from 'workbox-precaching';


window.self.addEventListener("fetch", e =>{
    console.log(e)
})


precacheAndRoute(window.self.__WB_MANIFEST);

