import 'whatwg-fetch';
import Constants from './Constants';

/**
 * Efetua a requisição HTTP
 * @param {string} method - Método HTTP utilizado (GET, POST, PUT, DELETE, ...)
 * @param {string} endpoint - URL da requisição
 * @param {Object} body - Objeto que será enviado no body da requisição (utilizado apenas para POST e PUT)
 */
const HTTPRequest = async (method, endpoint, body, hasFiles) => {
  function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response.json());
    } else {
      return Promise.reject(response.json());
    }
  }

  let send = {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': method === 'file' ? undefined : 'application/json'
    }
  };

  if (method === 'file' || hasFiles) {
    send.method = hasFiles ? method : 'post';
    send.body = body;
    delete send.headers['Accept'];
    delete send.headers['Content-Type'];
  } else if (method === 'post' || method === 'put') {
    send.body = JSON.stringify(body);
  }

  try {
    return await fetch(Constants.APIRoot + endpoint, send).then(status);
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Promise(resolve => resolve({ message: 'Falha na comunicação com o servidor.' }));
    }
    throw error;
  }
};

/**
 * Classe responsável por abstrair as chamadas HTTP
 */
class AppActions {
  /**
   * Método para requisições do tipo GET
   * @param {string} url - URL de requisição HTTP sem url variables
   * @param {Object} params - Objeto JSON não obrigatório que será convertido em url variables.
   */
  get(url, params) {
    /**
     * Caso a variável params seja preenchida o objeto enviado será convertido em url variables e concatenado na url enviada
     * Ex.: params = {apenasAtivos: true, emailConfirmado: false} -> ?apenasAtivos=true&emailConfirmado=false
     */
    if (params) {
      url += '?';
      Object.keys(params).forEach((parametro, indice) => {
        if (indice !== 0) url += '&';
        url += parametro + '=' + params[parametro];
      });
    }

    return HTTPRequest('get', url, null);
  }

  /**
   * Método para requisições do tipo POST
   * @param {string} url - URL de requisição HTTP
   * @param {Object} body - Objeto JSON que será enviado no body da request.
   */
  post(url, body) {
    return HTTPRequest('post', url, body);
  }

  /**
   * Método para requisições do tipo PUT
   * @param {string} url - URL de requisição HTTP
   * @param {Object} body - Objeto JSON que será enviado no body da request.
   */
  put(url, body, hasFiles) {
    return HTTPRequest('put', url, body, hasFiles);
  }

  /**
   * Método para requisições do tipo DELETE
   * @param {string} url - URL de requisição HTTP
   */
  delete(url) {
    return HTTPRequest('delete', url);
  }

  /**
   * Método para requisições do tipo POST para envio de upload
   * @param {string} url - URL de requisição HTTP
   * @param {Object} body - Objeto FormData que será enviado no body da request.
   */
  file(url, body) {
    return HTTPRequest('file', url, body);
  }
}

const Actions = new AppActions();
export default Actions;
