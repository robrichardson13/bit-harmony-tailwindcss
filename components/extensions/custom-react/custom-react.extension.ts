import { EnvsMain, EnvsAspect } from '@teambit/envs'
import { ReactAspect, ReactMain } from '@teambit/react'

const webpackConfig = require('./webpack.config');
const WebpackShellPlugin = require('webpack-shell-plugin');

export class CustomReactExtension {
    constructor(private react: ReactMain) { }

    static dependencies: any = [EnvsAspect, ReactAspect]

    static async provider([envs, react]: [EnvsMain, ReactMain]) {
        const customReactEnv = react.compose([
            react.overrideDevServerConfig(webpackConfig),
            react.overridePreviewConfig({
                entry: ['./components/styles/tailwind/tailwind.css'],
                plugins: [
                    new WebpackShellPlugin({
                        safe: true,
                        onBuildStart: [
                            'cd ./components/styles/tailwind && npm i && npm run build'
                        ]
                    })
                ]
            })
        ])

        envs.registerEnv(customReactEnv)

        return new CustomReactExtension(react)
    }
}