import { Character, Physical } from '.'

export interface NinjaModel extends Character, Physical {
    totalHealth: () => number
    healthPercent: () => number
    maxDamage: () => number
    damage: () => number
}
