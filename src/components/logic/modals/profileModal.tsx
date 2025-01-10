import { DialogContent, DialogDescription, DialogTitle } from "../../ui/dialog";
import { DialogHeader } from "../../ui/dialog";
import { SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import UserForm from "../forms/userForm";

interface iUserForm {
  name: string;
  email: string;
  password: string;
}

interface iPropsModal {
  onClose: () => void;
}

const ProfileModal = ({ onClose }: iPropsModal) => {
  
  const [emailCode, setEmailCode] = useState(false);

  const user = {
    name: "User name",
    email: "usertest@gmail.com",
    password: "12345678"
  }

  const onSubmitEmail = (code: string) => {
    toast.success("Подтверждено", {
      description: "Ваши данные успешно обновлены",
    });
    console.log(code);
    onClose();
    setEmailCode(false);
  };

  const onSubmitForm: SubmitHandler<iUserForm> = (data) => {
    toast.info("Вашу почту был отправлен код", {
      description: `Проверьте почту ${data.email}`,
    });
    console.log(data);
    setEmailCode(true);
  };

  return (
    <DialogContent aria-describedby="dialog-description">
      <DialogHeader>
        <DialogTitle id="dialog-title">Редактировать профиль</DialogTitle>
        <DialogDescription id="dialog-description">Форма редактирования профиля пользователя</DialogDescription>
      </DialogHeader>
      <UserForm
        name={user.name}
        email={user.email}
        password={user.password}
        emailCode={emailCode}
        onSubmitEmail={onSubmitEmail}
        onSubmit={onSubmitForm}
      />
    </DialogContent>
  );
};

export default ProfileModal;
