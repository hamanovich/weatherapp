import { Celsius } from './celsius.pipe';

describe('CelsiusPipe', () => {
  const pipe: Celsius = new Celsius();

  it('should return temperature in Celsius', () => {
    expect(pipe.transform(0)).toEqual(-273.15);
    expect(pipe.transform(273.15)).toEqual(0);
    expect(pipe.transform(373)).toEqual(99.85);
  });
});