import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import UserForm from "./userForm";
import SignInForm from "./signInForm";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface iUserForm {
  username: string;
  email: string;
  password: string;
}

const RegisterForm = () => {

  const onSubmitEmail = () => {
    toast.success("Подтверждено", {
      description: "Вы успешно зарегистрировались как пользователь",
    });
  };

  const onSubmitForm = (user: iUserForm) => {
    console.log("Отправленные данные:", user);
    toast.info("Вашу почту был отправлен код", {
      description: `Проверьте почту ${user.email}`,
    });
  };

  return (
    <Tabs defaultValue="account" className="w-[450px] mt-[25vh]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Зарегистрироваться</TabsTrigger>
        <TabsTrigger value="password">Вход в аккаунт</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Зарегистрироваться</CardTitle>
            <CardDescription>
               Создайте аккаунт для доступа ко всем функциям.
            </CardDescription>
           </CardHeader>
          <UserForm
            onSubmitEmail={onSubmitEmail}
            onSubmit={onSubmitForm}
          />
          </Card>
      </TabsContent>
      <TabsContent value="password">
        <SignInForm />
      </TabsContent>
    </Tabs>
  );
};

export default RegisterForm;
