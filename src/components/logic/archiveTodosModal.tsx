import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { DialogHeader } from '../ui/dialog'
import { Button } from '../ui/button'
import { HiMiniArchiveBoxArrowDown } from 'react-icons/hi2'


const ArchiveTodosModal = () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
           <Button
            variant="destructive"
            className="flex items-center justify-center font-semibold btn-orange-light hover:bg-orange-600 hover:text-orange-100"
            >
            <HiMiniArchiveBoxArrowDown className="mr-2" />
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
