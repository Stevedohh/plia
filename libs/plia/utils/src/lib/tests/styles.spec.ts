import { addPxToStyles, removePxFromStyles } from '../styles';

describe('styles related tests', () => {
  describe('addPxToStyles related tests', () => {
    it('Should add px to paddings', () => {
      const result = addPxToStyles({ 'padding-top': 20, 'padding-bottom': 20 });

      expect(result).toStrictEqual({ 'padding-top': '20px', 'padding-bottom': '20px' });
    });

    it('Should add px to margin', () => {
      const result = addPxToStyles({ margin: 50 });

      expect(result).toStrictEqual({ margin: '50px' });
    });

    it('Should add px to padding and return other styles without changes', () => {
      const result = addPxToStyles({ 'padding-top': 20, display: 'flex' });

      expect(result).toStrictEqual({ 'padding-top': '20px', display: 'flex' });
    });

    it('Should return empty object if styles not passed', () => {
      const result = addPxToStyles({});

      expect(result).toStrictEqual({});
    });
  });

  describe('removePxFromStyles related tests', () => {
    it('Should remove px from paddings', () => {
      const result = removePxFromStyles({ 'padding-top': '20px', 'padding-bottom': '20px' });

      expect(result).toStrictEqual({ 'padding-top': 20, 'padding-bottom': 20 });
    });

    it('Should remove px from margin', () => {
      const result = removePxFromStyles({ margin: '50px' });

      expect(result).toStrictEqual({ margin: 50 });
    });

    it('Should remove px from padding and return other styles without changes', () => {
      const result = removePxFromStyles({ 'padding-top': '20px', display: 'flex' });

      expect(result).toStrictEqual({ 'padding-top': 20, display: 'flex' });
    });

    it('Should return empty object if styles not passed', () => {
      const result = removePxFromStyles({});

      expect(result).toStrictEqual({});
    });
  });
});
