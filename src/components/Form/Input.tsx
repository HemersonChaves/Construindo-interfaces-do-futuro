import { Input as ChackraInput,  FormLabel, FormControl, InputProps as ChakraInputProps } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
({name, label, ...rest}, ref)  => {
    return (
        <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChackraInput
                name={name}
                type='email'
                id={name}
                focusBorderColor='pink.500'
                bgColor='gray.500'
                variant='filled'
                _hover={{
                    bgColor: 'gray.900',
                }}
                ref={ref}
                size='lg'
                {...rest}
            />
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)