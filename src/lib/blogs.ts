import { globby, convertPathToPattern } from "globby";
import path from "path";

const base = convertPathToPattern(path.join(process.cwd(), "src", "content"))
const files = globby("*.mdx", { cwd: base }).then((namesWithExt) => {
    return namesWithExt.map(nameWithExt => path.basename(nameWithExt, ".mdx"));
});

export {
    files,
};
