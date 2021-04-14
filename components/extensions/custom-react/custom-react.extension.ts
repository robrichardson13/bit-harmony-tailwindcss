import { EnvsMain, EnvsAspect } from '@teambit/envs'
import { ReactAspect, ReactMain } from '@teambit/react'

const webpackConfig = require('./webpack.config');

export class CustomReactExtension {
    constructor(private react: ReactMain) { }

    static dependencies: any = [EnvsAspect, ReactAspect]

    static async provider([envs, react]: [EnvsMain, ReactMain]) {
        const customReactEnv = react.compose([
            react.overrideDevServerConfig(webpackConfig),
            react.overridePreviewConfig(webpackConfig),
        ])

        envs.registerEnv(customReactEnv)

        return new CustomReactExtension(react)
    }
}