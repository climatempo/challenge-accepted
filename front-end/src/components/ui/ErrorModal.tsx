import { Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'

interface IErrorModalProps {
    isOpen: any
    onClose: any
    errorTitle: string
    errorDescribe: string
}

/**
 * Utilizado para mostrar mensagens de erro da aplicação que são passadas como parâmetro
 * @param {IErrorModalProps} props Props para manipulação da modal e informações da descrição e titulo erro
 * @returns Modal de exibição de erros
 */
export const ErrorModal: React.FC<IErrorModalProps> = ({ isOpen, onClose, errorDescribe, errorTitle }) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Oops! Ocorreu um erro</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Heading size="md">{errorTitle ? errorTitle : 'Erro desconhecido'}</Heading>
                        <Text>{errorDescribe ? errorDescribe : 'Ocorreu um erro interno com o servidor😓, desculpe pelo transtorno.'}</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            OK
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}