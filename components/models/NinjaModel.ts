import { Character, Physical } from 'models'

export interface NinjaModel extends Character, Physical {
    totalHealth: () => number
    healthPercent: () => number
    maxDamage: () => number
    damage: () => number
}
