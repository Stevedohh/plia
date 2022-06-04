import { updateComponentProps } from '../structure.service';
import { structureMock, updatedStructureMock } from './mocks/structure.mock';

describe('Structure service related test', () => {
  describe('updateComponentProps related tests', () => {
    it('Should update structure props', () => {
      const struct = { ...structureMock };

      updateComponentProps(struct, '1f', { text: 'some text' });

      expect(struct).toStrictEqual(updatedStructureMock);
    });

    it('Should return null if children empty', () => {
      const struct = { ...structureMock };
      struct.children = [];

      const result = updateComponentProps(struct, '1f', { text: 'some text' });

      expect(result).toBeNull();
    });

    it('Should return null if children empty 121', () => {
      const struct = { ...structureMock };
      const expectedStruct = { ...structureMock };

      expectedStruct.children = expectedStruct.children.map((child) => {
        if (child.id === 'a1') {
          child.props = { text: 'Typography', name: 'John' };
        }
        return child;
      });

      updateComponentProps(struct, 'a1', { name: 'John' });

      expect(struct).toStrictEqual(expectedStruct);
    });
  });
});
