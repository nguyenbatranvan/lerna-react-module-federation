import {CracoConfig} from "@craco/types";
import {ShareCracoConfig} from "../../share-craco";

const {ModuleFederationPlugin} = require("webpack").container;
const deps = require("./package.json").dependencies;
export default (): CracoConfig => {
    return ShareCracoConfig({
        devServer: {
            port: 3001,
        },
        webpack: {
            plugins: {
                add: [new ModuleFederationPlugin({
                    name: "cart",
                    filename: "remoteEntry.js",
                    exposes: {
                        "./AppCart": "./src/App",
                        "./CartStore": "./src/store/index.ts"
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
