import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
import { DialogHeader } from '../ui/dialog'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'

const AddTodoModal = () => {
    return (
      <Dialog>
        <DialogTrigger className="w-full">
          <Button className="w-full font-semibold bg-[#555] hover:bg-[#444]">
            + Добавить задачу
          </Button>
        </DialogTrigger>
        <DialogContent className="fixed inset-0 z-50"> {/* Используем fixed для полноэкранного отображения и z-50 для верхнего слоя */}
          <DialogHeader>
            Добавить задачу
          </DialogHeader>
          <form>
            <Label>Заголовок задачи</Label>
            <Button>Создать</Button>
          </form>
        </DialogContent>
      </Dialog>
    )
  }

export default AddTodoModal
