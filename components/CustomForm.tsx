"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, UseControllerReturn } from "react-hook-form";
import { FormFieldType } from "./forms/PatientForm";
interface CustomProps {
  control: Control<FieldValues>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormate?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: FieldValues) => React.ReactNode;
}
const RenderField = ({field,props}:{field:UseControllerReturn['field'];props:CustomProps}) => {
  return <Input type="text" placeholder="John Doe" />;
};
const CustomForm = (props: CustomProps) => {
    const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {fieldType != FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className="shad-error"/>
        </FormItem>
      )}
    />
  );
};

export default CustomForm;
