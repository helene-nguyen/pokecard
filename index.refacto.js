//Thanks to Oscar Salazar on codepen
//https://codepen.io/raczo/pen/BajBdmJ?editors=0110
//Using GSAP library
console.log("echo refacto");


const app = {
    //^VARIABLES
    //^INIT
    init() {
        app.targetEventPokeball();
    },
    //^FUNCTIONS
    //~toggle pokeball
    togglePokeBall() {

        //remove when add deck
        const pokeball = document.querySelector('#pokeball-1');

        if (!pokeball.classList.contains('open')) {
            app.retrieve();
        } else {
            app.spawn();
        }

        return pokeball;
    },
    //~spawn
    spawn() {
        //!gsap SPAWN
        const spawn =
            gsap
            .timeline({
                onStart: function () {
                    document.querySelector('.summon').classList.remove('hidden');
                    document.querySelector('.summon').style.filter = 'url(#spawn-line-1)';
                    document.querySelector('.pokemon img').style.filter = 'url(#spawn-pokemon-1)';
                },
                onComplete: function () {
                    document.querySelector('.summon').classList.add('hidden');
                    document.querySelector('.summon').style.filter = 'none';
                    document.querySelector('.pokemon img').style.filter = 'none';
                },
                paused: true,
            })
            /*HERE TO CHANGE FOR POKEMON APPEARS*/
            .set('.path', {
                attr: {
                    'stroke-dashoffset': '100%',
                },
            })
            .to('.path', {
                delay: 0.2,
                duration: 0.2,
                attr: {
                    'stroke-dashoffset': '0%',
                },
            })
            .to('.path', {
                duration: 0.2,
                attr: {
                    'stroke-dashoffset': '-100%',
                },
            })
            /* .from('.pokemon img', {
                    duration: 0.2,
                    scale: 1,
                },
                0.4,
            ) */
            .to('.pokemon img', {
                    scale: 1,
                    duration: 0.2
                },
                0.3,
            )
            .to('#pokemon-displacement-1', {
                    duration: 0.8,
                    attr: {
                        scale: 1
                    },
                    ease: 'none'
                },
                0.2
            )
            .to('#pokemon-turbulence-1', {
                    duration: 0.8,
                    attr: {
                        baseFrequency: 0.03
                    },
                    ease: 'none'
                },
                0.2
            )
            .from('.tags', {
                    opacity: 0,
                },
                0.4
            );

        return spawn.restart();
    },
    //~retrieve
    retrieve() {
        const retrieve =
            gsap
            .timeline({
                onStart: function () {
                    document.querySelector('.summon').classList.remove('hidden');
                    document.querySelector('.summon').style.filter = 'url(#retrieve-line-1)';
                    document.querySelector('.pokemon img').style.filter = 'url(#retrieve-pokemon-1)';
                },
                onComplete: function () {
                    document.querySelector('.summon').classList.add('hidden');
                    document.querySelector('.summon').style.filter = 'none';
                    document.querySelector('.pokemon img').style.filter = 'none';
                },
                paused: true,
            })
            .set('.path', {
                attr: {
                    'stroke-dashoffset': '-100%',
                },
            })
            .to('.tags', {
                opacity: 0,
            })
            .from('#retrieve-displacement-1', {
                    duration: 0.3,
                    attr: {
                        scale: 0
                    }
                },
                0,
            )
            .from('#retrieve-turbulence-1', {
                    duration: 0.3,
                    attr: {
                        baseFrequency: 0
                    }
                },
                0
            )
            .to('.pokemon img', {
                    scale: 0,
                    duration: 0.2
                },
                0.3,
            )
            .to('.path', {
                    duration: 0.2,
                    attr: {
                        'stroke-dashoffset': '0%',
                    },
                },
                0.35
            )
            .to('.path', {
                    duration: 0.2,
                    attr: {
                        'stroke-dashoffset': '100%',
                    },
                },
                0.45
            );

        return retrieve.restart();
    },
    //~event pokeball
    targetEventPokeball() {

        const button = document.querySelector('#toggle-button');

        button.addEventListener('click', (event) => {
            event.preventDefault();

            const pokeball = document.querySelector('#pokeball-1');
            pokeball.classList.toggle('open');

            app.togglePokeBall();

        });

        return button;
    }
}

document.addEventListener('DOMContentLoaded', app.init);