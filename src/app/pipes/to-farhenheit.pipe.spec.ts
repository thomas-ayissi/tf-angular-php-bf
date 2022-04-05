import { ToFarhenheitPipe } from './to-farhenheit.pipe';

describe('ToFarhenheitPipe', () => {
  it('create an instance', () => {
    const pipe = new ToFarhenheitPipe();
    expect(pipe).toBeTruthy();
  });
});
