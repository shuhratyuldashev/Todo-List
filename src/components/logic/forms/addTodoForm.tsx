import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format, isBefore, startOfDay } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';

const todoSchema = z.object({
  title: z.string().min(1, {
    message: 'Заголовок должен состоять минимум из 1 символа',
  }).max(20, {
    message: "Заголовок должен состоять максимум из 25 символа"
  }),
  description: z.string().max(100, {
    message: 'Максимальное количество символов — 100',
  }),
  date: z
    .string()
    .nonempty({ message: 'Дата обязательна' })
    .refine((d) => new Date(d) >= startOfDay(new Date()), {
      message: 'Дата должна быть не раньше сегодняшнего дня',
    }),
});

const AddTodoForm = ({ onClose }: { onClose: () => void }) => {
  const form = useForm({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: '',
      description: '',
      date: '',
    },
  });

  const onSubmit = (data: object) => {
    console.log('Submitted Data:', data);
    onClose()
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Заголовок задачи</FormLabel>
              <FormControl>
                <Input autoComplete='off' placeholder="Введите задачу" {...field} />
              </FormControl>
              <FormMessage className="text-[#FC3000]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание задачи</FormLabel>
              <FormControl>
                <Textarea className='resize-none' autoComplete='off' placeholder="Введите описание..." {...field} />
              </FormControl>
              <FormMessage className="text-[#FC3000]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col mt-2.5">
              <FormLabel>Дата</FormLabel>
              <FormControl>
                <InputDate date={field.value} setDate={(date) => field.onChange(date)} />
              </FormControl>
              <FormMessage className="text-[#FC3000]" />
            </FormItem>
          )}
        />

        <Button type="submit" className="btn-black mt-4 hover:bg-[#FC3000]">
          Добавить задачу
        </Button>
      </form>
    </Form>
  );
};

interface DateProps {
  date: string;
  setDate: (date: string) => void;
}

const InputDate = ({ date, setDate }: DateProps) => {
  const isDateDisabled = (day: Date) => isBefore(day, startOfDay(new Date()));

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'flrx w-[250px] justify-start items-center text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="ml-auto order-1" />
          {date ? format(new Date(date), 'PPP', { locale: ru }) : 'Выбрать дату'}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          selected={date ? new Date(date) : undefined}
          onSelect={(selectedDate) => setDate(selectedDate?.toISOString() || '')}
          initialFocus
          disabled={(date) => isDateDisabled(date)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default AddTodoForm;
