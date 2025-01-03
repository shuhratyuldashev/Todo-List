import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import { DialogHeader } from "../ui/dialog"

const SearchTodosModal = () => {
    return (
        <Dialog>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Поиск задач</DialogTitle>
                </DialogHeader>
                <div></div>
            </DialogContent>
        </Dialog>
    )
}

export default SearchTodosModal