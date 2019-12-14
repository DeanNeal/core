
const metadataKey = Symbol('isInput');

export function getFilteredProperties(origin: object): any[] {
  const properties: string[] = Reflect.getMetadata(metadataKey, origin) || [];
  const result = {};
  properties.forEach(key => result[key] = origin[key]);

  return [...properties];
}

export function Input(sourceName): (target: object, propertyKey: string) => void {
  return (target: object, propertyKey: string) => {
    let properties: {}[] = Reflect.getMetadata(metadataKey, target);

    if (properties) {
      properties.push({sourceName: sourceName, propertyKey: propertyKey});
    } else {
      properties = [{sourceName: sourceName, propertyKey: propertyKey}];
      Reflect.defineMetadata(metadataKey, properties, target);
    }
  };
}