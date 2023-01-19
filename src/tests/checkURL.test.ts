import getUrl from '../components/getURL';

describe('Check return URL', () => {
  let url: URL;
  beforeEach(() => {
    url = getUrl('https://sekaa4-online-store.netlify.app/');
  });

  let newUrl: URL;
  beforeEach(() => {
    newUrl = new URL('https://sekaa4-online-store.netlify.app/');
  });

  it('should return new URL', () => {
    expect(url).toEqual(newUrl);
  });
});
