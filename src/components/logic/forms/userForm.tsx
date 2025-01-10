import { CardContent } from "@/components/ui/card";
import { useState } from "react";
import AuthForm from "./authForm";
import EmailConfirmForm from "./emailConfirmForm";

interface UserFormProps {
  onSubmit: (data: any) => void;
  onSubmitEmail: (code: string) => void;
  name?: string;
  email?: string;
  password?: string;
}

const UserForm = ({ onSubmit, onSubmitEmail, name, email, password }: UserFormProps) => {
  const [sendEmailCode, setSendEmailCode] = useState<boolean>(false);

  const sendCodeEmail = (data: any) => {
    onSubmit(data);
    setSendEmailCode(true);
  };

  const confirmCodeEmail = (code: number) => {
    onSubmitEmail();
    console.log("Код:", code)
    setSendEmailCode(false);
  };

  return (
    <CardContent className="space-y-2">
        {sendEmailCode === false ? (
            <AuthForm
              name={name}
              email={email}
              password={password}
              onSubmit={sendCodeEmail}
            />
        ) : (
          <EmailConfirmForm
            onSubmit={confirmCodeEmail}
          />
        )}
    </CardContent>
  );
};




export default UserForm;