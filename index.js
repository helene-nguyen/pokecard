console.log("echo");

(function () {
  //function toggle
  function togglePokeball(event) {
    event.preventDefault(); //remove if add deck

    const pokeballs = document.querySelectorAll('.pokeball-1'); //change by class

    pokeballs.forEach((pokeball) => {
      if (pokeball.classList.contains('open')) {
        pokeball.classList.remove('open');
        retrieve.restart();
      } else {
        pokeball.classList.add('open');
        spawn.restart();
      }
    });

  }

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
    }, )
    .to('.path', {
      duration: 0.2,
      attr: {
        'stroke-dashoffset': '-100%',
      },
    }, )
    .from('.pokemon img', {
        duration: 0.2,
        scale: 1,
      },
      0.4,
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

  //!gasp SPAWN
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
    }, )
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


  //METHOD EVENT BUTTON
  const button = document.querySelectorAll('.toggle-button');

  button.forEach((element) => {
    console.log(element);
    element.addEventListener('click', togglePokeball);
  })

})();