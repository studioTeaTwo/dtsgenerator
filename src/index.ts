import 'babel-polyfill';
import { JsonSchemaParser } from './jsonSchemaParser';

try {
    // optional
    require('source-map-support').install();
} catch (e) {
}

export default function dtsgenerator(schemas: JsonSchema[], prefix?: string): Promise<string> {
    const parser = new JsonSchemaParser();
    schemas.forEach((schema) => {
        parser.parseSchema(schema);
    });
    return parser.generateDts(prefix);
}

