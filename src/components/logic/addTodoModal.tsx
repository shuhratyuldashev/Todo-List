import { DialogHeader, Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Label } from '../ui/label'

const AddTodoModal = () => {
    return (
      <Dialog>
        <DialogTrigger className="w-full">
          <Button className="w-full font-semibold bg-[#555] hover:bg-[#444]">
            + Добавить задачу
          </Button>
        </DialogTrigger>
        <DialogContent> {/* Используем fixed для полноэкранного отображения и z-50 для верхнего слоя */}
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
