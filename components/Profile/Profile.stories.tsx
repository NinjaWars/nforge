import Profile from './Profile'
import mockPerson from '../mocks/mockPerson'
import { Author } from '../models/Author'

const mockPersons = new Array(4).fill(mockPerson)


export default {
    title: 'Components/Profile',
    decorators: [
    ],
    argTypes: {
        onClick: {
            action: 'Profile clicked'
        }
    }
}

export const Basic = (args: any) => {
    return (
        <>
            <Profile {...args} />
        </>
    )
}

Basic.args = {
    className: 'Profile-custom',
    person: mockPerson,
}

export const Multi = (args: any) => {
    const { persons, ...rest } = args
    return (
        <>
            {persons.map((person: Author, index: number) => (
                <Profile key={index} person={person} {...rest} />
            ))}

        </>
    )
}

Multi.args = {
    className: 'Profile-custom',
    persons: mockPersons,
}

