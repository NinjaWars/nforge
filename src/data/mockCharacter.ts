import { Character } from 'models'
import avatarImage from 'images/avatar/sample_gravatar.png'

const mockCharacter: Character = {
    id: '23423-23423-23423-234',
    identity: 'George Washingtonz',
    health: 100,
    accountID: '12312312-12312-123-123231',
    CharProfile: {
        id: '12312-15234-23423-2342',
        identity: 'George Washingtonz',
        fallbackName: 'Bill Wash',
        avatarUrl: avatarImage,
    },
}

export default mockCharacter
