import {CracoConfig} from "@craco/types";
import { merge } from "lodash";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
export const ShareCracoConfig = (config: CracoConfig): CracoConfig => {
    let webpackPlugins: any[] = []
    if (config.webpack && config.webpack.plugins) {
        webpackPlugins = config.webpack ? (config.webpack.plugins.add || []) : [];
        const analyzerMode = process.env.ANALYZE
            ? "server"
            : "json";
        if (analyzerMode) {
            webpackPlugins.push(new BundleAnalyzerPlugin({analyzerMode}))
        }
    }

    const __config: CracoConfig = {
        devServer: {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        },
        webpack: {
            plugins: {
                add: [...webpackPlugins]
            },
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
