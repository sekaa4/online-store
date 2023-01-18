import getData from '../components/getData';
import { DataObject } from '../interfaces/Data';
import mockData from './mockData';

global.fetch = jest.fn().mockImplementationOnce(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  })
);

describe('check return value of getData function', () => {
  it('should return the data', async () => {
    const data: DataObject = await getData();
    expect(data.products).toBeDefined();
    expect(data.products.length).toBe(3);
    expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/products');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
