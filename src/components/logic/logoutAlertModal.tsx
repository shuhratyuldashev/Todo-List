import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
  } from "@/components/ui/alert-dialog"
   
  const LogOutAlertDialog = () => {
    return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Вы уверены, что хотите выйти?</AlertDialogTitle>
        <AlertDialogDescription>
            После выхода из аккаунта ваши настройки не будут сохранены, и вам потребуется снова войти, чтобы продолжить работу
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="mt-5">
        <AlertDialogCancel className="hover:bg-orange-100 hover:text-[#FC3000]">Отмена</AlertDialogCancel>
        <AlertDialogAction className="bg-[#555] duration-300 hover:bg-[#FC3000] hover:text-orange-100">
            Подтвердить выход
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}


export default LogOutAlertDialog;