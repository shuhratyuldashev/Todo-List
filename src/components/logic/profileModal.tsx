import { Button } from "../ui/button";
import { DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";
import { DialogFooter, DialogHeader } from "../ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "../ui/input-otp";

interface iUserForm {
  username: string;
  email: string;
  password: string;
}

interface iPropsModal {
  onClose: () => void;
}

const ProfileModal = ({ onClose }: iPropsModal) => {
  const { register, handleSubmit, watch, formState: { errors, isDirty } } = useForm<iUserForm>({
    defaultValues: {
      username: "User Name",
      email: "usergmail@gmail.com",
      password: "userpassword",
    },
    mode: "onChange",
  });
  const [emailCode, setEmailCode] = useState(false);

  const formData = watch();

  const onSubmitEmail = () => {
    toast("Подтверждено", {
      description: `Ваши данные успешно обновлены на:\nИмя: ${formData.username}\nПочта: ${formData.email}\nПароль: ${formData.password}`,
    });
    console.log(formData);
    onClose();
    setEmailCode(false);
  };

  const onSubmitForm: SubmitHandler<iUserForm> = (data) => {
    toast("Вашу почту был отправлен код", {
      description: `Проверьте почту ${data.email}`,
    });
    console.log(data);
    setEmailCode(true);
  };

  return (
    <DialogContent aria-describedby="dialog-description">
      {!emailCode ? (
        <UserForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          isDirty={isDirty}
          onSubmitForm={onSubmitForm}
        />
      ) : (
        <EmailForm onSubmitEmail={onSubmitEmail} />
      )}
    </DialogContent>
  );
};

const UserForm = ({ register, handleSubmit, errors, isDirty, onSubmitForm }: any) => (
  <>
    <DialogHeader>
      <DialogTitle id="dialog-title">Редактировать профиль</DialogTitle>
      <DialogDescription id="dialog-description">Форма редактирования профиля пользователя</DialogDescription>
    </DialogHeader>
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Имя пользователя</Label>
          <Input
            autoComplete="off"
            id="name"
            {...register("username", {
              required: "Это поле обязательное",
              minLength: {
                value: 3,
                message: "Имя пользователя должно быть не менее 3 символов",
              },
              maxLength: {
                value: 16,
                message: "Имя пользователя должно быть не больше 16 символов",
              },
            })}
          />
          {errors.username && (
            <p className="text-[#FC3000] text-sm mt-1">{errors.username.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Почта</Label>
          <Input
            autoComplete="off"
            id="email"
            type="email"
            {...register("email", {
              required: "Это поле обязательное",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Введите корректный адрес электронной почты",
              },minLength: {
                value: 16,
                message: "Введите корректный адрес электронной почты",
              },
              maxLength: {
                value: 40,
                message: "Введите корректный адрес электронной почты",
              },
            })}
          />
          {errors.email && (
            <p className="text-[#FC3000] text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="password">Пароль</Label>
          <Input
            autoComplete="off"
            id="password"
            type="text"
            {...register("password", {
              required: "Это поле обязательное",
              minLength: {
                value: 8,
                message: "Пароль должен быть не менее 8 символов",
              },
              maxLength: {
                value: 16,
                message: "Пароль должен быть не больше 16 символов",
              },
            })}
          />
          {errors.password && (
            <p className="text-[#FC3000] text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
      </div>
      <DialogFooter className="mt-4">
        <Button disabled={!isDirty} type="submit" className="duration-300 hover:bg-[#FC3000] hover:text-orange-100">
          Отправить код на почту
        </Button>
      </DialogFooter>
    </form>
  </>
);

const EmailForm = ({ onSubmitEmail }: any) => (
  <>
    <DialogHeader>
      <DialogTitle id="dialog-title">Подтвердите код</DialogTitle>
      <DialogDescription id="dialog-description">Подтвердите код, который был прислан в вашу почту</DialogDescription>
    </DialogHeader>
    <div className="flex w-full justify-center items-center mt-3">
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
    <DialogFooter className="mt-4">
      <Button type="button" onClick={onSubmitEmail}>
        Подтвердить
      </Button>
    </DialogFooter>
  </>
);

export default ProfileModal;
