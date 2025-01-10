import { DialogHeader, Dialog, DialogContent, DialogTitle, DialogTrigger } from '../../ui/dialog'
import { Button } from '../../ui/button'
import { Archive } from 'lucide-react'


const ArchiveTodosModal = () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
           <Button
            variant="destructive"
            className="flex items-center justify-center font-semibold btn-orange-light hover:bg-orange-600 hover:text-orange-100"
            >
            <Archive strokeWidth={2.25} />
            Архив задач
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Архив задач</DialogTitle>
          </DialogHeader>
          <div></div>
        </DialogContent>
      </Dialog>
    )
  }

export default ArchiveTodosModal
