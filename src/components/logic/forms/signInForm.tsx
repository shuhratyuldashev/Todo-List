import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSignInSchema = z.object({
    name: z.string()
      .nonempty({ message: "Поле обязательно" }) 
      .max(20, { message: "Имя пользователя не может быть больше 20 символов" }),
    password: z.string()
      .nonempty({ message: "Поле обязательно" }) 
      .min(8, { message: "Пароль должен быть минимум из 8 символов" })
      .max(16, { message: "Пароль должен быть максимум из 16 символов" }),
});


const SignInForm = () => {
    const formSignIn = useForm({
        resolver: zodResolver(formSignInSchema),
        mode: "all", 
    })

    
  const onSubmit = (data: any) => {
    console.log("Вход:", data);
    toast.success("Вход выполнен", {
      description: `Добро пожаловать, ${data.name}!`,
    });
  };

    return (
        <Form {...formSignIn}>
        <Card>
        <form onSubmit={formSignIn.handleSubmit(onSubmit)}>
        <CardHeader>
            <CardTitle>Вход в аккаунт</CardTitle>
            <CardDescription>
                Введите свой текущий пароль для доступа к вашему аккаунту.
            </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
            <FormField
                control={formSignIn.control}
                name="name"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Имя</FormLabel>
                    <FormControl>
                    <Input autoComplete="off" {...field} />
                    </FormControl>
                    <FormMessage className="text-[#FC3000]"/>
                </FormItem>
                )}
            />
            <FormField
                control={formSignIn.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Пароль</FormLabel>
                    <FormControl>
                        <Input autoComplete="off" {...field} type="password" />
                    </FormControl>
                    <FormMessage className="text-[#FC3000]"/>
                    </FormItem>
                )}
                />
            </CardContent>
            <CardFooter>
            <Button
            type="submit"
            className="mt-4 btn-black hover:bg-[#FC3000] hover:text-orange-100"
            >
            Войти в систему
            </Button>
            </CardFooter>
        </form>
        </Card>
        </Form>
    );
};

export default SignInForm;
  