import { spawnSync } from "child_process";
import { Space } from "./types.js";

export type ImportContentParams = {
    space: Space;
    environmentID: string;
    path: string;
    willUploadAssets?: boolean;
};

export const importContent = ({ environmentID, path, space, willUploadAssets }: ImportContentParams) => {
    if (!space.managementToken) {
        return {
            error: true,
            errorMessage:
                "Your Space config is missing the Management Token. You cannot complete this functionality without this parameter.",
        };
    }
    const command = "npx";
    const args = [
        "contentful-cli",
        "space",
        "import",
        "--space-id",
        space.spaceID,
        "--environment-id",
        environmentID,
        "--management-token",
        space.managementToken,
        "--content-file",
        path,
    ];
    if (willUploadAssets) {
        args.push("--download-assets");
    }
    const result = spawnSync(command, args, {
        stdio: "inherit",
        shell: true,
    });
    if (result.status === 0) {
        return true;
    } else {
        return false;
    }
};
