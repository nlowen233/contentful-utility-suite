export const CONTENTFUL_API_URL = "https://api.contentful.com";
export const DIFF_FOLDER = "./output/diff/";
export const CONTENT_TYPE_MIGRATION_DIR = "./migrations/";
export const EXPORT_CONTENT_FILE_NAME = "selected-exports.json";
export const EXPORT_ALL_CONTENT_FILE_NAME = ({ envID, spaceID }: { spaceID: string; envID: string }) =>
    `all-content-from-${spaceID}-${envID}.json`;
export const EXPORT_CONTENT_DIR = "./output/exports/";
export const GQL_FIELDS_DIR = "./gqlfields/";
export const GQL_OUTPUT_DIR = "./output/content/";
export const CONTENTFUL_URL = "https://app.contentful.com";
export const SEARCH_RESULT_DIFF = "./output/search-results/";
export const APP_NAME = "contentful-utility-suite";
