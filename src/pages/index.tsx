import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input';

// type SignInFormData = {
//   email: string;
//   password: string;
// };

const singInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(singInFormSchema),
  });

  const { errors } = formState;

  // const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  // };

  return (
    <Flex w='100' h='100vh' align='center' justify='center'>
      <Flex
        as='form'
        w='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDir='column'
        // onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Input name='email' type='email' label='E-Mail' />
          <Input name='password' type='password' label='Senha' />
        </Stack>

        <Button
          type='submit'
          mt='6'
          colorScheme='pink'
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
