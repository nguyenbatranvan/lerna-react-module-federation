import {CracoConfig} from "@craco/types";
import {merge} from "lodash";

export const ShareCracoConfig = (config: CracoConfig): CracoConfig => {
    const __config: CracoConfig = {
        devServer: {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        },
        webpack: {
            configure: (config) => {
                return {
                    ...config,
                    optimization: {
                        ...config.optimization
                    },
                    output: {
                        ...config.output,
                        publicPath: "auto"
                    },
                }
            }
        }
    }
    return merge(__config, config);
}
