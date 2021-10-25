

particlesJS("particles-js",
    {
        "particles":{
            "number":{
                "value":38,
                "density":{
                    "enable":true,
                    "value_area":789.1476416322727
                }
            },
            "color":{
                "value":"#ffffff"
            },
            "shape":{
                "type":"image",
                "stroke":{
                    "width":0,
                    "color":"#000000"
                },
                "polygon":{
                    "nb_sides":5
                },
                "image":{
                    "src":"images/bubble.png",
                    "width":100,
                    "height":100
                }
            },
            "opacity":{
                "value":1,
                "random":true,
                "anim":{
                    "enable":true,
                    "speed":1,
                    "opacity_min":0,
                    "sync":false
                }
            },
            "size":{
                "value":47.34885849793636,
                "random":true,
                "anim":{
                    "enable":false,
                    "speed":36.54347455356053,
                    "size_min":0.3,
                    "sync":false
                }
            },
            "line_linked":{
                "enable":false,
                "distance":150,
                "color":"#ffffff",
                "opacity":0.4,
                "width":1
            },
            "move":{
                "enable":true,
                "speed":1,
                "direction":"none",
                "random":true,
                "straight":false,
                "out_mode":"out",
                "bounce":false,
                "attract":{
                    "enable":false,
                    "rotateX":600,
                    "rotateY":600
                }
            }
        },
        "interactivity":{
            "detect_on":"canvas",
            "events":{
                "onhover":{
                    "enable":true,
                    "mode":"repulse"
                },
                "onclick":{
                    "enable":true,
                    "mode":"repulse"
                },
                "resize":true
            },
            "modes":{
                "grab":{
                    "distance":400,
                    "line_linked":{
                        "opacity":1
                    }
                },
                "bubble":{
                    "distance":250,
                    "size":0,
                    "duration":2,
                    "opacity":0,
                    "speed":3
                },
                "repulse":{
                    "distance":186.7777588293094,
                    "duration":0.4
                },
                "push":{
                    "particles_nb":4
                },
                "remove":{
                    "particles_nb":2
                }
            }
        },
        "retina_detect":true
    }
    );

/*
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
console.log(stats);
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() { stats.begin();
    stats.end();
    console.log(stats);
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array)
    {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
    };
requestAnimationFrame(update);
*/

// particlesJS("particles-js2", {"particles":{"number":{"value":38,"density":{"enable":true,"value_area":789.1476416322727}},"color":{"value":"#ffffff"},"shape":{"type":"image","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"images/bubble.png","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":47.34885849793636,"random":true,"anim":{"enable":false,"speed":36.54347455356053,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":186.7777588293094,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

/*
var count_particles2, stats2, update2;
stats2 = new Stats;
stats2.setMode(0);
stats2.domElement.style.position = 'absolute';
stats2.domElement.style.left = '0px';
stats2.domElement.style.top = '0px';
document.body.appendChild(stats2.domElement);
count_particles2 = document.querySelector('.js-count-particles');
update2 = function() {
    stats2.begin(); stats2.end();
    console.log(stats2);
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array)
    { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; }
    requestAnimationFrame(update2);
}; requestAnimationFrame(update2);;
*/


particlesJS("particles-js2",
    {"particles":{"number":{"value":100,"density":{"enable":false,"value_area":800}},
            "color":{"value":"#ffffff"},
            "shape":{"type":"star","stroke":{"width":0,"color":"#000000"},
                "polygon":{"nb_sides":5},
                "image":{"src":"http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg","width":100,"height":100}},
            "opacity":{
                "value":1,
                "random":true,
                "anim":{
                    "enable":true,
                    "speed":1,
                    "opacity_min":0,
                    "sync":false
                }
            },
                "size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
            "line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
            "move":{"enable":true,"speed":8,"direction":"bottom-right","random":false,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":200,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
// var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;



