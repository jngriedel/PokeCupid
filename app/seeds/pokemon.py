from app.models import db, Pokemon

def seed_pokemon():
    Bulbasaur = Pokemon(
        name='Bulbasaur',
        type='grass, poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891758-001bulbasaur.png')
    Ivysaur = Pokemon(
        name='Ivysaur',
        type='grass, poison',
        personality='logical',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891759-002ivysaur.png')
    Venusaur = Pokemon(
        name='Venusaur',
        type='grass, poison',
        personality='caring',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891760-003venusaur.png')
    Charmander = Pokemon(
        name='Charmander',
        type='fire',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891761-004charmander.png')
    Charmeleon = Pokemon(
        name='Charmeleon',
        type='fire',
        personality='logical',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891762-005charmeleon.png')
    Charizard = Pokemon(
        name='Charizard',
        type='fire, flying',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891763-006charizard.png')
    Squirtle = Pokemon(
        name='Squirtle',
        type='water',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891764-007squirtle.png')
    Wartortle = Pokemon(
        name='Wartortle',
        type='water',
        personality='logical',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891809-008wartortle.png')
    Blastoise = Pokemon(
        name='Blastoise',
        type='water',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891810-009blastoise.png')
    Caterpie = Pokemon(
        name='Caterpie',
        type='grass, poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892132-010caterpie.png')
    Metapod = Pokemon(
        name='Metapod',
        type='grass, poison',
        personality='logical',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1895815-011metapod.png')
    Butterfree = Pokemon(
        name='Butterfree',
        type='grass, poison',
        personality='caring',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892298-012butterfree.png')
    Weedle = Pokemon(
        name='Weedle',
        type='bug, poison',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891817-013weedle.png')
    Kakuna = Pokemon(
        name='Kakuna',
        type='bug, poison',
        personality='logical',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891818-014kakuna.png')
    Beedrill = Pokemon(
        name='Beedrill',
        type='bug, poison',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891819-015beedrill.png')
    Pidgey = Pokemon(
        name='Pidgey',
        type='normal, flying',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891631-016pidgey.png')
    Pidgeotto = Pokemon(
        name='Pidgeotto',
        type='normal, flying',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891820-017pidgeotto.png')
    Pidgeot = Pokemon(
        name='Pidgeot',
        type='normal, flying',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891821-018pidgeot.png')
    Rattata = Pokemon(
        name='Rattata',
        type='normal',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898244-019rattata.png')
    Raticate = Pokemon(
        name='Raticate',
        type='normal',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898245-020raticate.png')
    Spearow = Pokemon(
        name='Spearow',
        type='normal, flying',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898246-021spearow.png')
    Fearow = Pokemon(
        name='Fearow',
        type='normal, flying',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898247-022fearow.png')
    Ekans = Pokemon(
        name='Ekans',
        type='poison',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898239-023ekans.png')
    Arbok = Pokemon(
        name='Arbok',
        type='poison',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1895870-024arbok.png')
    Pikachu = Pokemon(
        name='Pikachu',
        type='electric',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png')
    Raichu = Pokemon(
        name='Raichu',
        type='electric',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898248-026raichu.png')
    Sandshrew = Pokemon(
        name='Sandshrew',
        type='ground',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891822-027sandshrew.png')
    Sandslash = Pokemon(
        name='Sandslash',
        type='ground',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891682-028sandslash.png')
    NidoranF = Pokemon(
        name='Nidoran♀',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898252-029nidoran.png')
    Nidorina = Pokemon(
        name='Nidorina',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898253-030nidorina.png')
    Nidoqueen = Pokemon(
        name='Nidoqueen',
        type='ground, poison',
        personality='caring',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898254-031nidoqueen.png')
    NidoranM = Pokemon(
        name='Nidoran♂',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898249-032nidoran.png')
    Nidorino = Pokemon(
        name='Nidorino',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898250-033nidorino.png')
    Nidoking = Pokemon(
        name='Nidoqueen',
        type='ground, poison',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898251-034nidoking.png')
    Clefairy = Pokemon(
        name='Clefairy',
        type='fairy',
        personality='caring',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898255-035clefairy.png')
    Clefable = Pokemon(
        name='Clefable',
        type='fairy',
        personality='caring',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898256-036clefable.png')
    Vulpix = Pokemon(
        name='Vulpix',
        type='fire',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891638-037vulpix.png')
    Ninetales = Pokemon(
        name='Ninetales',
        type='fire',
        personality='logical',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891823-038ninetales.png')
    Jigglypuff = Pokemon(
        name='Jigglypuff',
        type='normal, fairy',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892299-039jigglypuff.png')
    Wigglytuff = Pokemon(
        name='Wigglytuff',
        type='normal, fairy',
        personality='caring',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891680-040wigglytuff.png')
    Zubat = Pokemon(
        name='Zubat',
        type='poison, flying',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891824-041zubat.png')
    Golbat = Pokemon(
        name='Golbat',
        type='poison, flying',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891826-042golbat.png')
    Oddish = Pokemon(
        name='Wigglytuff',
        type='grass, poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891711-043oddish.png')
    Gloom = Pokemon(
        name='Gloom',
        type='grass, poison',
        personality='caring',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898257-044gloom.png')
    Vileplume = Pokemon(
        name='Vileplume',
        type='grass, poison',
        personality='caring',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898258-045vileplume.png')
    Paras = Pokemon(
        name='Golbat',
        type='bug, grass',
        personality='caring',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898259-046paras.png')
    Parasect = Pokemon(
        name='Wigglytuff',
        type='bug, grass',
        personality='logical',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898260-047parasect.png')
    Venonat = Pokemon(
        name='Venonat',
        type='bug, poison',
        personality='logical',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892300-048venonat.png')
    Venomoth = Pokemon(
        name='Venomoth',
        type='bug, poison',
        personality='logical',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892301-049venomoth.png')
    Diglett = Pokemon(
        name='Diglett',
        type='ground',
        personality='logical',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892133-050diglett.png')
    Dugtrio = Pokemon(
        name='Dugtrio',
        type='bug, poison',
        personality='logical',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1894634-051dugtrio.png')
    Meowth = Pokemon(
        name='Meowth',
        type='normal',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.pngkey.com/png/full/200-2008610_052meowth-pokemon-conquest-meowth-transparent.png')
    Persian = Pokemon(
        name='Persian',
        type='normal',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898262-053persian.png')
    Psyduck = Pokemon(
        name='Psyduck',
        type='water',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892134-054psyduck.png')
    Golduck = Pokemon(
        name='Golduck',
        type='water',
        personality='logical',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892302-055golduck.png')
    Mankey = Pokemon(
        name='Mankey',
        type='fighting',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892135-056mankey.png')
    Primeape = Pokemon(
        name='Primeape',
        type='fighting',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892055-057primeape.png')
    Growlithe = Pokemon(
        name='Growlithe',
        type='fire',
        personality='caring',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891827-058growlithe.png')
    Arcanine = Pokemon(
        name='Arcanine',
        type='fire',
        personality='caring',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891828-059arcanine.png')
    Poliwag = Pokemon(
        name='Poliwag',
        type='water',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891829-060poliwag.png')
    Poliwhirl = Pokemon(
        name='Poliwhirl',
        type='water',
        personality='logical',
        description= 'Although it can live in or out of water, Poliwhirl prefers to live underwater where it can escape from danger more easily.',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891830-061poliwhirl.png')
    Poliwrath = Pokemon(
        name='Poliwrath',
        type='water, fighting',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891831-062poliwrath.png')
    Abra = Pokemon(
        name='Abra',
        type='psychic',
        personality='logical',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891834-063abra.png')
    Kadabra = Pokemon(
        name='Kadabra',
        type='psychic',
        personality='logical',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891835-064kadabra.png')
    Alakazam = Pokemon(
        name='Alakazam',
        type='psychic',
        personality='logical',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891836-065alakazam.png')
    Machop = Pokemon(
        name='Machop',
        type='fighting',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892303-066machop.png')
    Machoke = Pokemon(
        name='Machoke',
        type='fighting',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892304-067machoke.png')
    Machamp = Pokemon(
        name='Machamp',
        type='fighting',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892305-068machamp.png')
    Bellsprout = Pokemon(
        name='Bellsprout',
        type='grass, poison',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898263-069bellsprout.png')
    Weepinbell = Pokemon(
        name='Weepinbell',
        type='grass, poison',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898264-070weepinbell.png')
    Victreebel = Pokemon(
        name='Victreebel',
        type='grass, poison',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898265-071victreebel.png')
    Tentacool = Pokemon(
        name='Tentacool',
        type='water, poison',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892306-072tentacool.png')
    Tentacruel = Pokemon(
        name='Tentacruel',
        type='water, poison',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892307-073tentacruel.png')
    Geodude = Pokemon(
        name='Geodude',
        type='rock, ground',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898243-074geodude.png')
    Graveler = Pokemon(
        name='Geodude',
        type='rock, ground',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898242-075graveler.png')
    Golem = Pokemon(
        name='Geodude',
        type='rock, ground',
        personality='ambitious',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892308-076golem.png')
    Ponyta = Pokemon(
        name='Ponyta',
        type='fire',
        personality='ambitious',
        description= 'Ponytas are weak at birth but grow strong as they run all day in fields and on mountains.',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892309-077ponyta.png')
    Rapidash = Pokemon(
        name='Rapidash',
        type='fire',
        personality='playful',
        description= 'Rapidash just loves to run. If it sees something faster than itself, it will give chase at top speed in the hopes of catching up.',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892310-078rapidash.png')
    Slowpoke = Pokemon(
        name='Slowpoke',
        type='water, psychic',
        personality='logical',
        description= 'It catches prey by dipping its tail in water at the side of a river. But it often forgets what it is doing and spends entire days just loafing at the water.',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892136-079slowpoke.png')
    Slowbro = Pokemon(
        name='Slowbro',
        type='water, psychic',
        personality='logical',
        description= 'Though usually dim witted, it seems to become inspired if the Shellder on its tail bites down.',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892311-080slowbro.png')
    Magnemite = Pokemon(
        name='Magnemite',
        type='electric, steel',
        personality='playful',
        description= 'It is attracted by electromagnetic waves. Its interest is piqued whenever it senses trainers using their pokegear.',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892312-081magnemite.png')
    Magneton = Pokemon(
        name='Magneton',
        type='electric, steel',
        personality='playful',
        description= 'When three Magnemite link together, their brains also become one. (They do not become three times more intelligent.)',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892313-082magneton.png')
    Farfetchd = Pokemon(
        name='Farfetchd',
        type='normal, flying',
        personality='caring',
        description= 'It cannot live without the stalk it holds, so it defends the stalk from attackers with its life.',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891838-083farfetch_d.png')
    Doduo = Pokemon(
        name='Doduo',
        type='normal, flying',
        personality='logical',
        description= 'The brains in its two heads appear to communicate emotions to each other with a telepathic power.',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892314-084doduo.png')
    Dodrio = Pokemon(
        name='Dodrio',
        type='normal, flying',
        personality='logical',
        description= 'It collects data and plans three times as wisely as a single-brained organism, but it may think too much and become immobilized.',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892315-085dodrio.png')
    Seel = Pokemon(
        name='Seel',
        type='water',
        personality='playful',
        description= 'Loves freezing cold conditions. Relishes swimming in a frigid climate of around 14F degrees. In the daytime, it is often found asleep on the seabed in shallow waters. ',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892316-086seel.png')
    Dewgong = Pokemon(
        name='Dewgong',
        type='water',
        personality='playful',
        description= 'It loves frigid seas with ice floes. The colder the temperature, the friskier it gets.',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892317-087dewgong.png')
    Grimer = Pokemon(
        name='Grimer',
        type='poison',
        personality='playful',
        description= 'Its sludgy and rubbery body can be forced through any opening, however small it may be. It enters sewer pipes to drink filthy wastewater.',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898266-088grimer.png')
    Muk = Pokemon(
        name='Muk',
        type='poison',
        personality='playful',
        description= 'They love to gather in smelly areas where sludge accumulates, making the stench around them worse.',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892056-089muk.png')

    Shellder = Pokemon(
        name='Shellder',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892137-090shellder.png')
    Cloyster = Pokemon(
        name='Cloyster',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892318-091cloyster.png')
    Gastly = Pokemon(
        name='Gastly',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891839-092gastly.png')
    Haunter = Pokemon(
        name='Haunter',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891840-093haunter.png')
    Gengar = Pokemon(
        name='Gengar',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891841-094gengar.png')
    Onix = Pokemon(
        name='Onix',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891842-095onix.png')
    Drowzee = Pokemon(
        name='Drowzee',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898267-096drowzee.png')
    Hypno = Pokemon(
        name='Hypno',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898268-097hypno.png')
    Krabby = Pokemon(
        name='Krabby',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891843-098krabby.png')
    Kingler = Pokemon(
        name='Kingler',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891844-099kingler.png')
    Voltorb = Pokemon(
        name='Voltorb',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892678-100voltorb.png')
    Electrode = Pokemon(
        name='Electrode',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892679-101electrode.png')
    Exeggcute = Pokemon(
        name='Exeggcute',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898269-102exeggcute.png')
    Exeggutor = Pokemon(
        name='Exeggutor',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898270-103exeggutor.png')
    Cubone = Pokemon(
        name='Cubone',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891845-104cubone.png')
    Marowak = Pokemon(
        name='Marowak',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891846-105marowak.png')
    Hitmonlee = Pokemon(
        name='Hitmonlee',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892680-106hitmonlee.png')
    Hitmonchan = Pokemon(
        name='Hitmonchan',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892681-107hitmonchan.png')
    Lickitung = Pokemon(
        name='Lickitung',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898271-108lickitung.png')
    Koffing = Pokemon(
        name='Koffing',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892138-109koffing.png')
    Weezing = Pokemon(
        name='Weezing',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898274-110weezing.png')
    Rhyhorn = Pokemon(
        name='Rhyhorn',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892682-111rhyhorn.png')
    Rhydon = Pokemon(
        name='Rhydon',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892683-112rhydon.png')
    Chansey = Pokemon(
        name='Chansey',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892684-113chansey.png')
    Tangela = Pokemon(
        name='Tangela',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898275-114tangela.png')
    Kangaskhan = Pokemon(
        name='Kangaskhan',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898276-115kangaskhan.png')
    Horsea = Pokemon(
        name='Horsea',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891847-116horsea.png')
    Seadra = Pokemon(
        name='Seadra',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891849-117seadra.png')
    Goldeen = Pokemon(
        name='Goldeen',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898280-118goldeen.png')
    Seaking = Pokemon(
        name='Seaking',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898282-119seaking.png')
    Staryu = Pokemon(
        name='Staryu',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892685-120staryu.png')
    Starmie = Pokemon(
        name='Starmie',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892686-121starmie.png')
    Mr_Mime = Pokemon(
        name='Mr. Mime',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898289-122mr._mime.png')
    Scyther = Pokemon(
        name='Scyther',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891850-123scyther.png')
    Jynx = Pokemon(
        name='Jynx',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898290-124jynx.png')
    Electabuzz = Pokemon(
        name='Electabuzz',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892687-125electabuzz.png')
    Magmar = Pokemon(
        name='Magmar',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1895802-126magmar.png')
    Pinsir = Pokemon(
        name='Pinsir',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891851-127pinsir.png')
    Tauros = Pokemon(
        name='Tauros',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891852-128tauros.png')
    Magikarp = Pokemon(
        name='Magikarp',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898291-129magikarp.png')
    Gyarados = Pokemon(
        name='Gyarados',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891635-130gyarados.png')
    Lapras = Pokemon(
        name='Lapras',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891870-131lapras.png')
    Ditto = Pokemon(
        name='Ditto',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891871-132ditto.png')
    Eevee = Pokemon(
        name='Eevee',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891681-133eevee.png')
    Vaporeon = Pokemon(
        name='Vaporeon',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891872-134vaporeon.png')
    Jolteon = Pokemon(
        name='Jolteon',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891873-135jolteon.png')
    Flareon = Pokemon(
        name='Flareon',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891874-136flareon.png')
    Porygon = Pokemon(
        name='Porygon',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1898292-137porygon.png')
    Omanyte = Pokemon(
        name='Omanyte',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892688-138omanyte.png')
    Omastar = Pokemon(
        name='Omastar',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892689-139omastar.png')
    Kabuto = Pokemon(
        name='Kabuto',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891959-140kabuto.png')
    Kabutops = Pokemon(
        name='Kabutops',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891960-141kabutops.png')
    Aerodactyl = Pokemon(
        name='Aerodactyl',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891961-142aerodactyl.png')
    Snorlax = Pokemon(
        name='Snorlax',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/0/4986/406919-143snorlax.png')
    Articuno = Pokemon(
        name='Articuno',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892690-144articuno.png')
    Zapdos = Pokemon(
        name='Zapdos',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892691-145zapdos.png')
    Molres = Pokemon(
        name='Molres',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891710-146moltres.png')
    Dratini = Pokemon(
        name='Dratini',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1910790-147dratini_ag_anime.png')
    Dragonair = Pokemon(
        name='Shellder',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891876-148dragonair.png')
    Dragonite = Pokemon(
        name='Dragonite',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1892692-149dragonite.png')
    Mewtwo = Pokemon(
        name='Mewtwo',
        type='poison',
        personality='playful',
        description= '',
        imgUrl= 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1895869-150mewtwo.png')



    db.session.add(Bulbasaur)
    db.session.add(Ivysaur)
    db.session.add(Venusaur)
    db.session.add(Charmander)
    db.session.add(Charmeleon)
    db.session.add(Charizard)
    db.session.add(Squirtle)
    db.session.add(Wartortle)
    db.session.add(Blastoise)
    db.session.add(Caterpie)
    db.session.add(Metapod)
    db.session.add(Butterfree)
    db.session.add(Weedle)
    db.session.add(Kakuna)
    db.session.add(Beedrill)
    db.session.add(Pidgey)
    db.session.add(Pidgeotto)
    db.session.add(Pidgeot)
    db.session.add(Rattata)
    db.session.add(Raticate)
    db.session.add(Spearow)
    db.session.add(Fearow)
    db.session.add(Ekans)
    db.session.add(Arbok)
    db.session.add(Pikachu)
    db.session.add(Raichu)
    db.session.add(Sandshrew)
    db.session.add(Sandslash)
    db.session.add(NidoranF)
    db.session.add(Nidorina)
    db.session.add(Nidoqueen)
    db.session.add(NidoranM)
    db.session.add(Nidorino)
    db.session.add(Nidoking)
    db.session.add(Clefairy)
    db.session.add(Clefable)
    db.session.add(Vulpix)
    db.session.add(Ninetales)
    db.session.add(Jigglypuff)
    db.session.add(Wigglytuff)
    db.session.add(Zubat)
    db.session.add(Golbat)
    db.session.add(Oddish)
    db.session.add(Gloom)
    db.session.add(Vileplume)
    db.session.add(Paras)
    db.session.add(Parasect)
    db.session.add(Venonat)
    db.session.add(Venomoth)
    db.session.add(Diglett)
    db.session.add(Dugtrio)
    db.session.add(Meowth)
    db.session.add(Persian)
    db.session.add(Psyduck)
    db.session.add(Golduck)
    db.session.add(Mankey)
    db.session.add(Primeape)
    db.session.add(Growlithe)
    db.session.add(Arcanine)
    db.session.add(Poliwag)
    db.session.add(Poliwhirl)
    db.session.add(Poliwrath)
    db.session.add(Abra)
    db.session.add(Kadabra)
    db.session.add(Alakazam)
    db.session.add(Machop)
    db.session.add(Machoke)
    db.session.add(Machamp)
    db.session.add(Bellsprout)
    db.session.add(Weepinbell)
    db.session.add(Victreebel)
    db.session.add(Tentacool)
    db.session.add(Tentacruel)
    db.session.add(Geodude)
    db.session.add(Graveler)
    db.session.add(Golem)
    db.session.add(Ponyta)
    db.session.add(Rapidash)
    db.session.add(Slowpoke)
    db.session.add(Slowbro)
    db.session.add(Magnemite)
    db.session.add(Magneton)
    db.session.add(Farfetchd)
    db.session.add(Doduo)
    db.session.add(Dodrio)
    db.session.add(Seel)
    db.session.add(Dewgong)
    db.session.add(Grimer)
    db.session.add(Muk)
    db.session.add(Shellder)
    db.session.add(Cloyster)
    db.session.add(Gastly)
    db.session.add(Haunter)
    db.session.add(Gengar)
    db.session.add(Onix)
    db.session.add(Drowzee)
    db.session.add(Hypno)
    db.session.add(Krabby)
    db.session.add(Kingler)
    db.session.add(Voltorb)
    db.session.add(Electrode)
    db.session.add(Exeggcute)
    db.session.add(Exeggutor)
    db.session.add(Cubone)
    db.session.add(Marowak)
    db.session.add(Hitmonlee)
    db.session.add(Hitmonchan)
    db.session.add(Lickitung)
    db.session.add(Koffing)
    db.session.add(Weezing)
    db.session.add(Rhyhorn)
    db.session.add(Rhydon)
    db.session.add(Chansey)
    db.session.add(Tangela)
    db.session.add(Kangaskhan)
    db.session.add(Horsea)
    db.session.add(Seadra)
    db.session.add(Goldeen)
    db.session.add(Seaking)
    db.session.add(Staryu)
    db.session.add(Starmie)
    db.session.add(Mr_Mime)
    db.session.add(Scyther)
    db.session.add(Jynx)
    db.session.add(Electabuzz)
    db.session.add(Magmar)
    db.session.add(Pinsir)
    db.session.add(Tauros)
    db.session.add(Magikarp)
    db.session.add(Gyarados)
    db.session.add(Lapras)
    db.session.add(Ditto)
    db.session.add(Eevee)
    db.session.add(Vaporeon)
    db.session.add(Jolteon)
    db.session.add(Flareon)
    db.session.add(Porygon)
    db.session.add(Omanyte)
    db.session.add(Omastar)
    db.session.add(Kabuto)
    db.session.add(Kabutops)
    db.session.add(Aerodactyl)
    db.session.add(Snorlax)
    db.session.add(Articuno)
    db.session.add(Zapdos)
    db.session.add(Molres)
    db.session.add(Dratini)
    db.session.add(Dragonair)
    db.session.add(Dragonite)
    db.session.add(Mewtwo)
    db.session.commit()

def undo_pokemon():
    db.session.execute('TRUNCATE pokemon RESTART IDENTITY CASCADE;')
    db.session.commit()
