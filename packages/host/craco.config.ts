import {CracoConfig} from "@craco/types";
import * as path from "path";
import {ShareCracoConfig} from "../../share-craco";

const {ModuleFederationPlugin} = require("webpack").container;
const deps = require("./package.json").dependencies;
export default (): CracoConfig => {
    return ShareCracoConfig({
        devServer: {
            port: 4200,
        },
        webpack: {
            alias: {
                '~@': path.resolve(__dirname, 'src'),
            },
            plugins: {
                add: [new ModuleFederationPlugin({
                    name: "host",
                    remotes: {
                        "remote1": "remote1@http://localhost:3200/remoteEntry.js",
                        "cart": "cart@http://localhost:3001/remoteEntry.js"
                    },
                    shared: {
                        ...deps,
                        react: {singleton: true, requiredVersion: deps.react},
                        "react-dom": {
                            singleton: true,
                            requiredVersion: deps["react-dom"],
                        }
                    }
                })]
            }
        }
    })
}
