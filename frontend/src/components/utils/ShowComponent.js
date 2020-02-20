import { Component } from 'react';

/**
 * Componente responsável por mostrar ou não um determinado conteúdo.
 * @param {boolean} case - condição para o componente ser renderizado ou não
 * @param {Component} children - conteúdo a ser renderizado
 */
export default class ShowComponent extends Component {
    render() {
        return this.props.case ? this.props.children : null;
    }
}
