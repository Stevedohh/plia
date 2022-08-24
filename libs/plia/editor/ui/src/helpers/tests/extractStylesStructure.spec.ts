import { ComponentNames, Structure } from '@plia/plia/types';
import { extractStylesStructure } from '../extractStylesStructure';

describe('extractStylesStructure related tests', () => {
  it('Should extract all styles from structure', () => {
    const structMock: Structure = {
      component: ComponentNames.BLOCK,
      id: 'adds',
      children: [
        {
          component: ComponentNames.BLOCK,
          id: 'a33s',
          className: 'fafa',
          styles: { display: 'flex' },
          children: [
            {
              component: ComponentNames.BLOCK,
              id: 'as',
              className: 'fasf',
              styles: { display: 'block' },
              children: [
                {
                  component: ComponentNames.BLOCK,
                  id: 'as',
                  className: 'fasfttrt',
                  styles: { display: 'list-item' },
                },
              ],
            },
          ],
        },
        {
          component: ComponentNames.BLOCK,
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
