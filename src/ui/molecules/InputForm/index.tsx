import { InputHTMLAttributes } from "react";
import { Input, Flex, Label, Text } from "../../atoms";

interface Props extends InputHTMLAttributes<HTMLElement> {
  labelText: string;
  name: string;
  error?: string;
}

const InputForm = ({ labelText, name, error, ...rest }: Props) => {
  return (
    <Flex flexDirection="column" width="100%">
      <Label htmlFor={name}>{labelText}</Label>
      <Input id={name} {...rest} color='black'/>
      <Text color='warning' textAlign='start' height="20.5px">{error}</Text>
    </Flex>
  );
};

export default InputForm;
