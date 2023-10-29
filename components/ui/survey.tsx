"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import axios from 'axios';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  patientName: z.string().min(2, {
    message: 'Patient name must be at least 2 characters.',
  }),
  patientNumber: z.string().regex(/^\d+$/, {
    message: 'Patient number must contain only digits.',
  }),
  caretakerName: z.string().min(2, {
    message: 'Caretaker name must be at least 2 characters.',
  }),
  caretakerNumber: z.string().regex(/^\d+$/, {
    message: 'Caretaker number must contain only digits.',
  }),
});

export function Survey() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientName: "",
      patientNumber: "",
      caretakerName: "",
      caretakerNumber: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // axios.post('/registration', values)
    // .then((response) => {
    //   console.log('Form submitted successfully', response.data);
    // })
    // .catch((error) => {
    //   console.error('Form submission failed', error);
    // });

    console.log(values)
  }

  return (
    <div className="w-1/2 mx-auto bg-[#635dff] p-8 rounded-[20px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="patientName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#14213d] text-md">Patient Name</FormLabel>
                <FormControl>
                  <Input className="bg-[#e5e5e5]" placeholder="..." {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="patientNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#14213d] text-md">Patient Number</FormLabel>
                <FormControl>
                  <Input className="bg-[#e5e5e5]" placeholder="..." {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />    

          <FormField
            control={form.control}
            name="caretakerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#14213d] text-md">Caretaker Name</FormLabel>
                <FormControl>
                  <Input className="bg-[#e5e5e5]" placeholder="..." {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />    

          <FormField
            control={form.control}
            name="caretakerNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#14213d] text-md">Caretaker Number</FormLabel>
                <FormControl>
                  <Input className="bg-[#e5e5e5]" placeholder="..." {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />    
          <div className="flex justify-center">
            <Button type="submit" className="mx-auto w-32 text-[#14213d] hover:bg-[#14213d] hover:text-[#e5e5e5] bg-[#e5e5e5]">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
