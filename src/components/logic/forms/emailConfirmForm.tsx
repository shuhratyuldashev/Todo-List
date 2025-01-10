import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";

const emailFormSchema = z.object({
  code: z
    .string()
    .min(6, { message: "Код должен состоять из 6 цифр" })
    .regex(/^\d{6}$/, { message: "Код должен состоять только из цифр" }),
});

const EmailConfirmForm = ({ onSubmit }: any) => {
  const emailForm = useForm({
    resolver: zodResolver(emailFormSchema),
    mode: "all",
    defaultValues: {
      code: "",
    },
  });

  return (
    <Form {...emailForm}>
      <form onSubmit={emailForm.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={emailForm.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Подтвердите код</FormLabel>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={!emailForm.formState.isValid}
          className="mt-4 btn-black hover:bg-[#FC3000] hover:text-orange-100"
        >
          Отправить
        </Button>
      </form>
    </Form>
  );
};

export default EmailConfirmForm;
