/* eslint-disable space-before-function-paren */

import { DataStore } from '@aws-amplify/datastore'
import createNinja from 'control/createNinja'
import { Character, Physical } from 'models'
import { NinjaModel } from 'models/NinjaModel'
import { createContext, useContext, useState, useEffect } from 'react'
import logger from 'utils/logger'

interface NinjaInfo {
    loading: boolean
    ninja: undefined | NinjaModel,
    error?: string,
    utils?: {
        refreshNinja?: () => void
    },
}

/**
 * Shell for the character context
 */
const CharacterContext = createContext<NinjaInfo>({
    ninja: undefined,
    loading: true,
    error: undefined,
    utils: {
        refreshNinja: undefined,
    }
})

interface CharacterProviderProps {
    mock?: boolean,
    [key: string]: any,
}

/**
 * Pull the character initially
 * @param props
 * @returns
 */
const CharacterProvider = ({ mock = false, ...rest }: CharacterProviderProps) => {
    const [finalError, setFinalError] = useState<string | undefined>()
    const [ninja, setNinja] = useState<NinjaModel>()
    const [loading, setLoading] = useState<boolean>(true)
    const obtainNinja = async () => {
        const charId = '5555'
        try {
            // Need to do this better async
            const character = await DataStore.query(Character, charId)
            const physicalId = '234-234-234-234'
            const physical = await DataStore.query(Physical, physicalId)

            const ninjaData = character && physical ? createNinja(character, physical) : undefined
            setNinja(ninjaData)
            setLoading(false)
        } catch (error) {
            logger().log('Error during obtaining of character for CharacterProvider', error)
            setFinalError('Unable to obtain ninja info')
            setLoading(false)
        }
    }
    const utils = {
        refreshNinja: obtainNinja
    }
    useEffect(() => {
        if (!mock) {
            obtainNinja()
        }
        return () => { }
    }, [mock])
    return (
        <CharacterContext.Provider value={{ loading, ninja, error: finalError, utils }} {...rest} />
    )
}

const useCharacter = () => useContext(CharacterContext)

export { useCharacter, CharacterProvider }
