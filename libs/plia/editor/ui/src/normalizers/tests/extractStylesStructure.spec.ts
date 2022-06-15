import { Structure } from '@plia/plia/types';
import { extractStylesStructure } from '../extractStylesStructure';

describe('extractStylesStructure related tests', () => {
  it('Should extract all styles from structure', () => {
    const structMock: Structure = {
      component: 'Block',
      id: 'adds',
      children: [
        {
          component: 'Block',
          id: 'a33s',
          className: 'fafa',
          styles: { display: 'flex' },
          children: [
            {
              component: 'Block',
              id: 'as',
              className: 'fasf',
              styles: { display: 'block' },
              children: [
                {
                  component: 'Block',
                  id: 'as',
                  className: 'fasfttrt',
                  styles: { display: 'list-item' },
                },
              ],
            },
          ],
        },
        {
          component: 'Block',
          id: 'asttt',
          className: 'fafqwa',
          styles: { display: 'grid' },
        },
      ],
    };

    const result = extractStylesStructure(structMock);

    expect(result).toStrictEqual([
      { className: 'fafa', cssProperties: { display: 'flex' } },
      { className: 'fasf', cssProperties: { display: 'block' } },
      { className: 'fasfttrt', cssProperties: { display: 'list-item' } },
      { className: 'fafqwa', cssProperties: { display: 'grid' } },
    ]);
  });
});
