import {CracoConfig} from "@craco/types";
import {ShareCracoConfig} from "../../share-craco";

const {ModuleFederationPlugin} = require("webpack").container;
const deps = require("./package.json").dependencies;
export default (): CracoConfig => {
    return ShareCracoConfig({
        devServer: {
            port: 3200,
        },
        webpack: {
            plugins: {
                add: [new ModuleFederationPlugin({
                    name: "remote1",
                    filename: "remoteEntry.js",
                    remotes: {
                        "cart": "cart@http://localhost:3001/remoteEntry.js"
                    },
                    exposes: {
                        "./AppRemote": "./src/App"
                    },
                    shared: {
                        ...deps,
                        react: {singleton: true, requiredVersion: deps.react},
                        "react-dom": {
                            singleton: true,
                            requiredVersion: deps["react-dom"],
                        },
                    }
                })]
            },

        }
    })
}
