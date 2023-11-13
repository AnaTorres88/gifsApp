import { YellPipe } from './yell.pipe';

describe('YellPipe', () => {
  it('create an instance', () => {
    const pipe = new YellPipe();
    expect(pipe).toBeTruthy();
  });
  it('Retorna una cadena de texto con signos de exclamación al final', () => {
    const pipe = new YellPipe();
    const actual = pipe.transform('hola mundo');
    expect(actual).toEqual('HOLA MUNDO!!!!!');
  });
});
