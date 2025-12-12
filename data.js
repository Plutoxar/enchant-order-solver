const ARMOR = ["boots", "chestplate", "helmet", "leggings", "turtle_shell"]
const TOOLS = ["axe", "hoe", "pickaxe", "shovel"]
const MISC = ['carrot_on_a_stick', 'fishing_rod', 'flint_and_steel', 'warped_fungus_on_a_stick']

// Groups of enchantments, incompatible with eachother
const PROTECTION_ENCHANTS = ["fire_protection", "protection", "projectile_protection", "blast_protection"]
const DAMAGE_ENCHANTS = ["density", "smite", "bane_of_arthropods", "sharpness", "breach"]
const ENCHANT_GROUPS = [PROTECTION_ENCHANTS, DAMAGE_ENCHANTS]

const incompatible = (enchant) => {
    // returns a group of enchants, without the enchant itself
    for (group of ENCHANT_GROUPS) {
        if (group.includes(enchant)) {
            return group.filter(item => item !== enchant);
        }
    }
}

var data = {
    enchants: {
        "aqua_affinity": {
            "levelMax": "1",
            "weight": "2",
            "incompatible": [],
            "items": ["helmet", "turtle_shell"]
        },
        "bane_of_arthropods": {
            "levelMax": "5",
            "weight": "1",
            "incompatible": incompatible("bane_of_arthropods"),
            "items": ["sword", "axe", "mace", "spear"]
        },
        "binding_curse": {
            "levelMax": "1",
            "weight": "4",
            "incompatible": [],
            "items": [...ARMOR, "elytra", "pumpkin"]
        },
        "blast_protection": {
            "levelMax": "4",
            "weight": "2",
            "incompatible": incompatible("blast_protection"),
            "items": ARMOR
        },
        "breach": {
            "levelMax": "4",
            "weight": "2",
            "incompatible": [...incompatible("breach"), "impaling"],
            "items": ["mace"]
        },
        "channeling": {
            "levelMax": "1",
            "weight": "4",
            "incompatible": ["riptide"],
            "items": ["trident"]
        },
        "density": {
            "levelMax": "5",
            "weight": "1",
            "incompatible": [...incompatible("density"), "impaling"],
            "items": ["mace"]
        },
        "depth_strider": {
            "levelMax": "3",
            "weight": "2",
            "incompatible": ["frost_walker"],
            "items": ["boots"]
        },
        "efficiency": {
            "levelMax": "5",
            "weight": "1",
            "incompatible": [],
            "items": [...TOOLS, "shears"]
        },
        "feather_falling": {
            "levelMax": "4",
            "weight": "1",
            "incompatible": [],
            "items": ["boots"]
        },
        "fire_aspect": {
            "levelMax": "2",
            "weight": "2",
            "incompatible": [],
            "items": ["sword", "mace", "spear"]
        },
        "fire_protection": {
            "levelMax": "4",
            "weight": "1",
            "incompatible": incompatible("fire_protection"),
            "items": ARMOR
        },
        "flame": {
            "levelMax": "1",
            "weight": "2",
            "incompatible": [],
            "items": ["bow"]
        },
        "fortune": {
            "levelMax": "3",
            "weight": "2",
            "incompatible": ["silk_touch"],
            "items": TOOLS
        },
        "frost_walker": {
            "levelMax": "2",
            "weight": "2",
            "incompatible": ["depth_strider"],
            "items": ["boots"]
        },
        "impaling": {
            "levelMax": "5",
            "weight": "2",
            "incompatible": ["density", "breach"],
            "items": ["trident"]
        },
        "infinity": {
            "levelMax": "1",
            "weight": "4",
            "incompatible": ["mending"],
            "items": ["bow"]
        },
        "knockback": {
            "levelMax": "2",
            "weight": "1",
            "incompatible": [],
            "items": ["sword", "spear"]
        },
        "looting": {
            "levelMax": "3",
            "weight": "2",
            "incompatible": [],
            "items": ["sword", "spear"]
        },
        "loyalty": {
            "levelMax": "3",
            "weight": "1",
            "incompatible": ["riptide"],
            "items": ["trident"]
        },
        "luck_of_the_sea": {
            "levelMax": "3",
            "weight": "2",
            "incompatible": [],
            "items": ["fishing_rod"]
        },
        "lunge": {
            "levelMax": "3",
            "weight": "1",
            "incompatible": [],
            "items": ["spear"]
        },
        "lure": {
            "levelMax": "3",
            "weight": "2",
            "incompatible": [],
            "items": ["fishing_rod"]
        },
        "mending": {
            "levelMax": "1",
            "weight": "2",
            "incompatible": ["infinity"],
            "items": [...ARMOR, ...TOOLS, ...MISC, "sword", "brush", "bow", "shears", "shield", "elytra", "trident", "crossbow", "mace", "spear"]
        },
        "multishot": {
            "levelMax": "1",
            "weight": "2",
            "incompatible": ["piercing"],
            "items": ["crossbow"]
        },
        "piercing": {
            "levelMax": "4",
            "weight": "1",
            "incompatible": ["multishot"],
            "items": ["crossbow"]
        },
        "power": {
            "levelMax": "5",
            "weight": "1",
            "incompatible": [],
            "items": ["bow"]
        },
        "projectile_protection": {
            "levelMax": "4",
            "weight": "1",
            "incompatible": incompatible("projectile_protection"),
            "items": ARMOR
        },
        "protection": {
            "levelMax": "4",
            "weight": "1",
            "incompatible": incompatible("protection"),
            "items": ARMOR
        },
        "punch": {
            "levelMax": "2",
            "weight": "2",
            "incompatible": [],
            "items": ["bow"]
        },
        "quick_charge": {
            "levelMax": "3",
            "weight": "1",
            "incompatible": [],
            "items": ["crossbow"]
        },
        "respiration": {
            "levelMax": "3",
            "weight": "2",
            "incompatible": [],
            "items": ["helmet", "turtle_shell"]
        },
        "riptide": {
            "levelMax": "3",
            "weight": "2",
            "incompatible": ["channeling", "loyalty"],
            "items": ["trident"]
        },
        "sharpness": {
            "levelMax": "5",
            "weight": "1",
            "incompatible": incompatible("sharpness"),
            "items": ["sword", "axe", "spear"]
        },
        "silk_touch": {
            "levelMax": "1",
            "weight": "4",
            "incompatible": ["fortune"],
            "items": TOOLS
        },
        "smite": {
            "levelMax": "5",
            "weight": "1",
            "incompatible": incompatible("smite"),
            "items": ["sword", "axe", "mace", "spear"]
        },
        "soul_speed": {
            "levelMax": "3",
            "weight": "4",
            "incompatible": [],
            "items": ["boots"]
        },
        "sweeping": {
            "levelMax": "3",
            "weight": "2",
            "incompatible": [],
            "items": ["sword"]
        },
        "swift_sneak": {
            "levelMax": "3",
            "weight": "4",
            "incompatible": [],
            "items": ["leggings"]
        },
        "thorns": {
            "levelMax": "3",
            "weight": "4",
            "incompatible": [],
            "items": ARMOR
        },
        "unbreaking": {
            "levelMax": "3",
            "weight": "1",
            "incompatible": [],
            "items": [...ARMOR, ...TOOLS, ...MISC, "sword", "brush", "bow", "shears", "shield", "elytra", "pumpkin", "trident", "crossbow", "mace", "spear"]
        },
        "vanishing_curse": {
            "levelMax": "1",
            "weight": "4",
            "incompatible": [],
            "items": [...ARMOR, ...TOOLS, ...MISC, "sword", "brush", "bow", "shears", "shield", "elytra", "pumpkin", "trident", "crossbow", "mace", "spear"]
        },
        "wind_burst": {
            "levelMax": "3",
            "weight": "2",
            "incompatible": [],
            "items": ["mace"]
        }
    },

    items: [
        ...ARMOR,
        'elytra',

        'bow',
        'crossbow',
        'mace',
        'shield',
        'spear',
        'sword',
        'trident',

        ...TOOLS,
        'brush',
        'shears',

        ...MISC,
        'pumpkin',
        'book'
    ]
};

//module.exports = {data}
