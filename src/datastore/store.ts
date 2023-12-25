type StoreType = 'user' | 'post' | 'comment'

interface QueryInterface {
    storeType: Record<StoreType, Record<string, string | number | object>>,
    id: string
}


const DataStore = {
    query: async (storeType: QueryInterface["storeType"], id: QueryInterface["id"]) => {
        return { type: storeType, id: id }
    }

}

export default DataStore