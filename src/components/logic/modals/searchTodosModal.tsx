import { useState } from "react"
import { DialogHeader, DialogContent, DialogTitle } from "../../ui/dialog"
import SearchForm from "../forms/searchForm"

const SearchTodosModal = () => {
    const [query, setQuery] = useState('')

    const handleSearchSubmit = () => {
        setTimeout(() => {
            console.log(query.toLocaleLowerCase())
        }, 1000)
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Поиск задач</DialogTitle>
                <div>
                    <SearchForm query={query} setQuery={setQuery} onSubmit={handleSearchSubmit} />
                </div>
            </DialogHeader>
        </DialogContent>
    )
}

export default SearchTodosModal
