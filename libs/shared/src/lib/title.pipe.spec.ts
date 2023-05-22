import { TitlePipe } from './title.pipe';

describe('TitlePipe', () => {
  it('create an instance', () => {
    const pipe = new TitlePipe();
    expect(pipe.transform('toto')).toEqual('totoTitles');
  });
});
