import { Search, SearchCompact, Tile } from '..'

const searchStory = {
    title: 'Components/Search',
    decorators: [
    ],
    argTypes: {
        onClick: {
            action: 'Search clicked'
        }
    }
}

export default searchStory;


export const SearchBasic = (args: any) => {
    return (
        <>
            <Search {...args} />
        </>
    )
}

SearchBasic.args = {
    className: 'Search-custom',
    label: 'Search Ninja',
    children: 'Children for Search'
}

export const WithDarkTile = (args: any) => (
    <Tile theme="dark">
        <Search {...args} />
    </Tile>
)

WithDarkTile.args = {
    ...SearchBasic.args,
}

export const SearchCompactVariation = (args: any) => (
    <SearchCompact {...args} />
)
SearchCompactVariation.args = {
    ...SearchBasic.args,
}