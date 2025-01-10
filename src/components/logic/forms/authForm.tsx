import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface iAuthFormProps {
    name?: string;
    email?: string;
    password?: string;
    onSubmit: (data: any) => void;
}

const formSignUpSchema = z.object({
    name: z.string()
    .nonempty({ message: "Поле обязательно" }) 
    .max(20, { message: "Имя пользователя не может быть больше 20 символов" }),
    email: z.string()
    .nonempty({ message: "Поле обязательно" }) 
    .min(1, {
        message: "Почта должена быть минимум из 6 символов" 
    }).max(40, { 
        message: "Пароль должен быть максимум из 16 символов" 
    }),
    password: z.string()
    .nonempty({ message: "Поле обязательно" }) 
    .min(8, { message: "Пароль должен быть минимум из 8 символов" })
    .max(16, { message: "Пароль должен быть максимум из 16 символов" }),
})

const AuthForm = ({  onSubmit, name, email , password }: iAuthFormProps) => {
    const formSingUp = useForm({
        resolver: zodResolver(formSignUpSchema),
        mode: "all",
        defaultValues: {
            name: name,
            email: email,
            password: password
        }
    })

    return (
    <Form {...formSingUp}>
    <form onSubmit={formSingUp.handleSubmit(onSubmit)}>
        <FormField
            control={formSingUp.control}
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
            control={formSingUp.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Почта</FormLabel>
                <FormControl>
                    <Input autoComplete="off" {...field} type="email" />
                </FormControl>
                <FormMessage className="text-[#FC3000]"/>
                </FormItem>
            )}
            />
        <FormField
            control={formSingUp.control}
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
        <Button
        disabled={!formSingUp.formState.isDirty}
        type="submit"
        className="mt-4 btn-black hover:bg-[#FC3000] hover:text-orange-100"
        >
        Отправить код в почту
        </Button>
    </form>
    </Form>
)};
  
export default AuthForm