import { DialogHeader, Dialog, DialogContent, DialogTrigger, DialogTitle } from '../../ui/dialog'
import { Button } from '../..//ui/button'
import AddTodoForm from '../forms/addTodoForm'
import { useState } from 'react';

const AddTodoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => setIsOpen(false);

  return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="w-full">
          <Button className="w-full font-semibold btn-black hover:bg-[#333]">
            + Добавить задачу
          </Button>
        </DialogTrigger>
        <DialogContent> 
          <DialogHeader>
            <DialogTitle>Добавить задачу</DialogTitle>
          </DialogHeader>
          <AddTodoForm onClose={closeDialog}/>
        </DialogContent>
      </Dialog>
    )
  }

export default AddTodoModal