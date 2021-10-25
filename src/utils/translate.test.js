import { translate } from "./translate";

describe('translate.js', () => {
  it('should not break when called for a translation', () => {
    translate("Hello", "es", console.log);
  });

  it('should use the provided callback function', (done) => {
    const compareCallback = (data) => {
      try {
        expect(data).toBe("Hola");
        done();
      } catch (error) {
        done(error)
      }
    };

    translate("Hello", "es", compareCallback);
  });
})