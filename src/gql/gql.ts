/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query Launch_Query($launchId: ID!) {\n    launch(id: $launchId) {\n      details\n      mission_name\n      launch_date_utc\n      launch_success\n      rocket {\n        rocket_name\n        rocket_type\n      }\n      links {\n        flickr_images\n      }\n    }\n  }\n": types.Launch_QueryDocument,
};

export function graphql(source: "\n  query Launch_Query($launchId: ID!) {\n    launch(id: $launchId) {\n      details\n      mission_name\n      launch_date_utc\n      launch_success\n      rocket {\n        rocket_name\n        rocket_type\n      }\n      links {\n        flickr_images\n      }\n    }\n  }\n"): (typeof documents)["\n  query Launch_Query($launchId: ID!) {\n    launch(id: $launchId) {\n      details\n      mission_name\n      launch_date_utc\n      launch_success\n      rocket {\n        rocket_name\n        rocket_type\n      }\n      links {\n        flickr_images\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;