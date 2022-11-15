/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  fragment LaunchPreviewFragment on Launch {\n    mission_name\n    rocket {\n      rocket_name\n    }\n    links {\n      flickr_images\n    }\n  }\n": types.LaunchPreviewFragmentFragmentDoc,
    "\n  query launchesQuery($offset: Int!, $limit: Int!) {\n    launches(offset: $offset, limit: $limit) {\n      ...LaunchPreviewFragment\n    }\n  }\n": types.LaunchesQueryDocument,
};

export function graphql(source: "\n  fragment LaunchPreviewFragment on Launch {\n    mission_name\n    rocket {\n      rocket_name\n    }\n    links {\n      flickr_images\n    }\n  }\n"): (typeof documents)["\n  fragment LaunchPreviewFragment on Launch {\n    mission_name\n    rocket {\n      rocket_name\n    }\n    links {\n      flickr_images\n    }\n  }\n"];
export function graphql(source: "\n  query launchesQuery($offset: Int!, $limit: Int!) {\n    launches(offset: $offset, limit: $limit) {\n      ...LaunchPreviewFragment\n    }\n  }\n"): (typeof documents)["\n  query launchesQuery($offset: Int!, $limit: Int!) {\n    launches(offset: $offset, limit: $limit) {\n      ...LaunchPreviewFragment\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;