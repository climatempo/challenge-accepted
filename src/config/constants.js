import React, { Component } from 'react';

export class Constants extends Component {
  static PORT = ':3000';
  static SERVERS = {
    TESTS: 'http://localhost',
    // TESTS: 'http://192.168.15.18', // Actio
    // TESTS: 'http://192.168.0.107', // Secco
    // TESTS: 'http://192.168.15.27', // Home
    // TESTS: 'http://192.168.1.93', // X-Apps
    // TESTS: 'http://179.228.196.232', // Server X-Apps
    // TESTS: 'http://192.168.43.106',
  };
  static HEADERS = {
    // "Access-Control-Allow-Credentials" : true,
    // 'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Application': 'application/json',
    'Content-Type': 'application/json'
  };

  static MODE = 'no-cors';

  static METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
  }
  static ROUTES = {
    SIGNUP: '/users/signup',
    SIGNIN: '/users/signin',
    USERS_UPDATE: '/users/update/',
    USERS_UPDATE_CURRENT_ACCOUNT: '/users/update/currentAccount/',
    GET_USER_BY_ID: '/users/',
    GET_ALL_FEEDBACKS: '/feedbacks',
    GET_ALL_REPORTS: '/reports',
    GET_ALL_USERS: '/users',
    ADD_NECESSITIE: '/necessities/add/',
    ADD_PRETENTION: '/pretentions/add/',
    ADD_VIABILIZATION: '/viabilizations/add/',
    GET_NECESSITIE_BY_ID: '/necessities/get/',
    ADD_FEEDBACK: '/feedbacks/add/',
    ADD_GOODNESS: '/goodness/add/',
    ADD_REPORT: '/reports/add/',
  }

  static BUTTON_LABELS = {
    EDIT_PROFILE: 'EDITAR PERFIL',
    FEEDBACK: 'FEEDBACK',
    HELP: 'AJUDAR',
    REQUEST: 'SOLICITAR',
    SEND: 'ENVIAR',
    SHARE: 'COMPARTILHAR',
    VIABILIZE: 'VIABILIZAR'
  }

  static TEXTS = {
    CURRENT_ACCOUNT: 'Conta Corrente',
    DESCRIPTION: 'Descrição',
    ID: '_id',
    WAGS_NEEDED: 'Wags Necessários',
    WAGS_EARNED: 'Wags Gerados',
    WAGS_VIABILIZED: 'Wags Viabilizados',
  }

  static COLORS = {
    BLACK: '#000000',
    BLUE: '#146eb2',
    DARK_GRAY: '#b2b2b2',
    GRAY: '#eceff4',
    GREEN: '#22d168',
    LIGHT_GRAY: '#f1f6ff',
    RED: '#db1258',
    STANDARD_GRAY: '#e9e9ef',
    WHITE: '#ffffff',
  }

  static FONT_SIZE = {
    SMALL: 10,
    NORMAL: 12,
    MEDIUM: 16,
    LARGE: 20
  }

  static CONTAINERS_TITLES = {
    PORTUGUESE: {
      ACTION: 'Ação',
      ADD_GOODNESS: 'Adicionar Boa Ação',
      ADD_NECESSITIES: 'Adicionar Necessidades',
      EDIT_PROFILE: 'Editar Perfil',
      FEED: 'Feed',
      FEEDBACK: 'Feedback',
      GOOD: 'Boa ação',
      GOODNESS: 'Boas ações',
      MY_ACTIONS: 'Minhas ações',
      NECESSITIE: 'Necessidade',
      NECESSITIES: 'Necessidades',
      PRETENTION: 'Intenção',
      PROFILE: 'Perfil',
      REPORT: 'Denúncia',
      SIGN_UP: 'Cadastrar',
      VIABILIZATION: 'Viabilização',
      VIABILIZATIONS: 'Viabilizações',
    },
    ENGLISH: {
      ACTION: 'Action',
      ADD_GOODNESS: 'Add Goodness',
      ADD_NECESSITIES: 'Add Necessities',
      EDIT_PROFILE: 'Edit Profile',
      FEED: 'Feed',
      FEEDBACK: 'Feedback',
      GOODNESS: 'Good Actions',
      NECESSITIES: 'Necessities',
      PRETENTION: 'Pretention',
      PROFILE: 'Profile',
      REPORT: 'Report',
      SIGN_UP: 'Sign Up',
      VIABILIZATION: 'Viabilizations',
    }
  }

  static ALIGNMENTS = {
    BOTTOM: 'bottom',
    CENTER: 'center',
    COLUMN: 'column',
    FLEX_END: 'flex-end',
    FLEX_START: 'flex-start',    
    LEFT: 'left',
    RIGHT: 'right',
    ROW: 'row',
    TOP: 'top',
    SPACE_AROUND: 'space-around',
    SPACE_BETWEEN: 'space-between',
    STRETCH: 'stretch'
  }

}