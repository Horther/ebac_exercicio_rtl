import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Conter dois comentários após o teste', () => {
    render(<PostComment />);

    fireEvent.change(screen.getByTestId('comTextArea'), {
        target: {
            value: 'Adicionado o 1 comentario'
        }
    });
    fireEvent.click(screen.getByTestId('comButton'))

    fireEvent.change(screen.getByTestId('comTextArea'), {
        target: {
            value: 'Adicionado o 2 comentario'
        }
    });
    fireEvent.click(screen.getByTestId('comButton'))

    expect(screen.getAllByTestId('comElem')).toHaveLength(2);
});
});

