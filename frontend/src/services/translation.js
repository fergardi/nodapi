const translation = {
  en: {
    language: {
      english: 'English',
      spanish: 'Spanish',
      change: 'You changed the language to English',
    },
    alert: {
      map: {
        away: 'You are too far away from this',
      },
      login: {
        ok: 'Welcome back, Hero',
        error: 'Invalid credentials',
        secure: 'Login to continue',
        logout: 'See you soon',
      },
      register: {
        ok: 'Welcome to Heroyc',
        error: 'Credentials in use',
      },
      battle: {
        start: 'A wild <strong>{monster}</strong> appears',
        win: 'The <strong>{monster}</strong> has been defeated',
        lose: 'You have been defeated',
        loot: {
          spell: 'You learned <span class="label label-{family}">{spell}</span>',
          recipe: 'You obtained a recipe for <span class="label label-{rarity}">{recipe}</span>',
          resource: 'You farmed <span class="label label-{rarity}">{resource}</span>',
          item: 'You looted <span class="label label-{rarity}">{item}</span>',
          skill: 'You adquired <span class="label label-{family}">{skill}</span>',
          gold: 'You earned <span class="label label-warning">{gold} gold</span>',
          experience: 'You earned <span class="label label-default">{experience} experience</span>',
        },
        melee: '<strong>{attacker}</strong> attacks <strong>{defender}</strong> and removes <span class="label label-danger">{damage} vitality</span>',
        dodge: '<strong>{attacker}</strong> attacks <strong>{defender}</strong>, but dodges the attack',
        magic: '<strong>{attacker}</strong> casts <span class="label label-{family}">{spell}</span> to <strong>{defender}</strong> and removes <span class="label label-danger">{damage} vitality</span>',
        heal: '<strong>{attacker}</strong> casts <span class="label label-{family}">{spell}</span> and heals <span class="label label-danger">{heal} vitality</span>',
        buff: '<strong>{attacker}</strong> casts <span class="label label-{family}">{skill}</span>',
        burn: '<strong>{attacker}</strong> <span class="label label-danger">Burns</span> <strong>{defender}</strong> and removes <span class="label label-danger">{quantity} vitality</span>',
        poison: '<strong>{attacker}</strong> <span class="label label-success">Poisons</span> <strong>{defender}</strong> and removes <span class="label label-success">{quantity} agility</span>',
        freeze: '<strong>{attacker}</strong> <span class="label label-primary">Frozens</span> <strong>{defender}</strong> and removes <span class="label label-primary">{quantity} intelligence</span>',
        stun: '<strong>{attacker}</strong> <span class="label label-info">Stuns</span> <strong>{defender}</strong> and removes <span class="label label-info">{quantity} defense</span>',
        shock: '<strong>{attacker}</strong> <span class="label label-warning">Shocks</span> <strong>{defender}</strong> and removes <span class="label label-warning">{quantity} strength</span>',
      },
      inventory: {
        equip: 'You equiped <span class="label label-{rarity}">{item}</span>',
      },
      city: {
        buy: 'You spent <span class="label label-warning">{gold} gold</span> to buy <span class="label label-{rarity}">{name}</span>',
      },
      inn: {
        accept: 'You accepted the quest <span class="label label-{rarity}">{name}</span>',
      },
      forge: {
        craft: 'You used <span class="label label-{originalRarity}">{original}</span> with <span class="label label-{resourceRarity}">{resource}</span> to create <span class="label label-{resultRarity}">{result}</span>',
      }
    },
    button: {
      attack: 'Attack',
      buy: 'Buy',
      logout: 'Logout',
      login: 'Login',
      register: 'Register',
      craft: 'Craft',
      accept: 'Accept',
    },
    panel: {
      login: 'Login',
      register: 'Register',
      items: 'Items',
      resources: 'Resources',
      spells: 'Spells',
      skills: 'Skills',
      inventory: 'Inventory',
      quests: 'Quests',
      recipes: 'Recipes',
    },
    title: {
      login: 'Login',
      world: 'World',
      player: 'Player',
      items: 'Items',
      resources: 'Resources',
      spells: 'Spells',
      skills: 'Skills',
      recipes: 'Recipes',
      monsters: 'Monsters',
      help: 'Help',
      home: 'Heroyc',
      tower: 'Tower',
      inn: 'Inn',
      dungeon: 'Dungeon',
      city: 'City',
      mine: 'Mine',
      forge: 'Forge',
      castle: 'Castle',
      ruins: 'Ruins',
      gold: 'Gold',
      platinum: 'Platinum',
      market: 'Market',
      account: 'Account',
      none: 'No results',
    },
    subtitle: {
      login: 'Login',
      world: 'World',
      player: 'Player',
      items: 'Items',
      resources: 'Resources',
      spells: 'Sorcery ',
      skills: 'Special habilities',
      recipes: 'Recipes',
      monsters: 'Monsters',
      help: 'Help',
      home: 'Home of the Brave',
      tower: 'Tower',
      inn: 'Inn',
      dungeon: 'Dungeon',
      city: 'City',
      mine: 'Mine',
      forge: 'Forge',
      castle: 'Castle',
      ruins: 'Ruins',
      location: 'Battle monsters for loot',
      market: 'Market',
    },
    placeholder: {
      min: 'Min',
      max: 'Max',
      items: 'Search items',
      resources: 'Search resources',
      spells: 'Search spells',
      skills: 'Search skills',
      recipes: 'Search recipes',
      monsters: 'Search monsters',
      nick: 'Nick',
      username: 'Email',
      password: 'Password',
      tower: 'Tower',
      inn: 'Search quests',
      dungeon: 'Dungeon',
      city: 'Search sales',
      mine: 'Mine',
      forge: 'Search recipes',
      castle: 'Castle',
      ruins: 'Ruins',
      market: 'Search sales',
    },
    item: {
      ring: {
        vitality: 'Vitality Ring',
        strength: 'Strength Ring',
        agility: 'Agility Ring',
        intelligence: 'Intelligence Ring',
        defense: 'Defense Ring',
        novice: 'Novice Ring',
      },
      helm: {
        novice: 'Novice Helm',
        chain: 'Chain Helm',
        plate: 'Plate Helm',
        wizard: 'Wizard Helm',
        witch: 'Witch Helm',
      },
      necklace: {
        stone: 'Stone Necklace',
        frozen: 'Frozen Necklace',
        novice: 'Novice Necklace',
        holy: 'Holy Necklace',
        gold: 'Gold Necklace',
        mana: 'Mana Necklace',
        life: 'Life Necklace',
      },
      sword: {
        novice: 'Novice Sword',
        elven: 'Elven Sword',
        curve: 'Curve Sword',
        gladius: 'Gladius Sword',
        mighty: 'Mighty Sword',
        thunder: 'Thunder Sword',
        flaming: 'Flaming Sword',
        frozen: 'Frozen Sword',
        venom: 'Venom Sword',
        dark: 'Dark Sword',
      },
      staff: {
        thunder: 'Thunder Staff',
        flaming: 'Flaming Staff',
        dark: 'Dark Staff',
        frozen: 'Frozen Staff',
        venom: 'Venom Staff',
      },
      bow: {
        curve: 'Curve Bow',
        hunter: 'Hunter Bow',
        golden: 'Golden Bow',
        sniper: 'Sniper Bow',
        phoenix: 'Phoenix Bow',
      },
      armor: {
        golden: 'Golden Armor',
        leather: 'Leather Armor',
        chain: 'Chain Armor',
        plate: 'Plate Armor',
        dragon: 'Dragon Armor',
        novice: 'Novice Armor',
      },
      shield: {
        golden: 'Golden Shield',
        novice: 'Novice Shield',
        metal: 'Metal Shield',
        stone: 'Stone Shield',
        dark: 'Dark Shield',
        mirror: 'Mirror Shield',
      },
      gloves: {
        novice: 'Novice Gloves',
        leather: 'Leather Gloves',
        elven: 'Elven Gloves',
        magic: 'Magic Gloves',
        metal: 'Metal Gloves',
        ninja: 'Ninja Gloves',
        scale: 'Scale Gloves',
      },
      boots: {
        winged: 'Winged Boots',
        novice: 'Novice Boots',
        strong: 'Strong Boots',
        elven: 'Elven Boots',
        dragon: 'Dragon Boots',
        stone: 'Stone Boots',
        hunter: 'Hunter Boots',
      },
      potion: {
        agility: 'Agility Potion',
        intelligence: 'Intelligence Potion',
        strength: 'Strength Potion',
        defense: 'Defense Potion',
        vitality: 'Vitality Potion',
        novice: 'Novice Potion',
      }
    },
    resource: {
      description: 'Used for crafting and quests',
      amethist: 'Amethist',
      coal: 'Coal',
      scale: 'Scale',
      emmerald: 'Emmerald',
      flask: 'Flask',
      fur: 'Fur',
      grape: 'Grape',
      ingot: {
        copper: 'Copper Ingot',
        ebony: 'Ebony Ingot',
        gold: 'Gold Ingot',
        metal: 'Metal Ingot',
        silver: 'Silver Ingot',
        steel: 'Steel Ingot',
      },
      lemmon: 'Lemmon',
      pear: 'Pear',
      raspberry: 'Raspberry',
      ruby: 'Ruby',
      saphire: 'Saphire',
      fang: 'Fang',
      skull: 'Skull',
      stone: 'Stone',
      strawberry: 'Strawberry',
      topaz: 'Topaz',
      wood: 'Wood',
    },
    spell: {
      fire1: 'Fire',
      fire2: 'Fire +',
      fire3: 'Fire ++',
      fire4: 'Fire +++',
      heal1: 'Heal',
      heal2: 'Heal +',
      heal3: 'Heal ++',
      heal4: 'Heal +++',
      ice1: 'Ice',
      ice2: 'Ice +',
      ice3: 'Ice ++',
      ice4: 'Ice +++',
      lightning1: 'Lightning',
      lightning2: 'Lightning +',
      lightning3: 'Lightning ++',
      lightning4: 'Lightning +++',
      shadow1: 'Shadow',
      shadow2: 'Shadow +',
      shadow3: 'Shadow ++',
      shadow4: 'Shadow +++',
    },
    skill: {
      agility1: 'Evasion',
      agility2: 'Evasion +',
      defense1: 'Hardness',
      defense2: 'Hardness +',
      vitality1: 'Vigor',
      vitality2: 'Vigor +',
      intelligence1: 'Illumination',
      intelligence2: 'Illumination +',
      strength1: 'Power',
      strength2: 'Power +',
    },
    monster: {
      abomination: 'Abomination',
      cyclops: 'Cyclops',
      demon: 'Demon',
      dragon: 'Dragon',
      gargoyle: 'Gargoyle',
      ghost: 'Ghost',
      golem: 'Golem',
      knight: 'Knight',
      liche: 'Liche',
      medusa: 'Medusa',
      mummy: 'Mummy',
      phoenix: 'Phoenix',
      rat: 'Rat',
      skeleton: 'Skeleton',
      snake: 'Snake',
      spider: 'Spider',
      wolf: 'Wolf',
      worm: 'Worm',
      yeti: 'Yeti',
      zombie: 'Zombie',
    },
    quest: {
      key: 'Mistery Key',
      chest: 'Treasure Chest',
      map: 'Treasure Map',
      mirror: 'Magic Mirror',
      scroll: 'Royal Scroll',
      telescope: 'Pirate Telescope',
      bone: 'Cursed Bone',
      torch: 'Fired Torch',
    }
  },
  es: {
    language: {
      english: 'Ingles',
      spanish: 'Español',
      change: 'Has cambiado el idioma a Español',
    },
    alert: {
      map: {
        away: 'Estas demasiado lejos de ese sitio',
      },
      login: {
        ok: 'Bienvenido de nuevo, Heroe',
        error: 'Credenciales incorrectas',
        secure: 'Inicia sesion para continuar',
        logout: 'Hasta la proxima',
      },
      register: {
        ok: 'Bienvenido a Heroyc',
        error: 'Credenciales en uso',
      },
      battle: {
        start: 'Un@ peligros@ <strong>{monster}</strong> aparece',
        win: 'Ell@ <strong>{monster}</strong> ha sido derrotado',
        lose: 'Has sido derrotado',
        loot: {
          spell: 'Has aprendido <span class="label label-{family}">{spell}</span>',
          recipe: 'Has obtenido la receta para <span class="label label-{rarity}">{recipe}</span>',
          resource: 'Has encontrado <span class="label label-{rarity}">{resource}</span>',
          item: 'Has obtenido <span class="label label-{rarity}">{item}</span>',
          skill: 'Has adquirido <span class="label label-{family}">{skill}</span>',
          gold: 'Has ganado <span class="label label-warning">{gold} oro</span>',
          experience: 'Has ganado <span class="label label-default">{experience} experiencia</span>',
        },
        melee: '<strong>{attacker}</strong> ataca a <strong>{defender}</strong> y quita <span class="label label-danger">{damage} vitalidad</span>',
        dodge: '<strong>{attacker}</strong> ataca a <strong>{defender}</strong>, pero falla el ataque',
        magic: '<strong>{attacker}</strong> lanza <span class="label label-{family}">{spell}</span> a <strong>{defender}</strong> y quita <span class="label label-danger">{damage} vitalidad</span>',
        heal: '<strong>{attacker}</strong> lanza <span class="label label-{family}">{spell}</span> y se cura <span class="label label-danger">{heal} vitalidad</span>',
        buff: '<strong>{attacker}</strong> se lanza <span class="label label-{family}">{skill}</span>',
        burn: '<strong>{attacker}</strong> <span class="label label-danger">Quema</span> a <strong>{defender}</strong> y quita <span class="label label-danger">{quantity} vitalidad</span>',
        poison: '<strong>{attacker}</strong> <span class="label label-success">Envenena</span> a <strong>{defender}</strong> y quita <span class="label label-success">{quantity} agilidad</span>',
        freeze: '<strong>{attacker}</strong> <span class="label label-primary">Congela</span> a <strong>{defender}</strong> y quita <span class="label label-primary">{quantity} inteligencia</span>',
        stun: '<strong>{attacker}</strong> <span class="label label-info">Aturde</span> a <strong>{defender}</strong> y quita <span class="label label-info">{quantity} defensa</span>',
        shock: '<strong>{attacker}</strong> <span class="label label-warning">Electrifica</span> a <strong>{defender}</strong> y quita <span class="label label-warning">{quantity} fuerza</span>',
      },
      inventory: {
        equip: 'Te has equipado con <span class="label label-{rarity}">{item}</span>',
      },
      city: {
        buy: 'Has gastado <span class="label label-warning">{gold} oro</span> en comprar <span class="label label-{rarity}">{name}</span>',
      },
      inn: {
        accept: 'Has aceptado la mision <span class="label label-{rarity}">{name}</span>',
      },
      forge: {
        craft: 'Has juntado <span class="label label-{originalRarity}">{original}</span> con <span class="label label-{resourceRarity}">{resource}</span> para crear <span class="label label-{resultRarity}">{result}</span>',
      }
    },
    button: {
      attack: 'Ataque',
      buy: 'Comprar',
      logout: 'Salir',
      login: 'Entrar',
      register: 'Registro',
      craft: 'Fabricar',
      accept: 'Aceptar',
    },
    panel: {
      login: 'Entrar',
      register: 'Registro',
      items: 'Objetos',
      resources: 'Recursos',
      spells: 'Hechizos',
      skills: 'Habilidades',
      inventory: 'Inventario',
      quests: 'Misiones',
      recipes: 'Recetas',
    },
    title: {
      login: 'Acceder',
      world: 'Mundo',
      player: 'Personaje',
      items: 'Objetos',
      resources: 'Recursos',
      spells: 'Hechizos',
      skills: 'Habilidades',
      recipes: 'Recetas',
      monsters: 'Monstruos',
      help: 'Ayuda',
      home: 'Heroyc',
      tower: 'Torre',
      inn: 'Posada',
      dungeon: 'Mazmorra',
      city: 'Ciudad',
      mine: 'Mina',
      forge: 'Forja',
      castle: 'Castillo',
      ruins: 'Ruinas',
      market: 'Mercado',
      gold: 'Oro',
      platinum: 'Platino',
      market: 'Mercado',
      account: 'Cuenta',
      none: 'No hay resultados',
    },
    subtitle: {
      login: 'Acceder',
      world: 'Mundo',
      player: 'Personaje',
      items: 'Objetos',
      resources: 'Recursos',
      spells: 'Hechizos',
      skills: 'Habilidades',
      recipes: 'Recetas',
      monsters: 'Monstruos',
      help: 'Ayuda',
      home: 'Hogar de los Valientes',
      tower: 'Torre',
      inn: 'Posada',
      dungeon: 'Mazmorra',
      city: 'Ciudad',
      mine: 'Mina',
      forge: 'Forja',
      castle: 'Castillo',
      ruins: 'Ruinas',
      location: 'Lucha con monstruos por recompensas',
      market: 'Mercado',
    },
    placeholder: {
      min: 'Min',
      max: 'Max',
      items: 'Buscar objetos',
      resources: 'Buscar recursos',
      spells: 'Buscar hechizos',
      skills: 'Buscar habilidades',
      recipes: 'Buscar recetas',
      monsters: 'Buscar monstruos',
      nick: 'Nombre',
      username: 'Email',
      password: 'Contraseña',
      tower: 'Torre',
      inn: 'Buscar misiones',
      dungeon: 'Mazmorra',
      city: 'Buscar ofertas',
      mine: 'Mina',
      forge: 'Buscar recetas',
      castle: 'Castillo',
      ruins: 'Ruinas',
      market: 'Buscar ofertas',
    },
    item: {
      ring: {
        vitality: 'Anillo Vital',
        strength: 'Anillo Fuerte',
        agility: 'Anillo Veloz',
        intelligence: 'Anillo Listo',
        defense: 'Anillo Duro',
        novice: 'Anillo Novato',
      },
      helm: {
        novice: 'Casco Novato',
        chain: 'Casco de Mallas',
        plate: 'Casco de Placas',
        wizard: 'Sombrero de Mago',
        witch: 'Sombrero de Brujo',
      },
      necklace: {
        stone: 'Collar Duro',
        frozen: 'Collar Helado',
        novice: 'Collar Novato',
        holy: 'Collar Sagrado',
        gold: 'Collar Dorado',
        mana: 'Collar de Mana',
        life: 'Collar Vital',
      },
      sword: {
        novice: 'Espada Novata',
        elven: 'Espada Elfica',
        curve: 'Espada Curva',
        gladius: 'Espada Gladius',
        mighty: 'Espada Mistica',
        thunder: 'Espada Electrica',
        flaming: 'Espada Llameante',
        frozen: 'Espada Heladora',
        venom: 'Espada Venenosa',
        dark: 'Espada Oscura',
      },
      staff: {
        thunder: 'Vara Electrica',
        flaming: 'Vara Llameante',
        dark: 'Vara Oscura',
        frozen: 'Vara Heladora',
        venom: 'Vara Venenosa',
      },
      bow: {
        curve: 'Arco Curvo',
        hunter: 'Arco de Cazador',
        golden: 'Arco Dorada',
        sniper: 'Arco Preciso',
        phoenix: 'Arco del Fenix',
      },
      armor: {
        golden: 'Armadura Dorada',
        leather: 'Armadura de Cuero',
        chain: 'Armadura de Malla',
        plate: 'Armadura de Placas',
        dragon: 'Armadura Dragona',
        novice: 'Armadura Novata',
      },
      shield: {
        golden: 'Escudo Dorado',
        novice: 'Escudo Novato',
        metal: 'Escudo de Metal',
        stone: 'Escudo de Piedra',
        dark: 'Escudo Oscuro',
        mirror: 'Escudo Espejo',
      },
      gloves: {
        novice: 'Guantes Novatos',
        leather: 'Guantes de Cuero',
        elven: 'Guantes Elficos',
        magic: 'Guantes Magicos',
        metal: 'Guantes de Metal',
        ninja: 'Guantes Ninjas',
        scale: 'Guantes de Placas',
      },
      boots: {
        winged: 'Botas Aladas',
        novice: 'Botas Novatas',
        strong: 'Botas Duras',
        elven: 'Botas Elficas',
        dragon: 'Botas Draconicas',
        stone: 'Botas de Piedra',
        hunter: 'Botas de Cazador',
      },
      potion: {
        agility: 'Pocion Agil',
        intelligence: 'Pocion Lista',
        strength: 'Pocion Fuerte',
        defense: 'Pocion Dura',
        vitality: 'Pocion Vital',
        novice: 'Pocion Novata',
      }
    },
    resource: {
      description: 'Empleado para recetas y misiones',
      amethist: 'Amatista',
      coal: 'Carbon',
      fang: 'Colmillo',
      emmerald: 'Esmeralda',
      flask: 'Frasco',
      fur: 'Pelo',
      grape: 'Uva',
      ingot: {
        copper: 'Lingote de Cobre',
        ebony: 'Lingote de Ebano',
        gold: 'Lingote de Oro',
        metal: 'Lingote de Metal',
        silver: 'Lingote de Plata',
        steel: 'Lingote de Acero',
      },
      lemmon: 'Limon',
      pear: 'Pera',
      raspberry: 'Mora',
      ruby: 'Rubi',
      saphire: 'Zafiro',
      scale: 'Escama',
      skull: 'Calavera',
      stone: 'Piedra',
      strawberry: 'Fresa',
      topaz: 'Topacio',
      wood: 'Madera',
    },
    spell: {
      fire1: 'Fuego',
      fire2: 'Fuego +',
      fire3: 'Fuego ++',
      fire4: 'Fuego +++',
      heal1: 'Cura',
      heal2: 'Cura +',
      heal3: 'Cura ++',
      heal4: 'Cura +++',
      ice1: 'Hielo',
      ice2: 'Hielo +',
      ice3: 'Hielo ++',
      ice4: 'Hielo +++',
      lightning1: 'Rayo',
      lightning2: 'Rayo +',
      lightning3: 'Rayo ++',
      lightning4: 'Rayo +++',
      shadow1: 'Sombra',
      shadow2: 'Sombra +',
      shadow3: 'Sombra ++',
      shadow4: 'Sombra +++',
    },
    skill: {
      agility1: 'Evasion',
      agility2: 'Evasion +',
      defense1: 'Dureza',
      defense2: 'Dureza +',
      intelligence1: 'Iluminacion',
      intelligence2: 'Iluminacion +',
      strength1: 'Potencia',
      strength2: 'Potencia +',
      vitality1: 'Vigor',
      vitality2: 'Vigor +',
    },
    monster: {
      abomination: 'Abominacion',
      cyclops: 'Ciclope',
      demon: 'Demonio',
      dragon: 'Dragon',
      gargoyle: 'Gargola',
      ghost: 'Fantasma',
      golem: 'Golem',
      knight: 'Caballero',
      liche: 'Liche',
      medusa: 'Medusa',
      mummy: 'Momia',
      phoenix: 'Fenix',
      rat: 'Rata',
      skeleton: 'Esqueleto',
      snake: 'Serpiente',
      spider: 'Araña',
      wolf: 'Lobo',
      worm: 'Gusano',
      yeti: 'Yeti',
      zombie: 'Zombi',
    },
    quest: {
      key: 'Llave Misteriosa',
      chest: 'Cofre del Tesoro',
      map: 'Mapa del Tesoro',
      mirror: 'Espejo Magico',
      scroll: 'Pergamino Real',
      telescope: 'Telescopio Pirata',
      bone: 'Hueso Maldito',
      torch: 'Antorcha Encendida',
    }
  }
};

export default translation;