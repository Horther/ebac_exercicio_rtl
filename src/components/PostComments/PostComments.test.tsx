import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Conter dois comentários após o teste', () => {
    render(<PostComment/>);

    fireEvent.change(screen.getByTestId('comTextArea'), {
        target: {
            value: 'Adicionado o 1 cementario'
        }
    });
    fireEvent.click(screen.getByTestId('comButton'))

    fireEvent.change(screen.getByTestId('comTextArea'), {
        target: {
            value: 'Adicionado o 2 cementario'
        }
    });
    fireEvent.click(screen.getByTestId('comButton'))

    expect(screen.getAllByTestId('comElem')).toHaveLength(2);
});
});

